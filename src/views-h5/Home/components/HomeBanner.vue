<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <div class="banner">
    <!-- 轮播图 -->
    <!-- 有多少张图，就有多少个li -->
    <ul>
      <li>
        <a href="#"
          ><img
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
            alt=""
        /></a>
      </li>
    </ul>
    <!-- 侧导航 -->
    <div class="aside">
      <ul>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
        <li>
          <a href="#"
            >生鲜<span>水果 蔬菜</span
            ><i class="iconfont icon-xiangyoujiantou"></i
          ></a>
        </li>
      </ul>
    </div>
    <!-- 箭头 -->
    <a href="#" class="pre"><i class="iconfont icon-xiangzuojiantou"></i></a>
    <a href="#" class="next"><i class="iconfont icon-xiangyoujiantou"></i></a>
    <!-- 轮播图下面的圆点 -->
    <ol>
      <li></li>
      <li></li>
      <li class="current"></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<style lang="less" scoped>
// 伪元素是行内显示模式
.banner {
  height: 500px;
  background-color: #f5f5f5;
  position: relative;
  .aside {
    width: 250px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    position: absolute;
    a {
      // a行内元素 没有宽高 要设置的话要display:block 宽度和父级是一样的
      display: block;
      height: 50px;
      padding-left: 35px;
      padding-right: 19px;
      color: #fff;
      i {
        margin-left: 70px;
      }
      span {
        font-size: 14px;
        margin-left: 15px;
      }
    }
    a:hover {
      background-color: #27ba9b;
    }
    li {
      height: 50px;
      line-height: 50px;
    }
  }
  ol {
    position: absolute;
    left: 680px;
    bottom: 30px;
    height: 10px;
    // width: 200px;
    // background-color: pink;
    padding-left: 0;
    li {
      height: 10px;
      width: 10px;
      background-color: rgba(255, 255, 255, 0.43);
      float: left;
      border-radius: 50%;
      margin-right: 24px;
      cursor: pointer;
    }
  }
}
.pre,
.next {
  height: 44px;
  width: 45px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 228px;
  display: flex;
  i {
    margin: auto;
  }
}
.pre {
  left: 260px;
}
.next {
  right: 10px;
}
.banner ol .current {
  background-color: #fff;
}
</style>
