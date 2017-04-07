<template>
    <div id="slider">
        <div class="out-box">
            <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" unique-opened="true" router>
                <el-submenu>
                    <template slot="title"><i class="el-icon-document"></i>产品管理</template>
                    <el-menu-item index="cplist">产品列表</el-menu-item>
                    <el-menu-item index="cpstandard">产品规格</el-menu-item>
                    <el-menu-item index="cpbrand">产品品牌</el-menu-item>
                    <el-menu-item index="cptype">产品分类</el-menu-item>
                </el-submenu>         
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default{
        name:'vvo-slider5'
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