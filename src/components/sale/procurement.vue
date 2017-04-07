<template>
    <div class="box-out">
        <div class="procurement">
            <div class="procurement-content">
                <p class="pro-sm-title">采购订单列表</p>
                <el-form :inline="true" :model="procurementData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="产品名称">
                        <el-input v-model="procurementData.proname" placeholder="产品名称" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="产品编码">
                        <el-input v-model="procurementData.Id" placeholder="产品编码" style="width:200px;"></el-input>
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
                        <el-dropdown-item command="a">保存到PDF</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-table :data="procurementTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="序号" prop="serialNumber" align="center" width="120"></el-table-column>
                    <el-table-column label="产品编号" prop="proNumber" align="center" width="120"></el-table-column>
                    <el-table-column label="产品名称" prop="proName"  align="center"></el-table-column>
                    <el-table-column label="条码" prop="barCode" align="center" width="160"></el-table-column>
                    <el-table-column label="添加时间" prop="addTime" align="center" width="100"></el-table-column>
                    <el-table-column label="操作" align="center" width="100">
                        <template scope="scope">
                            <el-button type="text" icon="edit">制单</el-button>
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
                procurementData:{
                    proname:"",
                    Id:"",
                },
                procurementTable:[
                    {
                        serialNumber:"2000",
                        proNumber:"201169",
                        proName:"荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)【2罐装】",
                        barCode:"8712400109703",
                        addTime:"2017-2-4",
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