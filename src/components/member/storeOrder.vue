<template>
    <div class="box-out">
        <div class="orderList">
            <div class="orderList-content">
                <p class="pro-sm-title">订单列表</p>
                <el-form :inline="true" :model="storeOrderData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="订单号">
                        <el-input v-model="storeOrderData.orderNum" placeholder="输入订单号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="会员号">
                        <el-input v-model="storeOrderData.memberNum" placeholder="输入会员号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="订单日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入开始时间" v-model="storeOrderData.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="输入结束时间" v-model="storeOrderData.endDate" style="width: 200px;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="订单状态">
                        <el-select v-model="storeOrderData.orderState" placeholder="全部" style="width:200px;">
                            <el-option label="报废单" value="bfd"></el-option>
                            <el-option label="准备报废的单" value="zbbf"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="收货人">
                        <el-input v-model="storeOrderData.consignee" placeholder="收货人" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="storeOrderData.telephone" placeholder="联系电话" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="门店业绩">
                        <el-select v-model="storeOrderData.achievement" placeholder="全部" style="width:200px;">
                            <el-option label="梅林店" value="ml"></el-option>
                            <el-option label="前海店" value="qhd"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100px;">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-row :gutter="20" class="table-top">
                    <el-col :span="4"><div class="">销售总额：<span style="color:red;">{{selltotal}}</span></div></el-col>
                    <el-col :span="4"><div class="">当前销售额：<span style="color:red;">{{sellnow}}</span></div></el-col>
                    <el-col :span="16" style="text-align:right;">
                        <el-dropdown menu-align="start" trigger="click">
                            <el-button type="primary">
                                操作<i class="el-icon-caret-bottom el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">输出为Excel</el-dropdown-item>
                                <el-dropdown-item command="b">退单录入</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                <el-table :data="storeorderTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="订单号" prop="orderNum" align="center"></el-table-column>
                    <el-table-column label="运单号" prop="waybillNum" align="center"></el-table-column>
                    <el-table-column label="会员名称" prop="memberName"  align="center"></el-table-column>
                    <el-table-column label="联系电话" prop="telephone" align="center"></el-table-column>
                    <el-table-column label="收货人" prop="consignee" align="center"></el-table-column>
                    <el-table-column label="支付金额" prop="payment" align="center"></el-table-column>
                    <el-table-column label="订单金额" prop="orderCash" align="center"></el-table-column>
                    <el-table-column label="状态" prop="states" align="center"></el-table-column>
                    <el-table-column label="下单时间" prop="ordertime" align="center"></el-table-column>
                    <el-table-column label="支付时间" prop="paytime" align="center"></el-table-column>
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
                storeOrderData:{
                    orderNum:"",
                    memberNum:"",
                    startDate:"",
                    endDate:"",
                    orderState:"",
                    consignee:"",
                    telephone:"",
                    achievement:"",
                },
                selltotal:"20031451",
                sellnow:"456789",
                storeorderTable:[
                    {
                        orderNum:"123456",
                        waybillNum:"253336",
                        memberName:"13465896589",
                        telephone:"13665896589",
                        consignee:"螺丝扣",
                        payment:"23.36",
                        orderCash:"12356",
                        states:"等待审核",
                        ordertime:"2017-2-4",
                        paytime:"2017-12-1"


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