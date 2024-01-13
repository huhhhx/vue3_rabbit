<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getCategoryAPI } from '@/apis/layout.js';

const categorylist = ref([]);
const getCategory = async () => {
  const categoryList = await getCategoryAPI();
  categorylist.value = categoryList.data.result;
  console.log(categoryList);
};
onMounted(() => {
  getCategory();
});
</script>
<template>
  <header>
    <div class="wrapper" style="display: flex">
      <div class="logo">
        <h1><a href="#">小兔鲜儿</a></h1>
      </div>
      <div class="nav">
        <ul>
          <li>
            <a href="#"><RouterLink to="/">首页</RouterLink></a>
          </li>
          <li v-for="item in categorylist" :key="item.id">
            <a href="#"
              ><RouterLink to="/">{{ item.name }}</RouterLink></a
            >
          </li>
        </ul>
      </div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a href="#"><i class="iconfont icon-cart"></i></a>
        <span>2</span>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  height: 70px;
  width: 100%;
  margin: 30px auto;
}
// logo 搜索引擎优化
.logo {
  width: 180px;
  height: 70px;
  h1 {
    width: 180px;
    height: 70px;
    a {
      // a标签要设置为块级元素才能设置宽高
      display: block;
      width: 180px;
      height: 70px;
      background: url(../../../assets/images/logo.png) no-repeat;
      //  让h1中的字看不见，但是在搜索的时候可以搜到
      font-size: 0;
      background-size: contain;
    }
  }
}
.nav {
  margin-left: 40px;
  height: 70px;
  li {
    float: left;
    line-height: 70px;
    margin-right: 48px;
    a:hover {
      color: #27ba9b;
      padding-bottom: 7px;
      text-decoration: dashed !important;
    }
  }
}
.search {
  width: 172px;
  height: 30px;
  margin-left: 34px;
  margin-top: 24px;
  position: relative;
  border-bottom: #e7e7e7 2px solid;
  .icon-search {
    font-size: 18px;
    position: absolute;
    left: 2px;
    top: 0;
  }
  input {
    padding-left: 30px;
    width: 172px;
    height: 28px;
    color: #666;
    background: #f5f5f5;
  }
}
.cart {
  width: 23px;
  height: 23px;
  margin-left: 15px;
  margin-top: 28px;
  position: relative;
  a .icon-cart {
    font-size: 22px;
    font-weight: bold;
  }
  span {
    // 绝对定位，盒子会具备行内块的特点
    position: absolute;
    left: 13px;
    height: 15px;
    width: 20px;
    border-radius: 8px;
    background-color: #e26237;
    text-align: center;
    font-size: 13px;
    color: white;
    line-height: 15px;
  }
}
</style>
