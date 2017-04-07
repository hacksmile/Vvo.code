<template>
    <div class="box-out">
        <div class="warehouse">
            <p class="pro-sm-title">物流公司列表</p>
            <el-form :model="logistics" :inline="true" label-width="100px" :label-position="labelposition">
                <el-form-item label="物流公司编号">
                    <el-input v-model="logistics.id" placeholder="物流公司编号" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="物流公司名称">
                    <el-input v-model="logistics.name" placeholder="物流公司名称" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="logistics.state" style="width:200px;">
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
            <el-table border :data="logisticsTable">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column label="序号" prop="id" align="center" width="70"></el-table-column>
                <el-table-column label="编号" prop="wlid" align="center" width="130"></el-table-column>
                <el-table-column label="物流公司名称" prop="wlname" align="center"></el-table-column>
                <el-table-column label="拼音" prop="wlpy" align="center" width="80"></el-table-column>
                <el-table-column label="网址" prop="wlweb" align="center"></el-table-column>
                <el-table-column label="添加时间" prop="addtime" align="center" width="160"></el-table-column>
                <el-table-column label="状态" align="center" width="70">
                    <template scope="scope">
                        <el-button type="text" icon="check"></el-button>  
                    </template>  
                </el-table-column>
                <el-table-column label="操作" align="center" width="200">
                    <template scope="scope">
                        <el-button type="text" icon="edit" @click="">编辑</el-button>    
                        <el-button type="text" icon="delete" @click="">删除</el-button>    
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
               logistics:{
                   id:"",
                   name:"",
                   state:""
               },
                logisticsTable:[
                    {id:"68",wlid:"2201702",wlname:"优速快递",wlpy:"yousu",wlweb:"www.yousu.com",addtime:"2017-3-27"}
                ]
            }
        },
    }
</script>
<style lang="" scoped>
    
</style>