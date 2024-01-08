<template>
  <div class="main">
    <LayoutNav />
    <LayoutHeader />
    <!--二级路由出口 -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
