<template>
    <div class="box-out">
        <div class="examine">
            <div class="examine-content">
                <p class="pro-sm-title">单据审核列表</p>
                <el-form :inline="true" :model="examineData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="订单号">
                        <el-input v-model="examineData.orderNum" placeholder="输入订单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="原始单号">
                        <el-input v-model="examineData.originalOrder" placeholder="原始单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="拆单日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="examineData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="examineData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="收货人">
                        <el-input v-model="examineData.consignee" placeholder="收货人" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="examineData.telephone" placeholder="联系电话" style="width:200px;"></el-input>
                    </el-form-item>
                   <el-form-item label="审核状态">
                        <el-select v-model="examineData.states" placeholder="全部" style="width:200px;">
                            <el-option label="全部" value="allstate"></el-option>
                            <el-option label="待安排发货" value="dapfh"></el-option>
                            <el-option label="已审核" value="ysh"></el-option>
                            <el-option label="已拆单" value="ycd"></el-option>
                            <el-option label="已发货" value="yfh"></el-option>
                            <el-option label="已作废" value="yzf"></el-option>
                        </el-select>
                    </el-form-item>
 
                    <el-form-item label="仓库">
                        <el-select v-model="examineData.stock" placeholder="全部" style="width:200px;">
                            <el-option label="深圳总仓" value="szzc"></el-option>
                            <el-option label="电子商务仓" value="dzswc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="examineTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="订单号" prop="orderNum" align="center" width="120"></el-table-column>
                    <el-table-column label="产品编码" prop="proid" align="center" width="100"></el-table-column>
                    <el-table-column label="产品名称" prop="proName"  align="center"></el-table-column>
                    <el-table-column label="发货仓库" prop="deliverStock"  align="center" width="140"></el-table-column>
                    <el-table-column label="发货数量" prop="deliverNum" align="center" width="100"></el-table-column>
                    <el-table-column label="供货价" prop="supplyPrice" align="center" width="100"></el-table-column>
                    <el-table-column label="收货人" prop="consignee" align="center" width="100"></el-table-column>
                    <el-table-column label="状态" prop="states" align="center" width="110"></el-table-column>
                    <el-table-column label="拆单时间" prop="splitTime" align="center" width="160"></el-table-column>
                    <el-table-column label="拆单人" prop="splitPerson" align="center" width="80"></el-table-column>
                    <el-table-column label="原始单据" prop="OriginalBill" align="center" width="120"></el-table-column>
                    <el-table-column label="操作" align="center" width="120">
                        <template scope="scope">
                            <el-button type="text">详情</el-button>
                            <el-button type="text">作废</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block"> 
                    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
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
                examineData:{
                    orderNum:"",
                    originalOrder:"",
                    startDate:"",
                    endDate:"",
                    consignee:"",
                    telephone:"",
                    states:"",
                    stock:"",
                },
                selltotal:"20031451",
                sellnow:"456789",
                examineTable:[
                    {
                        orderNum:"cd10003814",
                        proid:"200166",
                        proName:"荷兰 牛栏 Nutrilon 婴儿奶粉 2段 850g",
                        deliverStock:"深圳总仓",
                        deliverNum:"855",
                        supplyPrice:"169.00",
                        consignee:"张义文",
                        orderCash:"12356",
                        states:"待安排发货",
                        splitTime:"2017-2-4",
                        splitPerson:"杜文娟",
                        OriginalBill:"v100008654",
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