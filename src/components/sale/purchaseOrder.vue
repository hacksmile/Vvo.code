<template>
    <div class="box-out">
        <div class="purchaseOrder">
            <div class="purchaseOrder-content">
                <p class="pro-sm-title">采购订单列表</p>
                <el-form :inline="true" :model="purchaseOrderData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="采购批次">
                        <el-input v-model="purchaseOrderData.batch" placeholder="采购批次" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="采购日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="purchaseOrderData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="purchaseOrderData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="审核状态">
                        <el-select v-model="purchaseOrderData.auditStatus" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="allexamine"></el-option>
                            <el-option label="待审核" value="waitexamine"></el-option>
                            <el-option label="审核通过" value="examined"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="供应商">
                        <el-select v-model="purchaseOrderData.supplier" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="all"></el-option>
                            <el-option label="啪啪购" value="papagou"></el-option>
                            <el-option label="海豚" value="haitun"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-dropdown menu-align="start" trigger="click">
                    <el-button type="primary">
                        操作<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">导出采购单</el-dropdown-item>
                        <el-dropdown-item command="b">导入采购单</el-dropdown-item>
                        <el-dropdown-item command="c">导出供货商往来</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-table :data="purchaseOrderTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="批次编号" prop="batchNum" align="center"></el-table-column>
                    <el-table-column label="已付总额" prop="paidtotal" align="center"></el-table-column>
                    <el-table-column label="未付总额" prop="unpaidtotal"  align="center"></el-table-column>
                    <el-table-column label="采购总额" prop="purchaseTotal" align="center"></el-table-column>
                    <el-table-column label="采购员" prop="purchaser" align="center"></el-table-column>
                    <el-table-column label="采购时间" prop="purchaseTime" align="center"></el-table-column>
                    <el-table-column label="审核状态" prop="auditStatus" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="scope">
                            <el-button type="text">编辑</el-button>
                            <el-button type="text">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                labelposition:"right",
                purchaseOrderData:{
                    batch:"",
                    startDate:"",
                    endDate:"",
                    auditStatus:"",
                    supplier:"",
                },
                purchaseOrderTable:[
                    {
                        batchNum:"123456",
                        paidtotal:"253336",
                        unpaidtotal:"13465896589",
                        purchaseTotal:"13665896589",
                        purchaser:"螺丝扣",
                        purchaseTime:"2017-2-4",
                        auditStatus:"等待审核",
                    }
                ]
            }
        }
    }
</script>
<style lang="">
    .table-top{
        height: 40px;
        line-height: 40px;
        margin-bottom:10px;
    }
</style>