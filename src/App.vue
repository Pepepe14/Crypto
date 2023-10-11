<template>
    <div class="py-10">
    <div class="grid grid-flow-row">
    <MainHeader/>
    <!-- v-if="!$route.meta?.hideHeader" -->
    <main class="container min-h-[80vh]">
        <RouterView></RouterView>
    </main>
    <MainFooter v-if="!$route.meta?.hideFooter"/>
</div>
</div>
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

export default {
    components: {
        MainFooter,
        MainHeader, //Manera corta de escribir MainHeader: MainHeader
    }  

}
</script>
