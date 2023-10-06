<template>
    <div>
        <ThemeHero :title="post.title" :subtitle="postDate" />
        
        <ThemeContainer>
            <ContentDoc class="roles-content" :path="path">
                <template #not-found>
                    <p>Page not found</p>
                </template>
            </ContentDoc>
            <p>By {{ post.author }}</p>
        </ThemeContainer>
    </div>
</template>

<script setup>
const { path } = useRoute();
const { data: post } = await useAsyncData('home', () => queryContent(path).findOne());
useContentHead(post);
const postDate = useLocaleDate(post.date);
</script>

<style lang="scss" scoped>
:deep(.roles-content) {
    h3 {
        a {
            text-decoration: none;
        }
        em {
            background-color: rgba(255, 0, 0, 0.3);
            padding: 2px 5px;
            opacity: 0.7;
            color: red;
        }
    }
}
</style>