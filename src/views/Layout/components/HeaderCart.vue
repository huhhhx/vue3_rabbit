<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <div class="cart">
    <a href="javascript:;" class="curr">
      <i class="iconfont icon-cart"><em>1</em></i>
    </a>
  </div>
</template>

<style lang="less" scoped>
.cart {
  width: 50px;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
      font-size: 22px;
      font-weight: bold;
      em {
        font-size: 12px;
        background-color: #e26237;
        font-style: normal;
        position: absolute;
        top: 0;
        right: 0px;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        font-family: Arial;
        // 将 line-height 设置为1表示该元素的文本行高与字体大小相等。
        line-height: 1;
        // 撑开元素空隙
        padding: 1px 6px;
      }
    }
  }
}
</style>
