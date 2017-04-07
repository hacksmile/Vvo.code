<template>
    <div class="box-out">
        <div class="warehouse">
            <p class="pro-sm-title">仓库列表</p>
            <el-form :model="warehouse" :inline="true" label-width="100px" :label-position="labelposition">
                <el-form-item label="仓库编号">
                    <el-input v-model="warehouse.id" placeholder="仓库编号" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item label="仓库名称">
                    <el-input v-model="warehouse.name" placeholder="仓库名称" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="warehouse.state" style="width:180px;">
                        <el-option label="正常" value="normal"></el-option>
                        <el-option label="锁定" value="locked"></el-option>
                    </el-select>
                </el-form-item>
               <el-form-item>
                    <el-button type="primary" style="width:100px;">搜索</el-button>
                </el-form-item>
            </el-form>
            <div style="margin-bottom:10px;">
                <el-dropdown menu-align="start" style="margin-right:20px;">
                    <el-button type="primary">
                        操作<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>添加</el-dropdown-item>
                            <el-dropdown-item>输出为Excel</el-dropdown-item>                          
                        </el-dropdown-menu>
                </el-dropdown>
            </div>
            <el-table border :data="warehouseTable">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column label="序号" prop="id" align="center" width="70"></el-table-column>
                <el-table-column label="编号" prop="spid" align="center" width="130"></el-table-column>
                <el-table-column label="仓库名称" prop="spname" align="center"></el-table-column>
                <el-table-column label="添加时间" prop="addtime" align="center" width="160"></el-table-column>
                <el-table-column label="状态" align="center" width="70">
                    <template scope="scope">
                        <el-button type="text" icon="check"></el-button>  
                    </template>  
                </el-table-column>
                <el-table-column label="操作" align="center" width="80">
                    <template scope="scope">
                        <el-button type="text" icon="edit" @click="manageoprate">编辑</el-button>    
                    </template>               
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"managerlist",
        data(){
            return{
               labelposition:"right",
               warehouse:{
                   id:"",
                   name:"",
                   state:""
               },
                warehouseTable:[
                    {id:"68",spid:"md2017",spname:"李孟杰",powergroup:"广州南沙仓",addtime:"2017-3-27"}
                ]
            }
        },
        // methods:{
        //     manageoprate(){
        //         const $ = this;
        //         $.$router.push('/manageopration')
        //     }
        // }
    }
</script>
<style lang="" scoped>
    
</style>