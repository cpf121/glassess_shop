<template>
    <div class="flashwrap">
        <section class="right-wrap">
            <a href="" class="title" style="background: url(&quot;https://cloudfront.zeelool.com/media/oc_block/catalog/0-0-0-0915/lQDPJxawNJ8MX7bMgs0HHLBGK-5lfJ6BSwMhwvAWgOwA_1820_130.jpg&quot;) center center / 100% 100% no-repeat;"></a>
            <div class="five-list">
                <a v-for="item in fiveList" href="" class="five-link">
                    <img width="263" class="img" :src="item.imgpath" />
                    <img  class="icon" :src="item.indexImg" />
                    <div class="bottom-name">
                        <span class="five-name">{{item.name}}</span>
                        <div class="five-box">
                            <div class="five-fprice">{{item.fprice}}</div>
                            <del class="five-price">{{item.price}}</del>
                        </div>
                    </div>
                </a>
            </div>
            <div class="swiper-box">
                <swiper :slidesPerView="4" :slidesPerGroup="4" :navigation="true" :modules="modules">
                    <swiper-slide class="swipe-item" v-for="item in swiperlist">
                        <a href="">
                            <img :src="item.imgpath" width="261" height="131" />
                            <span>{{item.name}}</span>
                            <p>
                                <span :class="{'on':item.fprice!=undefined}">{{item.price}}</span>
                                <del v-if="item.fprice">{{item.fprice}}</del>
                            </p>
                        </a>
                    </swiper-slide>
                </swiper>
                <div class="more">
                    <el-button type="primary" class="more-btn">VIEW MORE</el-button>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import firIcon from '@/assets/images/HomePages/top_icon01.png'
import secIcon from '@/assets/images/HomePages/top_icon02.png'
import thirdIcon from '@/assets/images/HomePages/top_icon03.png'
import fourIcon from '@/assets/images/HomePages/top_icon04.png'
import fiveIcon from '@/assets/images/HomePages/top_icon05.png'
import top1 from '@/assets/images/HomePages/top_2-2.jpg'
import top2 from '@/assets/images/HomePages/top_2.jpg'
import top3 from '@/assets/images/HomePages/top_3.jpg'
import top4 from '@/assets/images/HomePages/top_4.jpg'
import top5 from '@/assets/images/HomePages/top_5.jpg'

import glasses1 from '@/assets/images/HomePages/01_416.jpg'
import glasses2 from '@/assets/images/HomePages/01_417.jpg'
import glasses3 from '@/assets/images/HomePages/1_826_1.jpg'
import glasses4 from '@/assets/images/HomePages/01_908.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css/navigation";
import { Navigation } from "swiper";

const fiveList=ref([
    {
        indexImg:firIcon,
        imgpath:top1,
        name:'Darice',
        fprice:'US $7.00',
        price:'US $30.95'
    },
    {
        indexImg:secIcon,
        imgpath:top2,
        name:'Denis',
        fprice:'US $12.95',
        price:'US $25.95'
    },
    {
        indexImg:thirdIcon,
        imgpath:top3,
        name:'Cassells',
        fprice:'US $7.00',
        price:'US $30.95'
    },
    {
        indexImg:fourIcon,
        imgpath:top4,
        name:'Fezell ',
        fprice:'US $15.00',
        price:'US $28.95'
    },
    {
        indexImg:fiveIcon,
        imgpath:top5,
        name:'Qatar',
        fprice:'US $9.95',
        price:'US $25.95'
    }
])
const modules = [Navigation];
const swiperlist = ref([
    {
        imgpath:glasses1,
        name:'Eleanore Cat Eye Pink Glasses',
        price:'US $28.95',
    },
    {
        imgpath:glasses2,
        name:'Makie Cateye Blue-Floral Glasses',
        price:'US $25.95',
    },
    {
        imgpath:glasses3,
        name:'Miguel Cateye Dark-Green Glasses',
        price:'US $15.00',
        fprice:'US $30.95'
    },
    {
        imgpath:glasses4,
        name:'Charlene Browline Red Glasses',
        price:'US $15.00',
        fprice:'US $28.95'
    },
    {
        imgpath:glasses1,
        name:'Eleanore Cat Eye Pink Glasses',
        price:'US $28.95',
    },
    {
        imgpath:glasses2,
        name:'Makie Cateye Blue-Floral Glasses',
        price:'US $25.95',
    },
    {
        imgpath:glasses3,
        name:'Miguel Cateye Dark-Green Glasses',
        price:'US $15.00',
        fprice:'US $30.95'
    },
    {
        imgpath:glasses4,
        name:'Charlene Browline Red Glasses',
        price:'US $15.00',
        fprice:'US $28.95'
    },
    {
        imgpath:glasses1,
        name:'Eleanore Cat Eye Pink Glasses',
        price:'US $28.95',
    },
    {
        imgpath:glasses2,
        name:'Makie Cateye Blue-Floral Glasses',
        price:'US $25.95',
    },
    {
        imgpath:glasses3,
        name:'Miguel Cateye Dark-Green Glasses',
        price:'US $15.00',
        fprice:'US $30.95'
    },
    {
        imgpath:glasses4,
        name:'Charlene Browline Red Glasses',
        price:'US $15.00',
        fprice:'US $28.95'
    }
]);
</script>
<style lang="scss" scoped>
.flashwrap{
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 0 auto 60px;
    .right-wrap{
        display: block;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        .title{
            color: #fff;
            font-family: ProximaNova-Bold;
            font-size: 42px;
            margin: 0 auto 0;
            display: block;
        }
        .five-list{
            display: flex;
            justify-content: space-between;
            .five-link{
                position: relative;
                width: 19%;
                .img{
                    width: 100%;
                    height: auto;
                }
                .icon{
                    width: 22%;
                    position: absolute;
                    left: 20px;
                    bottom: 62px;
                    height: auto;
                }
                .bottom-name{
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    padding: 0 20px;
                    .five-name{
                        font-size: 1.4vw;
                        font-family: Utopia Std;
                        font-weight: 400;
                        height: 40px;
                        line-height: 1.8;
                    }
                    .five-box{
                        text-align: right;
                        height: 48px;
                        line-height: 1.5;
                        .five-fprice{
                            font-size: 1vw;
                            font-family: Proxima Nova;
                            font-weight: 700;
                        }
                        .five-price{
                            font-size: .8vw;
                            font-family: Proxima Nova;
                        }
                    }
                }
            }
        }
        .swiper-box{
            padding: 0 80px;
            .swipe-item{
                a{
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    max-width: 316px;
                    box-sizing: border-box;
                    background: #fff;
                    img{
                        max-width: 350px;
                        width: 100%;
                    }
                    &>span:nth-child(2){
                        display: inline-block;
                        font-size: 14px;
                        font-family: Proxima Nova;
                        color: #333;
                        line-height: 20px;
                    }
                    &>p:nth-child(3){
                        margin-top: 20px;
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: row;
                        align-items: center;
                        font-size: 16px;
                        span{
                            color: #333;
                        }
                        span.on{
                            color: #fe5858;
                            font-family: ProximaNova-Bold;
                        }
                        del{
                            font-size: 14px;
                            margin-left: 10px;
                            color: #999;
                        }
                    }
                }
            }
            :deep(.swiper){
                
                position: inherit;
                .swiper-button-prev{
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-color: #fff;
                    cursor: pointer;
                    outline: none;
                    font-weight: 700;
                    left: 1vw;
                    top: 43vw;
                    width: 2.6vw;
                    height: 2.6vw;
                    border-radius: 1.3vw;
                    &::after{
                        font-size: 16px;
                        color: #333;
                    }
                }
                .swiper-button-next{
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-color: #fff;
                    cursor: pointer;
                    outline: none;
                    font-weight: 700;
                    right: 1vw;
                    top: 43vw;
                    width: 2.6vw;
                    height: 2.6vw;
                    border-radius: 1.3vw;
                    &::after{
                        font-size: 16px;
                        color: #333;
                    }
                }
                .swiper-button-disabled{
                    opacity: .5;
                    cursor: not-allowed;
                    pointer-events: auto;
                }
            }
            .more{
                margin-top: 50px;
                text-align: center;
                .more-btn{
                    width: 300px;
                    height: 50px;
                    background: #fff;
                    border: 2px solid rgba(0,0,0,.5);
                    font-size: 16px;
                    font-family: Proxima Nova;
                    font-weight: 700;
                    color: #333;
                }
            }
        }
    }
}
@media screen and (max-width: 1920px){
    .flashwrap{
        margin: 0 auto 3.177vw;
        .right-wrap{
            .title{
                width: 100%;
                height: 130px;
                text-align: center;
                line-height: 130px;
                margin-bottom: 40px;
            }
            .swiper-box{
                .swipe-item{
                    a{
                        max-width: 24vw;
                        &:nth-child(3){
                            margin-top: 12px;
                        }
                    }
                }
                :deep(.swiper){
                    margin-top: 4vw
                }
            }
        }
    }
}
</style>