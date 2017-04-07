<template>
    <div class="box-out">
        <div class="manageOprate">
            <p class="small-title">新增/修改管理员信息</p>
            <el-form :model="manageOprate" :label-position="labelopsition" :inline="true" label-width="80px">
                <el-form-item label="用户编号">
                    <el-input placeholder="yg00001" :disabled="true" v-midel="manageOprate.userId"></el-input>
                </el-form-item>
               <el-form-item label="用户名称">
                    <el-input placeholder="用户名称" v-model="manageOprate.username"></el-input>
                </el-form-item>
               <el-form-item label="权限组">
                    <el-input placeholder="客服组" :disabled="true" v-model="manageOprate.powerGroup"></el-input>
                </el-form-item>
               <el-form-item label="邮箱地址">
                    <el-input placeholder="邮箱地址" v-model="manageOprate.Email" style="width:300px;"></el-input>
                </el-form-item>
               <el-form-item label="联系电话">
                    <el-input placeholder="联系电话" v-model="manageOprate.tel"></el-input>
                </el-form-item> 
               <el-form-item label="年龄">
                    <el-input placeholder="年龄" v-model="manageOprate.age"></el-input>
                </el-form-item>
               <el-form-item label="排序">
                    <el-input placeholder="排序" v-model="manageOprate.manageSort"></el-input>
                </el-form-item>
               <el-form-item label="联系地址">
                    <el-input placeholder="联系地址" v-model="manageOprate.address" style="width:300px;"></el-input>
                </el-form-item>
                <p class="form-tab-label">状态填写</p>
                <el-form-item>
                    <el-radio-group v-model="manageOprate.state">
                        <el-radio label="锁定"></el-radio>
                        <el-radio label="正常"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <p class="form-tab-label">上传头像</p>
                <div class="pic-box">
                    <p style="margin-bottom:10px;">上传头像</p>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" multiple="true" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>                
            </el-form>
            <div class="subBtn">
                <el-button type="primary">取消返回</el-button>
                <el-button type="primary">确认添加</el-button>                
            </div> 
        </div> 
    </div>
</template>
<script>
   export default{
        data(){
            return {
               manageOprate:{
                   userId:"",
                   username:"",
                   powerGroup:"",
                   Email:"",
                   tel:"",
                   age:"",
                   manageSort:"",
                   address:"",
                   state:"",
               } 
            }
        }
   } 
</script>
<style lang="" scoped>
    
</style>