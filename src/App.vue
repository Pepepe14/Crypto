<template>
    <MainHeader />
    <main>
        <RouterView></RouterView>
    </main>
    <MainFooter />
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
export default {
    components: {
        MainFooter: MainFooter,
        MainHeader, //Manera corta de escribir MainHeader: MainHeader
    }
}
</script>
