<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <footer>
    <div class="wrapper">
      <div class="top">
        <ul>
          <li>
            <!-- 可以通过伪元素实现标签 -->
            <i class="iconfont icon-jiagebaohu"></i>
            <span>价格亲民</span>
          </li>
          <li><i class="iconfont icon-wwuliu-"></i> <span>物流快捷</span></li>
          <li><i class="iconfont icon-dianzan"></i> <span>品质新鲜</span></li>
        </ul>
      </div>
      <div class="bottom">
        <ul>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">售后服务</a></li>
          <li><a href="#">配送与验收</a></li>
          <li><a href="#">商务合作</a></li>
          <li><a href="#">搜索推荐</a></li>
          <li><a href="#">友情链接</a></li>
        </ul>
        <p>CopyRight @ 小兔鲜儿</p>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer {
  height: 342px;
  width: 100%;
  background-color: #333;
  // 这里版心为1393px
  .wrapper {
    width: 1393px;
  }
  .top {
    height: 175px;
    border-bottom: 3px solid #434343;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 60px 100px;
      li {
        width: 195px;
        height: 58px;
        // background-color: pink;
        color: white;
        font-size: 28px;
        line-height: 58px;
        vertical-align: middle;
        // background-color: pink;
        i {
          display: inline-block;
          font-size: 58px;
          color: white;
          vertical-align: middle;
          line-height: 58px;
          padding-bottom: 10px;
        }
        span {
          margin-left: 15px;
          vertical-align: middle;
        }
      }
    }
  }

  .bottom {
    height: 175px;
    align-items: center;
    color: #999;
    ul {
      // background-color: pink;
      display: flex;
      justify-content: center;
      padding-top: 40px;
      margin-bottom: 20px;
      li a {
        // float: left;
        padding: 0 10px;
        border-right: 1px solid #999;
        color: #999;
      }
    }
    p {
      // 行内
      text-align: center;
    }
  }
}
</style>
