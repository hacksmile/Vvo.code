<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body{width: 100%;height:100%;}
  #app{width: 100%;height: 100%;}
  *{margin: 0;padding: 0;list-style: none;text-decoration: none;box-sizing: border-box;}
  /*面包屑*/
  .crumbs{
      margin-bottom: 20px;
  } 
  /*内容盒子*/
  .box-out{
      padding:140px 20px 0 270px;
  }
  .pro-sm-title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #324157;
      padding-left:15px; 
      color: #fff;
      border-radius:5px;
      margin-bottom: 20px;
  }
  .block{
      margin: 20px 0;
      float: right;
  }
  /*具体操作页面的小标题*/
  .small-title{
    margin: 10px 0 20px;
    display: inline-block;
    border-bottom: 5px solid #324157;
  }
  .form-tab-label{
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      margin-bottom:20px;
  }
  .form-tab-label:before{
      content:"";
      width: 5px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 5px;
      background-color: #324157;
  }
  .subBtn{
    width: 100%;
    height: 60px;
    text-align: right;
    background-color: #fff;
    line-height: 60px;
    padding-right: 20px;
    border-top:1px solid #e1e1e1;


    position: fixed;
    bottom:0;
    left: 0;
  }
</style>
