<template>
    <div class="box-out">
        <div class="customercontact">
            <div class="customercontact-content">
                <p class="pro-sm-title">客户商往来明细</p>
                <el-form :inline="true" :model="customercontactData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="时间段">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="customercontactData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="customercontactData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="供应商">
                        <el-select v-model="customercontactData.customer" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="allSupplier"></el-option>
                            <el-option label="啪啪购" value="papagou"></el-option>
                            <el-option label="海豚" value="haitun"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="customercontactTable" style="width:100%;" border >
                    <el-table-column label="单位名称" prop="supplierName" align="center"></el-table-column>
                    <el-table-column label="单位编号" prop="supplierNum" align="center" width="100"></el-table-column>
                    <el-table-column label="产品编码" prop="productNum"  align="center" width="100"></el-table-column>
                    <el-table-column label="产品名称" prop="productName" align="center" show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="上期" align="center">
                        <el-table-column label="销售数量" width="120" prop="upPurchaseNum" align="center"></el-table-column>
                        <el-table-column label="平均单价" width="120" prop="upAverage" align="center"></el-table-column>
                        <el-table-column label="销售总额" width="120" prop="upSellingtotal" align="center"></el-table-column>
                    </el-table-column>
                    <el-table-column label="本期" align="center">
                        <el-table-column label="销售数量" width="120" prop="downPurchaseNum" align="center"></el-table-column>
                        <el-table-column label="平均单价" width="120" prop="downAverage" align="center"></el-table-column>
                        <el-table-column label="销售总额" width="120" prop="downSellingtotal" align="center"></el-table-column>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination layout="prev, pager, next" :total="120">
                    </el-pagination>
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
                customercontactData:{
                    startDate:"",
                    endDate:"",
                    customer:"",
                },
                customercontactTable:[
                    {
                        supplierName:"鸿逸市场推广公司",
                        supplierNum:"40001",
                        productNum:"200210",
                        productName:"澳洲 Swisse 保健品 50岁以上女士复合维生素植物精华 60粒",
                        upPurchaseNum:"2",
                        upAverage:"35.873",
                        upSellingtotal:"8322.640",
                        downPurchaseNum:"0",
                        downAverage:"0",
                        downSellingtotal:"0",
                        
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