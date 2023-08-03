<template>
    <header :class="{ fixed: is_Menu_Open, 'inset-0': is_Menu_Open, 'bg-black': is_Menu_Open }" class="px-4 lg:px-0 ">
        <div class="container flex justify-between mx-auto my-4">
            <img src="https://placehold.co/86x40" alt="">
            <div class="flex gap-4 items-center">
                <menu class="lg:flex gap-4 hidden">
                    <li v-for="item, index in menu" :key="`DesktopMenu${index}`"><router-link v-text="item.name" to="item.to"></router-link></li>
                </menu>

                <a class="p-2" href="#">
                    <svg class="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12.03 16q-.6 0-1.02-.42t-.36-1q.07-1.06.5-1.83t1.35-1.6q1.02-.9 1.56-1.56t.54-1.52q0-1.02-.69-1.7T12 5.7q-.8 0-1.36.34t-.92.84q-.35.5-.86.67t-.98-.03q-.58-.25-.8-.82t.1-1.08Q7.9 4.5 9.13 3.75T12 3q2.63 0 4.04 1.46t1.41 3.51q0 1.25-.54 2.14t-1.68 2.02q-.86.8-1.2 1.3t-.48 1.15q-.1.62-.53 1.02t-1 .4ZM12 22q-.82 0-1.41-.59T10 20q0-.82.59-1.41T12 18q.82 0 1.41.59T14 20q0 .82-.59 1.41T12 22Z" />
                    </svg>
                </a>

                <button class="px-4 py-2 bg-indigo-500 leading-5 text-white rounded-lg lg:w-full">Connect</button>

                <button class="text-white lg:hidden" @click="toggleMenu">
                    <svg class="h-8 w-8" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
                    </svg>
                </button>

            </div>
        </div>
        <nav class="absolute bottom-8 right-8 text-3xl leading-loose" v-if='is_Menu_Open'>
            <menu>
                <li v-for="item, index in menu" :key="`MobileMenu${index}`"><router-link v-text="item.name" to="item.path"></router-link></li>
            </menu>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            is_Menu_Open: false,
            menu:
                [
                    { path: "#", name: "menu1" },
                    { path: "#", name: "menu2" },
                    { path: "#", name: "menu3" },
                    { path: "#", name: "menu4" },
                ],
        }
    },
    methods: {
        toggleMenu() {
            this.is_Menu_Open = !this.is_Menu_Open

        }
    }
}


</script>