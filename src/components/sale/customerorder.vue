<template>
    <div class="box-out">
        <div class="customerorder">
            <div class="customerorder-content">
                <p class="pro-sm-title">销售订单列表</p>
                <el-form :inline="true" :model="customerorderData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="销售批次">
                        <el-input v-model="customerorderData.batch" placeholder="销售批次" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商城单号">
                        <el-input v-model="customerorderData.orderNumber" placeholder="商城单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="订单日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="customerorderData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="customerorderData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="审核状态">
                        <el-select v-model="customerorderData.auditStatus" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="allexamine"></el-option>
                            <el-option label="待审核" value="waitexamine"></el-option>
                            <el-option label="审核通过" value="examined"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="客户商">
                        <el-select v-model="customerorderData.client" placeholder="全部" style="width:200px;">
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
                        <el-dropdown-item command="a">添加</el-dropdown-item>
                        <el-dropdown-item command="b">导入销售单</el-dropdown-item>
                        <el-dropdown-item command="c">导出销售单</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-table :data="customerorderTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="批次编号" prop="batchNum" align="center"></el-table-column>
                    <el-table-column label="客户商" prop="client" align="center"></el-table-column>
                    <el-table-column label="已收总额" prop="totalreceived" align="center"></el-table-column>
                    <el-table-column label="未收总额" prop="totaloutstanding"  align="center"></el-table-column>
                    <el-table-column label="应收总额" prop="totalreceivables" align="center"></el-table-column>
                    <el-table-column label="采购批次" prop="purchasebatch" align="center"></el-table-column>
                    <el-table-column label="业务员" prop="Salesman" align="center"></el-table-column>
                    <el-table-column label="下单时间" prop="ordertime" align="center"></el-table-column>
                    <el-table-column label="销售时间" prop="sellingtime" align="center"></el-table-column>
                    <el-table-column label="审核状态" prop="auditStatus" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="scope">
                            <el-button type="text">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                labelposition:"right",
                customerorderData:{
                    batch:"",
                    orderNumber:"",
                    startDate:"",
                    endDate:"",
                    auditStatus:"",
                    client:"",
                },
                customerorderTable:[
                    {
                        batchNum:"x10000000",
                        client:"微商城",
                        totalreceived:"1904.15",
                        totaloutstanding:"1236.15",
                        totalreceivables:"555555",
                        purchasebatch:"v100001693",
                        Salesman:"韦婕",
                        ordertime:"2017-2-4",
                        sellingtime:"2017-2-4",
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