<template>
  <div class="icons">
    <ul class="tab-icons">
      <li class="icon">
        <i class="sub-img"></i>
        <p class="sub-title">签证·WIFI</p>
      </li>
      <li class="icon">
        <i class="sub-img abroad"></i>
        <p class="sub-title">出境游</p>
      </li>
      <li class="icon">
        <i class="sub-img oneday"></i>
        <p class="sub-title">一日游</p>
      </li>
      <li class="icon">
        <i class="sub-img msl"></i>
        <p class="sub-title">美食林</p>
      </li>
    </ul>
    <ul class="tab-icons">
      <li class="icon">
        <i class="sub-img car"></i>
        <p class="sub-title">汽车游</p>
      </li>
      <li class="icon">
        <i class="sub-img internal"></i>
        <p class="sub-title">国内游</p>
      </li>
      <li class="icon">
        <i class="sub-img superbus"></i>
        <p class="sub-title">超级巴士</p>
      </li>
      <li class="icon">
        <i class="sub-img strategy"></i>
        <p class="sub-title">攻略</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.icons{
  overflow: hidden;
  height: 3rem;
  background: #fff;
  padding-top: 0.1rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  .tab-icons{
    display: flex;
    padding-left: .4rem;
    padding-right: .4rem;
    height: 1.4rem;
    .icon{
      height: 0;
      flex: 1;
      height: 1.4rem;
      padding: .2rem 0 0;
      box-sizing: border-box;
      .sub-img{
        width: .7rem;
        height: .6rem;
        margin: 0 auto;
        display: block;
        background-image: url(http://s.qunarzz.com/touch_home/images/entrances.png);
        background-size: 7rem 3rem;
        background-position: -0.7rem -0.45rem;
        background-repeat: no-repeat;
        &.abroad{
          background-position: -2.3rem -0.45rem;
        }
        &.oneday{
          background-position: -3.9rem -0.45rem;
        }
        &.msl{
          background-position: -5.6rem -2rem;
        }
        &.car{
          background-position: -0.7rem -2rem;
        }
        &.internal{
          background-position: -2.3rem -2rem;
        }
        &.superbus{
          background-position: -3.9rem -2rem;
        }
        &.strategy{
          background-position: -5.6rem -0.45rem;
        }
      }
      .sub-title{
        line-height: .6rem;
        text-align: center;
      }
    }
  }
}
</style>
