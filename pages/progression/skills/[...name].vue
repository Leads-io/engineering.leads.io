<template>
    <div>
        <ContentDoc class="roles-content" :path="path">
            <template #not-found>
                <p>Page not found</p>
            </template>
        </ContentDoc>
    </div>
</template>

<script setup>
const { path } = useRoute();
</script>