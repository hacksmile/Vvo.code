<template>
    <div id="slider">
        <div class="out-box">
            <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" unique-opened="true" router>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>拆单列表</template>
                    <el-menu-item index="storeorder">商城订单</el-menu-item>
                    <el-menu-item index="singleList">拆单列表</el-menu-item>
                    <el-menu-item index="examine">单据审核</el-menu-item>
                </el-submenu>          
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default{
        name:'vvo-slider4'
    }
</script>
<style scoped>
    #slider{
        width: 250px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #324157;
        z-index: 20;
    }
    .out-box{
        width: 100%;       
        position: absolute;
        left: 0;
        top: 120px;
    }
</style>