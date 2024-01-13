<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <nav>
    <div class="wrapper">
      <ul>
        <li><a href="#">请先登录</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="less" scoped>
nav {
  height: 52px;
  background-color: #333;
  width: 100%;
}

.wrapper ul {
  float: right;
  li {
    float: left;
    line-height: 52px;
    a {
      padding: 0 16px;
      border-right: 1px solid #666;
      font-size: 14px;
      color: #dcdcdc;
    }
  }
}
</style>
