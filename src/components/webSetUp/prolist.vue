<template>
    <div class="box-out">
        <div id="list">
            <!--<div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{path:'/base'}"><i class="el-icon-menu" style="marginRight:5px;"></i>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>产品列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>-->
            <div class="prolist">
                <p class="pro-sm-title">产品列表</p>
                <el-form :inline='true' :model="SearchCondation" class="demo-form-inline">
                    <el-form-item label="产品名称">
                        <el-input v-model="SearchCondation.proName" placeholder="产品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="产品编码">
                        <el-input v-model="SearchCondation.proId" placeholder="产品编码"></el-input>
                    </el-form-item>
                    <el-form-item label="所属分类">
                        <el-select v-model="SearchCondation.proType" placeholder="产品分类">
                            <el-option label="母婴专区" value="Baby"></el-option>
                            <el-option label="海外直邮" value="overseas"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                    <el-dropdown menu-align="start" trigger="click"  @command="routeEdit">
                        <el-button type="primary">
                            操作<i class="el-icon-caret-bottom el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">添加</el-dropdown-item>
                            <el-dropdown-item command="b">导出Excel表</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form>
                <div class="prolist-table">
                    <el-table :data="prolist" style="width:100%; " border >
                        <el-table-column type="selection"></el-table-column>
                        <el-table-column label="序号" prop="serialnum" width="70" align="center"></el-table-column>
                        <el-table-column label="产品编码" prop="proId" width="100" align="center"></el-table-column>
                        <el-table-column label="产品名称" prop="proName"  align="center" show-overflow-tooltip="true"></el-table-column>
                        <el-table-column label="所属分类" prop="proType" width="100" align="center"></el-table-column>
                        <el-table-column label="售价" prop="proPrice" width="90" align="center"></el-table-column>
                        <el-table-column label="条码" prop="barCode" width="150" align="center"></el-table-column>
                        <el-table-column label="上架" width="100" align="center">
                            <template scope="scope">
                                <el-button type="text">点击上架</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="添加时间" prop="addTime" width="120" align="center"></el-table-column>
                        <el-table-column label="操作" align="center">
                            <template scope="scope">
                                <el-button size="small" type="primary">编辑</el-button>
                                <el-button size="small" type="primary">详情</el-button>
                                <el-button size="small" type="primary" @click="addStandard">添加规格</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <template>
                        <div class="block">
                            <el-pagination :current-page="4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="1000">
                            </el-pagination>
                        </div>                       
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'VvoList',
        data(){
            return{
                SearchCondation:{
                    proName:'',
                    proId:'',
                    proType:'',
                    region:""
                },
                prolist:[
                    {
                        serialnum:'1234',
                        proId:"456632",
                        proName:'爱尔兰 Abbott 港版雅培 心美力亲体similac婴幼儿奶粉 4段 900g (3岁以上)',
                        proType:'母婴专区',
                        proPrice:"5625.00",
                        barCode:'4006387006044',
                        addTime:"2017-3-22"
                    }

                ],
                multipleSelection:[]
            }
        },
        methods:{
            handleSelectionChange:function(val){
                this.multipleSelection = val;
            },
            routeEdit:function(command){
                if(command == "a"){
                    this.$router.push('/cpedit');
                }
            },
            addStandard(){
                this.$router.push('/addstandard');
            }
        }
    }
</script>
<style scoped>

</style>