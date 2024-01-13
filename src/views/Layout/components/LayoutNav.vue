<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <nav class="topnav">
    <div class="container">
      <ul>
        <!-- <template> -->
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <!-- </template> -->
      </ul>
    </div>
  </nav>
</template>

<style lang="less" scoped>
.topnav {
  background: #333333;
  height: 53px;
  width: 100%;
  .container {
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 53px;
      li {
        a {
          color: #cdcdcd;
          padding: 0 15px;
          display: inline-block;
          line-height: 1;
          &:hover {
            color: #27ba9b;
          }
        }
        // 悬着第一个li后面的同级元素
        ~ li {
          a {
            border-left: 2px solid #666;
          }
        }
      }
    }
  }
}
</style>
