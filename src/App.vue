<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import headbg from './assets/images/headbg.png'
import { Search } from '@element-plus/icons-vue' //搜索图标
import logo from './assets/images/logo.png'

/**
 * 导航栏
 */
const activeIndex=ref('')
const navList=ref([
    {
        name:'Eyeglasses',
        key:'Eyeglasses'
    },
    {
        name:'SunGlasses',
        key:'SunGlasses'
    },
    {
        name:'New In',
        key:'New'
    },
    {
        name:'Accessories',
        key:'Accessories'
    },
    {
        name:'Highlights',
        key:'Highlights'
    },
    {
      name:'Flash Sale',
      key:'FlashSale'
    },
    {
      name:'Featured',
      key:'Featured'
    }
])

const searchKey=ref('')
</script>

<template>
  <div class="headdb">
    <img :src="headbg" alt="headbg" width="672" height="50" />
  </div>
  <el-affix :offset="0">
    <div class="headbar">
      <div class="headbar-left">
        <div>
          <div>
            Free standard shipping on USD $69.00+ 
            <el-popover
              placement="top-start" :show-arrow="false" width="520" 
              trigger="hover"
            >
              <template #reference>
                <i class="iconfont icon-help"></i>
              </template>
              <ul class="slide-down">
                <li >1. Free shipping over USD $69.00 <br data-v-7fa3457a="">(US/CA/UK/FR/DE/NL/ES/IE/SG/AU/NZ/CH/SE/FI/IT/MA/KR/MX/BE/PT/AT/JP/PL/BR)</li>
                <li >2. Free shipping is calculated before shipping fees.</li>
                <li >3. Limited to standard shipping.</li>
                <li >4. Automatically apply without coupon code.</li>
              </ul>
            </el-popover>
          </div>
        </div>
        <div style="margin-left:30px">
          <div>
            Buy 1, get other frames 50% off
            <el-popover
              placement="top-start" :show-arrow="false" width="520"
              trigger="hover"
            >
              <template #reference>
                <i class="iconfont icon-help"></i>
              </template>
              <ul data-v-7fa3457a="" class="slide-down">
                <li data-v-7fa3457a="">1. Please select at least two frames, 50% off is automatically applied to the rest of frames that have a lower price (applicable for up to 9 frames in one order).</li>
                <li data-v-7fa3457a="">2. Not eligible for frames under $8.</li>
              </ul>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="headbar-right">
        <el-button type="text" class="headbar-right-btn">Help Center</el-button>
        <el-button type="text" class="headbar-right-btn">Track order</el-button>
      </div>
    </div>
    <div class="headbar2">
      <div class="nav-left">
        <h1>
          <img :src="logo" alt="">
        </h1>
        <el-menu :default-active="activeIndex"
          class="mene-nav"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item v-for="item in navList" :key="item.key" :index="item.key">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="nav-right">
        <div class="search-box">
          <el-input
            v-model="searchKey"
            class="search-input"
            size="large"
            placeholder="Search..."
            :suffix-icon="Search"
          />
        </div>
        <div class="user-box"></div>
        <div class="wish-box"></div>
        <div class="cart-box"></div>
        <div class="icon-earth"></div>
      </div>
    </div>
  </el-affix>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<style lang="scss" scoped>
.headdb {
  background:url(https://cloudfront.zeelool.com/media/oc_block/catalog/0-0-0-0915/bg.png) center top / 100% 100% no-repeat;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  height: 50px;
  font-size: 26px;
  font-family: ProximaNova-Semibold;
  color: #fff;
  cursor: pointer;
  img{
    display: block;
    position: relative;
    width: 672px;
    height: auto;
  }
  @media screen and (max-width: 1600px) {
    img{
      width: 550px;
    }
  }
}
.headbar{
  display: flex;
  justify-content: space-between;
  background-color:#f5f6f7;
  padding: 0 50px;
  height: 42px;
  align-items: center;
  .headbar-left{
    flex: 1;
    display: flex;
  }
  .headbar-right-btn{
    color:#666
  }
}
.slide-down{
  list-style-type: none;
  width: 540px;
  padding-left: 0;
  li{
    line-height: 30px;
    font-size: 14px;
    color: #666;
    word-break: break-word;
  }
}
.headbar2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;
  width: 100%;
  height: 65px;
  padding: 0 50px;
  border-bottom: 1px solid #f3f3f4;
  box-sizing: border-box;
  background-color: #fff;
  .nav-left{
    display: flex;
    align-items: center;
    h1{
      margin-right: 30px;
      cursor: pointer;
      img{
        width:163px
      }
    }
    .mene-nav{
      border-bottom: none;
      min-width: 720px;
      flex: 1;
      :deep(.el-menu-item){
        padding: 0 10px;
        &:hover{
          background-color: #FFF;
        }
      }
    }
  }
  .nav-right{
    .search-input{
      width:185px;
      height:35px;
      border: none;
      :deep(.el-input__wrapper){
        background:#f5f6f7;
        box-shadow: none;
      }
    }
  }
}
</style>
