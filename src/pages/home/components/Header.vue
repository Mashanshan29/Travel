<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/默认主题
    </div>
    <div class="header-right">
      <span class="iconfont arrow-icon">&#xe62d;</span>
      城市
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: space-between;
    line-height: 0.86rem;
    background: #00bcd4;
    height: 0.86rem;
    color: #fff;
    .header-left{
      width: .64rem;
    .back-icon{
      font-size: .4rem;
      text-align: center;
    }
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: 0.2rem;
    border-radius: .1rem;
    background: #fff;
    color: #ccc;
  }
  .header-right{
    width: 1.24rem;
    text-align: center;
    .arrow-icon{
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
