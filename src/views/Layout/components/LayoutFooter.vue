<script setup>
import { ref, reactive } from 'vue';
</script>
<template>
  <footer>
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
          <dd><i class="iconfont icon-bangzhu"></i>问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-WeChat"></i>公众号</dd>
          <dd><i class="iconfont icon-weibo"></i>微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img src="@/assets/images/qrcode.jpg" alt="" />
          </dd>
          <dd class="download">
            <span>扫描二维码</span><span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000<small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="extra">
      <div class="slogan">
        <a href="javascript:;"
          ><i class="iconfont icon-dianzan"></i><span>价格亲民</span></a
        >
        <a href="javascript:;"
          ><i class="iconfont icon-wwuliu-"></i><span>物流快捷</span></a
        >
        <a href="javascript:;"
          ><i class="iconfont icon-dianzan"></i><span>品质新鲜</span></a
        >
      </div>
      <div class="copyright">
        <p>
          <a href="javascript:;">关于我们</a><a href="javascript:;">帮助中心</a
          ><a href="javascript:;">售后服务</a
          ><a href="javascript:;">配送与验收</a
          ><a href="javascript:;">商务合作</a><a href="javascript:;">搜索推荐</a
          ><a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight @ 小兔鲜儿</p>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer {
  background-color: #f5f5f5;
  padding-top: 20px;
  width: 100%;
  .contact {
    height: 290px;
    background: #fff;
    .container {
      display: flex;
      padding: 60px 0 40px 25px;
      dl {
        height: 190px;
        padding-right: 72px;
        padding-left: 72px;
        text-align: center;
        border-right: 1px solid #f2f2f2;
        color: #999;
        dt {
          font-size: 18px;
          line-height: 1;
        }
        dd {
          float: left;
          width: 92px;
          height: 92px;
          margin: 36px 12px 0 0;
          border: 1px solid #ededed;
          padding-top: 10px;
          .iconfont {
            display: block;
            font-size: 36px;
            color: #666;
            font-weight: bold;
          }
          &:hover {
            .iconfont {
              color: #27ba9b;
            }
          }
        }
        dd:last-child {
          margin-right: 0;
        }
      }
      dl:first-child {
        padding-left: 0;
      }
      dl:last-child {
        padding-right: 0px;
        border: none;
        dd {
          border: none;
        }
      }
      .qrcode {
        width: 92px;
        height: 92px;
        padding: 7px;
        border: 1px solid #ededed;
      }
      .download {
        border: none;
        padding-top: 5px;
        font-size: 14px;
        width: auto;
        height: auto;
        span {
          display: block;
        }
        a {
          display: block;
          padding: 10px 25px;
          margin-top: 5px;
          background-color: #27ba9b;
          border-radius: 2px;
          color: #fff;
          line-height: 1;
        }
      }
      .hotline {
        padding-top: 20px;
        font-size: 22px;
        color: #666;
        width: auto;
        height: auto;
        border: none;
        small {
          display: block;
          font-size: 15px;
          color: #999;
        }
      }
    }
  }
  .extra {
    background-color: #333333;
    .slogan {
      padding: 60px 100px;
      height: 178px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;
        vertical-align: middle;
      }
      i {
        color: white;
        font-size: 50px;
        font-weight: 100;
        margin-right: 10px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      font-size: 15px;
      border-top: 1px solid #434343;
      p {
        color: #999;
        padding-bottom: 20px;
        a {
          color: #999;
          padding-right: 10px;
          padding-left: 10px;
          border-right: 1px solid #999;
        }
        a:last-child {
          border: none;
        }
      }
    }
  }
}
</style>
