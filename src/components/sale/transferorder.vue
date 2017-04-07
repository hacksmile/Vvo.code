<template>
    <div class="box-out">
        <div class="transferorder">
            <div class="transferorder-content">
                <p class="pro-sm-title">调拨单列表</p>
                <el-form :inline="true" :model="transferorderData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="调拨批次">
                        <el-input v-model="transferorderData.batch" placeholder="调拨批次" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="调拨日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="transferorderData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="transferorderData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="调入仓库">
                        <el-select v-model="transferorderData.Transferred" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="allexamine"></el-option>
                            <el-option label="广州南沙仓" value="gznsc"></el-option>
                            <el-option label="电子商务仓" value="dzswc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="调出仓库">
                        <el-select v-model="transferorderData.callOut" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="all"></el-option>
                            <el-option label="广州南沙仓" value="gznsc"></el-option>
                            <el-option label="电子商务仓" value="dzswc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="transferorderTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="批次" prop="batch" align="center"></el-table-column>
                    <el-table-column label="调入金额" prop="transferAmount" align="center"></el-table-column>
                    <el-table-column label="调出仓库" prop="transferd" align="center"></el-table-column>
                    <el-table-column label="调入仓库" prop="callOut"  align="center"></el-table-column>
                    <el-table-column label="调拨时间" prop="transferTime" align="center"></el-table-column>
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
                transferorderData:{
                    batch:"",
                    startDate:"",
                    endDate:"",
                    Transferred:"",
                    callOut:"",
                },
                transferorderTable:[
                    {
                        batch:"db10000017",
                        transferAmount:"0",
                        transferd:"保税样品仓",
                        callOut:"万科第五园店",
                        transferTime:"2017-3-29",
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