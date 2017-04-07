<template>
    <div class="box-out">
        <div class="stockcheck">
            <div class="stockcheck-content">
                <p class="pro-sm-title">仓库列表</p>
                <el-form :inline="true" :model="stockcheckData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="产品编号">
                        <el-input v-model="stockcheckData.proNumber" placeholder="产品名称" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="仓库">
                        <el-select v-model="stockcheckData.stock" placeholder="全部">
                            <el-option label="全部" value="allStock"></el-option>
                            <el-option label="深圳总仓" value="szzc"></el-option>
                            <el-option label="电子商务部" value="dzswb"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="stockcheckData.state" placreholder="全部">
                            <el-option label="全部" value="allStates"></el-option>
                            <el-option label="正常" value="normal"></el-option>
                            <el-option label="锁定" value="locked"></el-option>
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
                        <el-dropdown-item command="b">输出为Excel</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-table :data="stockcheckTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="编号" prop="stockNumber" align="center" width="120"></el-table-column>
                    <el-table-column label="产品名称" prop="proName" align="center"></el-table-column>
                    <el-table-column label="仓库名称" prop="stockName"  align="center" width="180" ></el-table-column>
                    <el-table-column label="可供数" prop="supplyNum" align="center" width="80"></el-table-column>
                    <el-table-column label="库存" prop="stoNum" align="center" width="160"></el-table-column>
                    <el-table-column label="操作" align="center" width="100">
                        <template scope="scope">
                            <el-button type="text">调拨</el-button>
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
                stockcheckData:{
                    proNumber:"",
                    stock:"",
                    state:"",
                },
                stockcheckTable:[
                    {
                        stockNumber:"200144",
                        proName:"荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)【2罐装】",
                        stockName:"麦乐购代发仓",
                        addTime:"2017-2-4",
                        supplyNum:"5222",
                        stoNum:"222",

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