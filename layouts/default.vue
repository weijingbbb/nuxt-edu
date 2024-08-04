<template>
    <div class="body">
        <NavBar />
        <main class="container">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style>
.body {
    min-width: 1200px;
    @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>