<template>
    <div class="coupon-wrap">
        <img :src="coupon" width="1820" height="148" alt="Discount Glasses" />
    </div>
    <div class="nav-wrap">
        <h2>Buy glasses at ZEELOOL</h2>
        <p>Rich in style and well-crafted, zeelool optical has helped 1,000,000 families to see clearly,
            <br />and claim their fashion statement at the same time.</p>
        <div class="nav">
            <div class="nav-item" v-for="item in naveType">
                <el-avatar :size="192" shape="square" :src="item.imgpath" />
                <span>{{item.title}}</span>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import coupon from '@/assets/images/pc_coupons.jpg'
import woman from '@/assets/images/HomePages/women_nav.jpg'
import man from '@/assets/images/HomePages/pc_men_nav.png'
import reading from '@/assets/images/HomePages/pc_reading.png'
import kids from '@/assets/images/HomePages/pc_kids.png'
import sunglasses from '@/assets/images/HomePages/pc_sunglasses.png'
import bluetoothsg from '@/assets/images/HomePages/anti-blue-ray_pc.gif'
import { ref } from 'vue';

const naveType=ref([
    {
        title:'Women',
        imgpath:woman
    },
    {
        title:'Men',
        imgpath:man
    },
    {
        title:'Reading',
        imgpath:reading
    },
    {
        title:'Kids',
        imgpath:kids
    },
    {
        title:'Sunglasses',
        imgpath:sunglasses
    },
    {
        title:'Bluetooth Sunglasses',
        imgpath:bluetoothsg
    },
])
</script>
<style lang="scss" scoped>
.coupon-wrap{
    cursor: pointer;
    margin: 50px auto 100px;
    img{
        width: 100%;
        height: auto;
    }
}
.nav-wrap{
        .nav{
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            width: 100%;
            .nav-item{
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                :deep(.el-avatar--square){
                    background-color: #fff;
                }
                span{
                    margin-top: 34px;
                    font-size: 24px;
                    font-family: ProximaNova-Regular;
                    font-weight: 400;
                    color: #333;
                    white-space: nowrap;
                }
            }
        }
    }
@media screen and (max-width: 1920px){
    .coupon-wrap{
        margin: 2.6vw auto 5.21vw;
    }
    .nav-wrap{
        margin: 0 auto 5vw;
        .nav{
            margin-top: 3vw;
            .nav-item{
                width: 12.5vw;
                span{
                    margin-top: 1.77vw;
                    font-size: max(1.25vw,16px);
                }
            }
        }
    }
}
</style>