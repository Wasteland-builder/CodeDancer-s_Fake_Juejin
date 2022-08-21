<template>
  <!-- 最顶部的导航栏 -->
  <div :class="{ 'wrapper': true, 'wrapper-visible': visible }">
    <div class="top-bar">
      <router-link class="logo" to="/">
        <img src="../../assets/logo.svg">
      </router-link>

      <nav class="main-nav">
        <div class="nav-list">
          <div class="left-nav-list">
            <ul class="list">
              <li v-for="(item, index) in navList" :key="index">
                <router-link :to="item.to">{{ item.text }}</router-link>
              </li>
              <nav>
                <a href="https://detail.youzan.com/show/goods/newest?kdt_id=104340304" target="_blank">商城</a>
              </nav>
              <nav>
                <a href="https://juejin.cn/app?utm_source=jj_nav" target="_blank">APP</a>
              </nav>
              <nav>
                <a href="https://juejin.cn/extension?utm_source=jj_nav" target="_blank">插件</a>
              </nav>
            </ul>
          </div>

          <div class="right-nav-list">
            <div class="search-add">
              <ul class="search-add-ul">
                <li class="search">
                  <form action="" class="search-form">
                    <input type="search" maxlength="32" placeholder="探索稀土掘金" value class="search-input">
                    <div class="search-icon-wrapper">
                      <img src="../../assets/search.svg" alt="搜索" class="search-icon">
                    </div>
                  </form>
                </li>

                <li class="creator-item">
                  <div class="add-group">
                    <button class="add-btn">创作者中心</button>
                    <div class="more">
                      <svg t="1659336157319" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1039" width="200" height="200">
                        <path d="M512.13578683 762.52670389l260.71071625-451.49121434H251.49296399z" p-id="1040"></path>
                      </svg>
                    </div>
                    <ul class="more-list">
                      <li class="item">
                        <span>写文章</span>
                      </li>
                      <li class="item">
                        <span>发沸点</span>
                      </li>
                      <li class="item">
                        <span>写代码</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div class="vip">
              <div class="vip-title">
                <img src="../../assets/vip.svg" alt="vip" class="vip-img">
                <div class="vip-word">会员</div>
              </div>
            </div>

            <template v-if="true">
              <div class="notice">
                <a href="https://juejin.cn/notification" class="notice-img">
                  <svg t="1659336685043" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="801" width="24" height="24">
                    <path
                      d="M509.6941037 1016.86992592h6.67496297c63.83691852-0.84954075 117.35798518-46.60337778 125.36794074-107.40622222H384.32616297c8.00995555 60.80284445 61.53102222 106.67804445 125.36794073 107.40622222zM827.17961482 616.97896297V389.30204445c0.72817778-127.7952-86.04634075-239.08503703-208.98702223-267.96942223v-5.46133333c0.9709037-38.47205925-18.81125925-74.51685925-51.57925926-94.17765926-32.88936297-19.53943703-73.54595555-19.53943703-106.43531851 0s-52.55016297 55.58423703-51.57925927 94.17765926v5.46133333C285.29398518 149.97428148 198.15537778 261.38548148 198.88355555 389.30204445v227.67691852c-62.98737778 50.1229037-100.97398518 125.61066667-104.25078518 206.55976295h836.79762963c-3.15543703-80.9490963-41.26340741-156.43685925-104.25078518-206.55976295z"
                      fill="#B8B4B4" p-id="802"></path>
                  </svg>
                </a>
              </div>
              <div class="user-item">
                <div class="user-div">
                  <img
                    src="https://p6-passport.byteacctimg.com/img/user-avatar/e6242a6ce1d0e3316ac462e96cd5df4f~300x300.image"
                    alt="succyag的头像" class="user-img">
                </div>
                <ul class="user-menu">

                </ul>
              </div>
            </template>
            <template v-else>
              <div>
                <button>登录</button>
              </div>
            </template>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: "TopCpn",
  props: ['currentIndex'],
  setup() {
    let visible = ref(false)
    const navList = [
      { text: '首页', to: '/' },
      { text: '沸点', to: '/hot' },
      { text: '课程', to: '/course' },
      { text: '直播', to: '/live' },
      { text: '活动', to: '/events' },
    ]
    const showSearch = () => {
      let scrollTop = ref(document.body.scrollTop)
      console.log(scrollTop)
      if (scrollTop > 3000) {   // 当页面滚动到高度300px处，动态绑定class 来设置头部固定定位
        visible = true;
      } else {
        visible = false;
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", showSearch)
      // console.log(1111)
    })
    return {
      navList,
      visible
    }
  }
}
</script>

<style scoped lang="less">
.router--active,
.router-link-exact-active {
  color: #1e80ff !important;
}

.wrapper {
  background-color: white;
  border-bottom: 1px solid #f1f1f1;

  .top-bar {
    position: fixed;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: auto;
    max-width: 1440px;
    position: relative;

    .logo {
      margin-right: 1rem;
      margin-left: 24px;
      display: inline-block;
      height: 22px;
      width: auto;
      cursor: pointer;
      color: #909090;

      img {
        display: block;
        width: 107px;
        height: 22px;
        border-style: none;
      }
    }
  }

  .main-nav {
    height: 100%;
    flex: 1 0 auto;
    display: block;

    .nav-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      flex-direction: row-reverse;
      height: 100%;
      margin: 0;
      padding: 0;

      .left-nav-list {
        display: flex;
        order: 99;
        list-style: none;
        text-align: -webkit-match-parent;

        .list {
          display: flex;
          padding: 0;
          margin: 0;
          list-style-type: circle;

          .item-active {
            color: #1e80ff
          }

          li,
          nav {
            position: relative;
            padding: 0;
            height: 5rem;
            font-size: 1.167rem;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            list-style: none;
            font-size: 1.167rem;

            a {
              box-sizing: border-box;
              display: inline-block;
              height: 5rem;
              margin: 0 1rem;
              line-height: 5rem;
              position: relative;
              cursor: pointer;
              color: rgb(113, 119, 124);
              font-size: 1.2rem;
            }

            a:nth-child(1):hover {
              color: #1e80ff;
              border-bottom: 2px solid #1e80ff;
            }

            a::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }
          }
        }
      }

      .right-nav-list {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 100%;
        margin: 0;
        order: 0;
        padding: 0;

        .search-add {
          flex: 1 1 auto;
          height: 5rem;
          display: flex;
          justify-content: flex-end;
          list-style: none;

          .search-add-ul {
            display: flex;
            justify-content: flex-start;
            padding: 0;
            margin: 0;
            width: 42.833rem;

            .search {
              cursor: auto;
              padding-left: 0;
              color: #86909c;
              padding: 0 1rem;
              font-size: 1.167rem;
              margin: 0;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              list-style: none;

              .search-form {
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 4px;
                position: relative;
                height: 2.834rem;
                border: 1px solid #c2c8d1;
                transition: width .2s;
                margin-top: 0em;
                width: 360px;

                .search-input {
                  border: none;
                  width: calc(100% - 44px);
                  padding: 0.6rem 0 0.6rem 1rem;
                  box-shadow: none;
                  outline: none;
                  color: #8a919f;
                  background-color: transparent;
                  transition: width .3s;
                  margin: initial;
                  overflow: visible;
                  font: inherit;
                  font-size: 1.1rem;
                }

                .search-input::placeholder {
                  color: rgb(192, 196, 203);
                }

                .search-icon-wrapper {
                  position: relative;
                  left: -2px;
                  width: 44px;
                  height: 30px;
                  background: #f2f3f5;
                  border-radius: 2px;
                  display: block;

                  .search-icon {
                    display: inline-block;
                    width: 1.33rem;
                    padding: 0 0.8333rem 0 0;
                    cursor: pointer;
                    margin: 7px 15px;
                    border-style: none;
                  }
                }

              }
            }

            .creator-item {
              overflow: visible;
              width: 11rem;
              padding: 0 1rem;
              cursor: default;
              transition: width .3s;
              color: #86909c;
              padding-left: 5px;
              font-size: 1.167rem;
              margin: 0;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              list-style: none;
              padding-right: 0;

              .add-group {
                display: flex;
                align-items: center;
                position: relative;
                cursor: pointer;
                width: 115px;
                height: 3rem;

                .add-btn {
                  padding: 0 1rem;
                  font-size: 1.167rem;
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                  white-space: nowrap;
                  height: 100%;
                  color: #fff;
                  background-color: #1e80ff;
                  border-radius: 3px;
                  transition: background-color .1s linear .05s;
                  appearance: none;
                  border: none;
                  outline: none;
                  cursor: pointer;
                  margin: initial;
                  text-transform: none;
                  font: inherit;
                }

                .more {
                  flex: 0 0 auto;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 1.667rem;
                  border-left: 1px solid hsla(0, 0%, 100%, .1);
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  box-sizing: border-box;
                  height: 100%;
                  color: #fff;
                  background-color: #1e80ff;
                  border-radius: 3px;
                  transition: background-color .1s linear .05s;

                  svg {
                    overflow: hidden;
                  }
                }

                .more-list {
                  position: absolute;
                  top: 120%;
                  left: -7px;
                  right: 0;
                  padding: 0.417rem 0;
                  font-size: 1.167rem;
                  color: #515767;
                  background-color: #fff;
                  display: none;
                  z-index: 1;
                  box-shadow: 0 0 24px rgb(81 87 103 / 16%);
                  border-radius: 6px;
                  width: 10rem;
                  margin: 0;
                  cursor: pointer;
                }
              }
            }
          }
        }

        .vip {
          color: #86909c;
          padding: 0 1rem;
          font-size: 1.167rem;
          margin: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          list-style: none;

          .vip-title {
            display: flex;
            align-items: center;

            .vip-img {
              width: 24px;
              height: 24px;
              border-style: none;
            }

            .vip-word {
              color: #86909c;
              font-weight: 400;
              font-size: 14px;
              line-height: 22px;
              margin-left: 4px;
              display: block;
            }
          }
        }

        .notice {
          position: relative;
          background-color: #fff;
          color: #86909c;
          padding: 0 1rem;
          padding-right: 2rem;
          font-size: 1.167rem;
          margin: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          list-style: none;

          .notice-img {
            color: #515767;
            position: relative;
            text-decoration: none;
            cursor: pointer;
            margin: initial;
            background-color: transparent;

            .iconfont {
              fill: #8a919f;
              stroke: #8a919f;
              width: 24px;
              height: 24px;
            }
          }
        }

        .user-item {
          padding: 0 1rem;
          position: relative;
          padding-left: 0;
          background-color: #fff;
          padding-right: 0;
          color: #86909c;
          font-size: 1.167rem;
          margin: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          list-style: none;

          .user-div {
            display: block;
            color: #86909c;
            font-size: 1.167rem;

            .user-img {
              position: relative;
              object-fit: cover;
              background-position: 50%;
              background-repeat: no-repeat;
              display: inline-block;
              background-size: cover;
              background-color: #eee;
              border-radius: 50%;
              width: 3rem;
              height: 3rem;
              margin-right: 2rem;
              border-style: none;
              color: #86909c;
              font-size: 1.167rem;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

.wrapper-visible {
  display: none;
}
</style>