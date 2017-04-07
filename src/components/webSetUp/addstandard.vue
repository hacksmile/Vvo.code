<template>
    <div class="box-out">
        <div class="addstandard">
            <!--<div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{path:'/base'}"><i class="el-icon-menu" style="marginRight:5px;"></i>首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/cplist'}">产品列表</el-breadcrumb-item>
                    <el-breadcrumb-item>添加规格</el-breadcrumb-item>
                </el-breadcrumb>
            </div>-->
            <div class="addstandard-content">
                <p class="small-title">新增/修改规格</p>
                <el-form :inline="true" label-width="80px" :model="addStandardData" :label-position="labelposition">
                    <p class="form-tab-label">商品规格信息填写</p>
                    <el-form-item label="商品编码">
                        <el-input v-model="addStandardData.Id" disabled style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="addStandardData.goodName" disabled style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="规格名称">
                        <el-input v-model="addStandardData.standardName" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="售价">
                        <el-input v-model="addStandardData.nowPrice" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="原价">
                        <el-input v-model="addStandardData.originalPrice" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="返现比率">
                        <el-select v-model="addStandardData.returnRatio" style="width:400px;">
                            <el-option label="不返点" value="no"></el-option>
                            <el-option label="5%" value="5"></el-option>
                            <el-option label="10%" value="10"></el-option>                            
                        </el-select>
                    </el-form-item>
                    <el-form-item label="发货数量">
                        <el-input v-model="addStandardData.deliverNum" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input v-model="addStandardData.reorder" style="width:400px;"></el-input>
                    </el-form-item>
                    <p class="form-tab-label">商品状态选项</p>
                    <el-form-item>
                        <el-radio-group v-model="addStandardData.goodState">
                            <el-radio label="锁定"></el-radio>
                            <el-radio label="推荐"></el-radio>
                        </el-radio-group>
                    </el-form-item> 
                    <p class="form-tab-label">商品图片资料</p>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>                                      
                </el-form>
            </div>

            <div class="subBtn">
                <el-button type="primary">取消返回</el-button>
                <el-button type="primary">确认添加</el-button>                
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"addStandard",
        data(){
            return{
                labelposition:"right",
                addStandardData:{
                    Id:"123456",
                    goodName:"荷兰直邮 荷兰 Nutrilon 牛栏 轻度水解 H.A半水解蛋白奶粉 2段 750g(6-12个月)【2罐装】",
                    standardName:"",
                    nowPrice:"",
                    originalPrice:"",
                    returnRatio:"",
                    deliverNum:'',
                    reorder:' ',
                    goodState:" ",
                },
                dialogImageUrl: '',
                dialogVisible: false,
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
        }
    }
</script>
<style scoped>
.addstandard-content{
    padding-bottom:80px;
}
</style>