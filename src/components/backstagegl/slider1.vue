<template>
    <div id="slider">
        <div class="out-box">
            <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" unique-opened="true" router>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>基本信息</template>
                    <el-menu-item index="managelist">管理员列表</el-menu-item>
                </el-submenu>          
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>单位管理</template>
                    <el-menu-item index="supplier">供货商</el-menu-item>
                    <el-menu-item index="warehouse">仓库管理</el-menu-item>
                    <el-menu-item index="logistics">物流公司</el-menu-item>
                    <el-menu-item index="client">客户商</el-menu-item>
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