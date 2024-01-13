<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue';
// vueUse
import { useScroll } from '@vueuse/core';
const { y } = useScroll(window);
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <router-link to="/" class="logo">小兔鲜儿</router-link>
      <LayoutHeaderUl />
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-header-sticky {
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 0;
  left: 0;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;
  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
    .logo {
      display: block;
      height: 80px;
      width: 200px;
      background: url('@/assets/images/logo.png') no-repeat right 2px;
      background-size: 160px auto;
      font-size: 0;
    }
    .right {
      width: 220px;
      display: flex;
      align-items: center;
      padding-left: 40px;
      border-left: 2px solid #27ba9b;
      justify-content: space-around;
      a {
        font-size: 16px;
        // line-height: 1;
        &:hover {
          color: #27ba9b;
        }
      }
    }
  }
}
</style>
