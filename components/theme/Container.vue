<template>
    <div class="container">
        <slot />
    </div>
</template>

<style>
.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%
}

@media (min-width: 640px) {
    .container {
        max-width:640px
    }
}

@media (min-width: 768px) {
    .container {
        max-width:768px;
        padding-left: 20px;
        padding-right: 20px
    }
}

@media (min-width: 1024px) {
    .container {
        max-width:1024px
    }
}

@media (min-width: 1300px) {
    .container {
        max-width:1300px
    }
}
</style>