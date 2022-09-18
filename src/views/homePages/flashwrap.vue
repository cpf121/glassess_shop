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
        }
    }
}
</style>