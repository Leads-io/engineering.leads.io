
import { ProseP } from '~~/.nuxt/components';
<template>
    <header class="header">
        <ThemeContainer class="header__container">
            <NuxtLink to="/"><img src="/assets/images/logo.svg" class="brand" /></NuxtLink>
            <nav class="nav">
                <ul class="nav__list">
                    <li v-for="navItem in props.navItems" class="nav__item">
                        <NuxtLink :to="navItem.url">{{ navItem.title }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </ThemeContainer>
    </header>
</template>

<script setup lang="ts">
interface NavItem {
    title: string;
    url: string;
}

interface Props {
    brandLink: string;
    navItems: NavItem[];
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.header {
    --header-color: #e6e6e6;

    background: linear-gradient(90deg,#fff 50%,var(--header-color) 0);

    &__container {
        display: grid;
        grid-template-columns: 25% 75%;
    }
}
.brand {
    padding: 1.5rem 0rem;
}
.nav {
    background: var(--header-color);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__list {
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: flex-end;
    }
    &__item {
        padding: 15px 30px;
        font-weight: 700;

        & a {
            text-decoration: none;
            color: rgba(60,30,95, 1);

            &:hover {
                color: rgba(255,105,100, 1);
            }
        }
    }
}
</style>