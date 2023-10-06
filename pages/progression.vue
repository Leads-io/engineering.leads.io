<template>
    <ThemeHero :title="page?.title"/>
    <div class="progression">
        <nav class="progression__nav">
            <ThemeMenu :items="navigation" @selected="selected"/>
        </nav>
        <div class="progression__content">
            <div>
                <ContentDoc class="roles-content" :path="path">
                    <template #not-found>
                        <p>Page not found</p>
                    </template>
                </ContentDoc>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  key: route => route.fullPath
});
const { path } = useRoute();
const router = useRouter();

const { data: page } = await useAsyncData('skill', () => queryContent(router.currentRoute.value.path).findOne());
useContentHead(page);

const { data: navigation } = await useAsyncData('navigation', async () => {
    const nav = await fetchContentNavigation('/progression/skills');
    return nav[0].children[0].children.map((group) => ({
        label: group.title,
        key: group._path,
        children: group.children.map((skill) => ({
            label: skill.title,
            key: skill._path,
        })),
    }));
});

const selected = (skill) => {
    router.push(skill.key);
}
</script>

<style lang="scss" scoped>
.progression {
    display: grid;
    grid-template-columns: 33% 1fr;

    &__nav {
        padding: 1rem;
        background: #e6e6e6;
    }

    &__content {
        padding: 1rem;
    }
}
</style>