<template>
    <div id="common">
        <div class="f1">
            <div class="common-logo">
                <img src="../../assets/logo.png">
            </div>  
            <el-dropdown class="username" trigger="click" hide-on-click="true" menu-align="start" @command="quit">
                <span class="el-dropdown-link">
                    <img src="../../assets/pic11.png">
                    {{username}}    
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="tc">退出</el-dropdown-item>
                    <el-dropdown-item command="qh">切换账户</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>            
        </div>

        <div class="f2">
            <div class="stageName">
                vvo后台管理系统
            </div>
            <el-menu mode="horizontal" theme="dark" :default-active="2" router=true class="nav">
                <el-menu-item index="1">后台管理</el-menu-item>
                <el-menu-item index="2">销售管理</el-menu-item>
                <el-menu-item index="3">微信管理</el-menu-item>
                <el-menu-item index="4">会员管理</el-menu-item>
                <el-menu-item index="5">网站设置</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default{
        name:'vvo-header',
        data(){
            return{
                username:"limengjie"
            }
        },
        methods:{
            quit(command){
                if(command == "tc"){
                    this.$router.push('/login')
                }
            }
        }
    }
</script>
<style scoped>
#common{
    width: 100%;
    height: 60px;
    background-color: #fff;
    font-family: "Microsoft YaHei";
    z-index: 30;

    position: fixed;
    top: 0;
    left: 0;
}
.f1{
    overflow: hidden;
}
.common-logo{
    width: 250px;
    height: 60px;
    text-align: center;
    float: left;
    vertical-align: middle;
    background-color: #324157;
    justify-content: center; /*子元素水平居中*/
    align-items: center; /*子元素垂直居中*/
    display: -webkit-flex;

}
.common-logo img{
    vertical-align: middle;   
}
.username{
    padding-right: 30px;
    float: right;
    line-height: 60px;
    cursor:pointer;
}
.username img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
    border-radius: 100%;
}
.f2{
    position: relative;
}
.stageName{
    width: 250px;
    height: 60px;
    background-color: #324157;
    text-align:center;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    z-index: 2;

    position: absolute;
    left:0;
    top: 0;
}
.nav{
    padding-left:270px;
}
</style>