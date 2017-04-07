<template>
    <div class="box-out">
        <div class="supplierproduct">
            <div class="supplierproduct-content">
                <p class="pro-sm-title">供应商产品列表</p>
                <el-form :inline="true" :model="supplierproductData" label-width="80px" :label-position="labelposition">
                    <el-form-item label="产品编号">
                        <el-input v-model="supplierproductData.proNumber" placeholder="产品编号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="产品名称">
                        <el-input v-model="supplierproductData.proName" placeholder="产品名称" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商">
                        <el-select v-model="supplierproductData.supplier" placeholder="全部">
                            <el-option label="全部" value="allSupplier"></el-option>
                            <el-option label="澳洲直邮" value="azzy"></el-option>
                            <el-option label="深圳前海丰德" value="szqhfd"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="supplierproductData.state" placreholder="全部">
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
                    </el-dropdown-menu>
                </el-dropdown>
                <el-table :data="supplierproductTable" style="width:100%;" border >
                    <el-table-column type="selection"align="center"></el-table-column>
                    <el-table-column label="序号" prop="serialNum" align="center" width="90"></el-table-column>
                    <el-table-column label="供应商" prop="supplier" align="center" width="250"></el-table-column>
                    <el-table-column label="产品编号" prop="proNum"  align="center" width="100" ></el-table-column>
                    <el-table-column label="产品名称" prop="proName" align="center" show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="供应价" prop="supplyPrice" align="center" width="100"></el-table-column>
                    <el-table-column label="添加时间" prop="addTime" align="center" width="100"></el-table-column>
                    <el-table-column label="状态" width="70" align="center">
                        <template scope="scope">
                            <el-button type="text" icon="check"></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="80">
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
                supplierproductData:{
                    proNumber:"",
                    stock:"",
                    state:"",
                },
                supplierproductTable:[
                    {
                        serialNum:"200144",
                        supplier:"荷兰直邮-荷易母婴供应链(朱晓聪)",
                        proNum:"200746",
                        proName:"荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)【2罐装】",
                        supplyPrice:"8.88",
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