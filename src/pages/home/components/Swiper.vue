<template>
  <div class="wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="s-slide" v-for='item of swiperList' :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/qs/1804/98/9f0b9ecfeea3cd02.jpg'
      },
      {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/a9/f01d076cea2ee902.jpg'
      },
      {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg'
      },
      {
        id: '004',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/be/606d2fbeec822602.jpg'
      },
      {
        id: '005',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/19/bae7866c1a070002.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26%;
    .swiper-img{
      width:100%;
    }
  }
</style>
