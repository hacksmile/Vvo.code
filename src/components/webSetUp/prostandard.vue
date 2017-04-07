<template>
    <div class="box-out">
        <div class="prostandard">
            <!--面包屑-->
            <!--<div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{path:'/base'}"><i class="el-icon-menu" style="marginRight:5px;"></i>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>产品规格</el-breadcrumb-item>
                </el-breadcrumb>
            </div>-->
            <!--主要内容-->
            <div class="standard-content">
                <p class="pro-sm-title">产品规格列表</p>
                <el-form :inline="true" :model="standardFormData"> 
                    <el-form-item label="产品名称">
                        <el-input v-model="standardFormData.proName" placeholder="产品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="产品编码">
                        <el-input v-model="standardFormData.proId" placeholder="产品编码"></el-input>
                    </el-form-item>
                    <el-form-item label="规格名称">
                        <el-input v-model="standardFormData.starName" placeholder="规格名称"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="standardFormData.region" placeholder="全部">
                            <el-option label="Normal" value="正常"></el-option>
                            <el-option label="locked" value="锁定"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="standardData" border style="width:100%;" >
                    <el-table-column type="selection" width="50"></el-table-column>
                    <el-table-column label="序号" width="80" prop="serialnum" align="center"></el-table-column>
                    <el-table-column label="产品编码" width="100" prop="proId" align="center"></el-table-column>
                    <el-table-column label="产品名称" prop="proName" align="center" show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="产品规格" width="100" prop="prostandard" align="center"></el-table-column>
                    <el-table-column label="产品售价" width="100" prop="proprice" align="center"></el-table-column>
                    <el-table-column label="发货数量" width="100" prop="pronum" align="center"></el-table-column>
                    <el-table-column label="返现比率" width="100" prop="returnratio" align="center"></el-table-column>
                    <el-table-column label="添加时间" width="120" prop="addTime" align="center"></el-table-column>
                    <el-table-column label="状态" width="80" prop="state" align="center">
                        <template scope="scope">
                            <el-button type="text" icon="check"></el-button>
                        </template>                       
                    </el-table-column>
                    <el-table-column label="操作" width="80" prop="oprate" align="center">
                        <template scope="scope">
                            <el-button type="text" icon="edit">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="block">
            <el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="1000">
            </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            standardFormData:{
                proName:"",
                proId:"",
                starName:"",
                region:''
            },
            standardData:[
                {
                    serialnum:'4727',
                    proId:'201169',
                    proName:'荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)',
                    prostandard:'2罐装',
                    proprice:'490.00',
                    pronum:'10',
                    returnratio:"10",
                    addTime:'2017-3-22',
                    
                },{
                    serialnum:'4727',
                    proId:'201169',
                    proName:'荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)',
                    prostandard:'2罐装',
                    proprice:'490.00',
                    pronum:'10',
                    returnratio:"10",
                    addTime:'2017-3-22',
                    
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>