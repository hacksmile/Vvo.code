<template>
    <div class="box-out">
        <div id="protype">
            <!--<div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{path:'/base'}"><i class="el-icon-menu" style="marginRight:5px;"></i>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>产品分类</el-breadcrumb-item>
                </el-breadcrumb>
            </div> -->
            <div class="probrand">
                <p class="pro-sm-title">产品分类列表</p>
                <el-form :inline="true" :model="typeFormData">
                    <el-form-item label="类型名称">
                        <el-input v-model="typeFormData.formType" placeholder="类型名称"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="typeFormData.state" placeholder="全部">
                            <el-option label="正常" value="normal"></el-option>
                            <el-option label="锁定" value="locked"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <template scope="scope">
                            <el-button type="primary">搜索</el-button>
                        </template>
                    </el-form-item>
                </el-form>
                <el-table :data="brandData" border style="width:100%;">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="序号" prop="serialnum" align="center"></el-table-column>
                    <el-table-column label="上级分类" prop="fatherType" align="center"></el-table-column>
                    <el-table-column label="类型名称" prop="typeName" align="center"></el-table-column>
                    <el-table-column label="添加时间" prop="addTypeName" align="center"></el-table-column>
                    <el-table-column label="状态" align="center">
                        <template scope="scope">
                            <el-button type="text" icon="close"></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="scope">
                            <el-button type="text">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                <el-pagination
                    layout="prev, pager, next"
                    :total="100"
                    :page-size="10"
                    >
                </el-pagination>
                </div>
            </div>           
        </div>
    </div>
</template>
<script>
    export default{
        name:"probrand",
        data(){
            return{
                brandData:[
                    {
                        serialnum:"1234",
                        fatherType:"营养早餐",
                        typeName:"烘焙面包",
                        addTypeName:"2017-3-22"

                    }
                ],
                typeFormData:{formBrandName:"",state:""}
            }
        }
    }
</script>
<style lang="">
    
</style>