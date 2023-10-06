<template>
    <ThemeHeader brand-link="/" :nav-items="navItems"></ThemeHeader>
</template>

<script setup lang="ts">
const navItems = [
    { title: 'Who We Are', url: '/who-we-are' },
    { title: 'What We Do', url: '/what-we-do' },
    { title: 'Progression Framework', url: '/progression' },
    { title: 'Blog', url: '/blog' },
];
</script>
