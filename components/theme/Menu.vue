<template>
    <ul class="menu">
        <li v-for="menuItem in items" :key="menuItem.key" :class="{'menu__link': menuItem.children?.length ?? 0 === 0 }">
            <template v-if="menuItem.children">
                <p class="menu__header" @click="selected(menuItem)">{{ menuItem.label }}</p>
                <Menu v-if="menuItem.children" :items="menuItem.children" />
            </template>
            <template v-else>
                <NuxtLink :to="menuItem.key">{{ menuItem.label }}</NuxtLink>
            </template>
        </li>
    </ul>
</template>

<script setup lang="ts">
interface MenuItem {
    label: string;
    children: MenuItem[];
    key: string;
}

interface Props {
    items: MenuItem[];
}

const { items } = defineProps<Props>();
const selectedItems = ref([]);

const selected = (item) => {
    const set = new Set(selectedItems.value);
    if (set.has(item.key)) {
        set.delete(item.key);
    } else {
        set.add(item.key);
    }
    selectedItems.value = [...set];
}

const menuIsExpanded = (key) => {
    return selectedItems.value.includes(key);
}
</script>

<style lang="scss" scoped>

.menu {
    list-style: none;
    margin-bottom: 1rem;

    & li>ul {
        margin-left: 1rem;
    }

    &__header {
        font-size: 1.5rem;
    }

    &__link {
        margin-top: 0.5rem;
    }
}
</style>