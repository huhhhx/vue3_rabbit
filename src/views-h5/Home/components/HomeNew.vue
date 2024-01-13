<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <div class="container">
    <!-- header -->
    <div class="hd">
      <h3>新鲜好物<span>新鲜出炉 品质靠谱</span></h3>
      <a href="#">查看全部<i class="iconfont icon-xiangyoujiantou"></i></a>
    </div>
    <!-- body -->
    <div class="bd clearfix">
      <ul>
        <li>
          <a href="#">
            <img
              src="https://yanxuan-item.nosdn.127.net/2d0a47a51fa4b3e3857f2010bd83bead.jpg
"
              alt=""
            />
          </a>
          <p>拍摄防抖神器哈哈红红火火恍恍惚惚</p>
          <p>￥499.00</p>
          <b>新品</b>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  // 头
  .hd {
    height: 114px;
    line-height: 114px;
    h3 {
      float: left;
      font-size: 29px;
      font-weight: 400;
      height: 114px;
      span {
        margin-left: 34px;
        font-size: 16px;
        color: #999;
      }
    }
    a {
      float: right;
      i {
        margin-left: 13px;
        vertical-align: middle;
      }
    }
  }
  // body
  .bd li {
    width: 304px;
    height: 405px;
    background-color: #f0f9f4;
    float: left;
    margin-right: 8px;
    text-align: center;
    position: relative;
  }
  .bd li:last-child {
    margin-right: 0;
  }
  // 选择第一个p
  .bd ul li p:first-of-type {
    font-size: 22px;
    padding-top: 12px;
    text-align: centers;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bd ul li p:nth-of-type(2) {
    color: #cf4444;
    font-size: 22px;
    padding-top: 12px;
    text-align: centers;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bd li b {
    width: 28px;
    height: 51px;
    border: 1px solid #27ba9b;
    position: absolute;
    border-radius: 10%;
    left: 17px;
    top: 18px;
    font-size: 18px;
    color: #27ba9b;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
