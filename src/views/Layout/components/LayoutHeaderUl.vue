<script setup>
import { ref, reactive } from 'vue';
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();
</script>
<template>
  <ul class="header-nav">
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li v-for="item in categoryStore.categoryList" :key="item.id">
      <RouterLink active-class="active" :to="`category/${item.id}`">
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  z-index: 998;
  align-items: center;
  li {
    float: left;
    margin-right: 40px;
    font-size: 16px;
    width: 38px;
    a {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      &:hover {
        color: #27ba9b;
        border-bottom: 1px solid #27ba9b;
      }
      .active {
        background-color: #27ba9b;
      }
    }
  }
}
</style>
