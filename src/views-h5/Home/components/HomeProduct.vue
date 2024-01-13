import { RIGHT_CHECK_CHANGE_EVENT } from 'element-plus';
<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <div class="container">
    <div class="hd">
      <h3>生鲜</h3>
      <a href="#" class="more"
        >查看全部<i class="iconfont icon-xiangyoujiantou"></i
      ></a>
      <ul>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">水果</a></li>
      </ul>
    </div>
    <div class="bd">
      <div class="left">
        <a href="#"><img src="" alt="" /></a>
      </div>
      <div class="right">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">8</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hd {
  margin-top: 20px;
  height: 116px;
  line-height: 116px;
  h3 {
    float: left;
    font-weight: 400;
    font-size: 29px;
  }
  .more {
    margin-left: 65px;
    float: right;
    padding: 3px 0px;
  }
  i {
    margin-left: 10px;
    vertical-align: middle;
  }
  ul li {
    float: right;
    a {
      padding: 3px 7px;
      margin-left: 6px;
    }
    a:hover {
      background-color: #27ba9b;
      color: #fff;
    }
  }
}
.container .bd {
  display: flex;
  width: 100%;
  .left {
    width: 240px;
    height: 610px;
    background-color: yellow;
    flex-shrink: 0;
    a {
    }
  }
  .right {
    // margin-left: 5px;
    flex-grow: 1;
    background-color: green;
    ul {
      li {
        float: left;
        height: 304px;
        width: 240px;
        margin-left: 10px;
      }
    }
  }
}
</style>
