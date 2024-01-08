<script setup>
import { ref, reactive } from 'vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>
<template>
  <div class="container">
    <HomeBanner />
  </div>
</template>

<style lang="less" scoped></style>
