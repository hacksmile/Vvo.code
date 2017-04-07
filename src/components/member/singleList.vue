<template>
    <div class="box-out">
        <div class="singleList">
            <div class="singleList-content">
                <p class="pro-sm-title">拆单列表</p>
                <el-form :inline="true" :model="singleListData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="订单号">
                        <el-input v-model="singleListData.orderNum" placeholder="输入订单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="原始单号">
                        <el-input v-model="singleListData.originalOrder" placeholder="原始单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="拆单日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="singleListData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="singleListData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="收货人">
                        <el-input v-model="singleListData.consignee" placeholder="收货人" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="singleListData.telephone" placeholder="联系电话" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="仓库">
                        <el-select v-model="singleListData.stock" placeholder="全部" style="width:200px;">
                            <el-option label="深圳总仓" value="szzc"></el-option>
                            <el-option label="电子商务仓" value="dzswc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="singleListTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="订单号" prop="orderNum" align="center" width="120"></el-table-column>
                    <el-table-column label="产品编码" prop="proid" align="center" width="100"></el-table-column>
                    <el-table-column label="产品名称" prop="proName"  align="center"></el-table-column>
                    <el-table-column label="发货数量" prop="deliverNum" align="center" width="100"></el-table-column>
                    <el-table-column label="总额" prop="totalMoney" align="center" width="100"></el-table-column>
                    <el-table-column label="收货人" prop="consignee" align="center" width="100"></el-table-column>
                    <el-table-column label="状态" prop="states" align="center" width="110"></el-table-column>
                    <el-table-column label="拆单时间" prop="splitTime" align="center" width="160"></el-table-column>
                    <el-table-column label="拆单人" prop="splitPerson" align="center" width="80"></el-table-column>
                    <el-table-column label="原始单据" prop="OriginalBill" align="center" width="120"></el-table-column>
                    <el-table-column label="操作" align="center" width="80">
                        <template scope="scope">
                            <el-button type="text">拆单</el-button>
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
                singleListData:{
                    orderNum:"",
                    originalOrder:"",
                    startDate:"",
                    endDate:"",
                    consignee:"",
                    telephone:"",
                    stock:"",
                },
                selltotal:"20031451",
                sellnow:"456789",
                singleListTable:[
                    {
                        orderNum:"cd10003814",
                        proid:"200166",
                        proName:"荷兰 牛栏 Nutrilon 婴儿奶粉 2段 850g",
                        deliverNum:"8",
                        totalMoney:"169.00",
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