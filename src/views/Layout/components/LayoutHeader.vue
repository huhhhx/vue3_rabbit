<script setup>
import { ref, reactive } from 'vue';
import LayoutHeaderUl from './LayoutHeaderUl.vue';
import HeaderCart from './HeaderCart.vue';
</script>
<template>
  <header class="app-header">
    <div class="container">
      <router-link to="/">小兔鲜儿</router-link>
      <LayoutHeaderUl />
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 头部购物车 -->
      <HeaderCart />
    </div>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
    .search {
      height: 32px;
      width: 170px;
      line-height: 32px;
      border-bottom: 1px solid #e7e7e7;
      i {
        padding-left: 5px;
        font-size: 18px;
      }
      input {
        width: 140px;
        padding-left: 5px;
      }
    }
  }
}
.container a:first-of-type {
  display: block;
  width: 200px;
  height: 132px;
  background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
  font-size: 0;
}
</style>
