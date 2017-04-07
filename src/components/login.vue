<template>
    <div id="login">
        <div class="login-box">
            <p>VVO后台管理系统</p>
            <div class="login-input">
                <el-form :model="loginInfo" style="text-align:center;" :rules="rules" ref="loginInfo">
                    <el-form-item prop="username">
                        <el-input v-model="loginInfo.username" placeholder="用户名" size="large"></el-input>
                    </el-form-item>
                    <el-form-item prop="userpass">
                        <el-input type="password" v-model="loginInfo.userpass" placeholder="密码" size="large"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;" @click="submitPage('loginInfo')">登录</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                loginInfo:{
                    username:"",
                    userpass:'',
                },
                rules:{
                    username:[
                        {required:true,message:"请输入用户名",trigger:'blur'}
                    ],
                    userpass:[
                        {required:true,message:"请输入密码",trigger:'blur'}
                    ],
                }
            }
        },
        methods:{
            submitPage(formname){
                const $=this;
                $.$refs[formname].validate(function(valid){
                    if(valid){
                        $.$router.push('/base')
                    }else{
                        return false;
                    }
                })
            }
        }
    }
</script>
<style scoped>
    #login{
        width: 100%;
        height: 100%;
        background-color: #324157;

    }
    .login-box{
        width:400px;
        height:300px;
        border-radius: 10px;
        background-color: #fff;

        position: absolute;
        left:50%;
        top: 50%;
        margin-left: -200px;
        margin-top:-150px;
    }
    .login-box p{
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 24px;
    }
    .login-input{
        padding: 0 10%;
    }
</style>