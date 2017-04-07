<template>
    <div id="slider">
        <div class="out-box">
            <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" unique-opened="true" router>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>采购管理</template>
                    <el-menu-item index="purchaseorder">采购订单</el-menu-item>
                    <el-menu-item index="suppliercontact">供应商往来明细</el-menu-item>
                    <el-menu-item index="procurement">采购入库</el-menu-item>
                </el-submenu>          
               <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>销售订单</template>
                    <el-menu-item index="returnoOrder">退货订单</el-menu-item>
                    <el-menu-item index="customerorder">客户订单</el-menu-item>
                    <el-menu-item index="customercontact">客户商往来</el-menu-item>
                </el-submenu>          
               <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>库存管理</template>
                    <el-menu-item index="stockcheck">库存查询</el-menu-item>
                    <el-menu-item index="supplierproduct">供应商产品</el-menu-item>
                    <el-menu-item index="transferorder">调拨单</el-menu-item>
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