<template>
    <div class="box-out">
        <div class="managelist">
            <p class="pro-sm-title">管理员列表</p>
            <el-form :model="MGlist" :inline="true" label-width="100px" :label-position="labelposition">
                <el-form-item label="管理员编号">
                    <el-input v-model="MGlist.id" placeholder="输入管理员编号" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item label="管理员名称">
                    <el-input v-model="MGlist.name" placeholder="输入管理员名称" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="MGlist.state" style="width:180px;">
                        <el-option label="正常" value="normal"></el-option>
                        <el-option label="锁定" value="locked"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="权限组">
                    <el-select v-model="MGlist.powergroup" style="width:180px;">
                        <el-option label="门店组" value="md"></el-option>
                        <el-option label="加盟商" value="jm"></el-option>
                        <el-option label="总裁办" value="zc"></el-option>
                        <el-option label="电子商务" value="dzsw"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="MGlist.telphone" placeholder="输入联系电话" style="width:180px;"></el-input>
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
                            <el-dropdown-item>修改密码</el-dropdown-item>                          
                        </el-dropdown-menu>
                </el-dropdown>
                <el-button type="warning">我的分销</el-button>
            </div>
            <el-table border :data="MGtable">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column label="序号" prop="id" align="center" width="70"></el-table-column>
                <el-table-column label="员工编号" prop="ygid" align="center" width="100"></el-table-column>
                <el-table-column label="员工名称" prop="ygname" align="center" width="100"></el-table-column>
                <el-table-column label="权限组" prop="powergroup" align="center"></el-table-column>
                <el-table-column label="联系电话" prop="telnumber" align="center"></el-table-column>
                <el-table-column label="二维码" align="center">
                    <template scope="scope">
                        <el-button type="text">下载二维码</el-button>    
                    </template>
                </el-table-column>
                <el-table-column label="邮箱" prop="email" align="center"></el-table-column>
                <el-table-column label="添加时间" prop="addtime" align="center"></el-table-column>
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
               MGlist:{
                   id:"",
                   name:"",
                   state:"",
                   powergroup:[""],
               },
                MGtable:[
                    {id:"68",ygid:"md2017",ygname:"李孟杰",powergroup:"电子商务",telnumber:"13768340971",email:"464507183@qq.com",addtime:"2017-3-27"}
                ]
            }
        },
        methods:{
            manageoprate(){
                const $ = this;
                $.$router.push('/manageopration')
            }
        }
    }
</script>
<style lang="" scoped>
    
</style>