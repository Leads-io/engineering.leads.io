<template>
    <div class="hero">
        <ThemeContainer>
            <p>{{ subtitle }}</p>
            <h1>{{ title }}</h1>
        </ThemeContainer>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    title: string;
    subtitle?: string;
}
const { title } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.hero {
    background-image: url(./assets/images/bg.png);
    background-color: rgba(60,30,95, 1);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2.5rem 0rem;
    color: #fff;
    font-size: 2rem;
}
</style>

