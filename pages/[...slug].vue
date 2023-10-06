<template>
    <ThemeHero :title="page?.title"/>
    <ThemeContainer class="content">
        <ThemeMenu :items="navigation" />
        <ContentDoc :path="path">
            <template #not-found>
                <p>Page not found</p>
            </template>
        </ContentDoc>
    </ThemeContainer>
</template>

<script setup>
const { path } = useRoute();
const { data: page } = await useAsyncData('page', () => queryContent(path).findOne());
useContentHead(page);
const { data: navigation } = await useAsyncData('navigation', async () => {
    const parentPath = path.split('/').slice(0, 2).join('/');
    console.log(parentPath, path);
    const nav = await fetchContentNavigation(parentPath !== '' ? parentPath : path);
    return nav[0].children
        .map((group) => ({
            label: group.title,
            key: group._path,
            children: group.children?.map((page) => ({ label: page.title, key: page._path}))
        }))
        .filter(({ label }) => label !== '');
});
</script>

<style lang="scss">
.content {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 25% 1fr;
}
</style>