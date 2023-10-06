<template>
    <Head>
        <Title>Blog</Title>
    </Head>
    <ThemeContainer class="progression">
        <h2>Blog Posts</h2>
        <div class="posts">
            <ThemeCard v-for="post in allPosts" :key="post._path">
                <h3>{{ post.title }}</h3>
                <p>{{ post.excerpt ?? post.description }}</p>
                <NuxtLink :to="`${post._path}`">Read more</NuxtLink>
            </ThemeCard>
        </div>
    </ThemeContainer>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface BlogPost extends MarkdownParsedContent {
  author: string
}

definePageMeta({
  key: route => route.fullPath
});

const allPosts = await queryContent<BlogPost>('/blog').find();

</script>

<style lang="scss" scoped>
.posts {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-gap: 50px;
}
</style>