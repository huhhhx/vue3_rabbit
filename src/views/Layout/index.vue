<script setup>
import { ref, reactive, onMounted } from 'vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategory());
</script>

<template>
  <div class="main">
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!--二级路由出口 -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
</style>
