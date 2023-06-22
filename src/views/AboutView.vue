<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HeroSection></HeroSection>
  </div>
</template>
<script>
import HeroSection from '@/components/HeroSection.vue';

export default {
  name: 'AboutView',
  components: {
    HeroSection,
  },
};
</script>
