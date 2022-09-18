<template>
    <div class="home">
        <div class="banner">
            <p class="banner-left">
                <img :src="bannerLeft" width="1286" height="800"/>
            </p>
            <div class="banner-right">
                <p class="banner-top">
                    <img :src="bannerRight1" width="634"  height="400"/>
                </p>
                <p class="banner-bottom">
                    <img :src="bannerRight2" width="634"  height="400" />
                </p>
            </div>
        </div>
        <div class="content">
            <coupon></coupon>
            <flashwrap></flashwrap>
        </div>
    </div>
</template>
<script setup>
import bannerLeft from '@/assets/images/home-barner-left.jpg'
import bannerRight1 from '@/assets/images/home-barner-right1.png'
import bannerRight2 from '@/assets/images/home-barner-right2.png'
import coupon from '@/views/homePages/coupon.vue'
import flashwrap from '@/views/homePages/flashwrap.vue'
</script>
<style lang="scss" scoped>
.home {
    .banner {
        width: 100%;
        overflow: hidden;
        .banner-left {
            float: left;
            display: block;
            width: 67%;
            margin: 0;
            cursor: pointer;
            img{
                height: auto;
                display: block;
                margin: auto;
                max-width: 100%;
            }
        }
        .banner-right {
            float: left;
            display: flex;
            flex-direction: column;
            width: 33%;
            .banner-top,.banner-bottom{
                margin: 0;
                img{
                    height: auto;
                    display: block;
                    margin: auto;
                    max-width: 100%;
                }
            }
        }
    }
    @media screen and (max-width: 1920px){
        .content {
            padding: 0 2.604vw;
        }
    }
}
</style>