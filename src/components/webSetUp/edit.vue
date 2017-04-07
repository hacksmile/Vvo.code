<template>
    <div class="box-out">
        <div class="edit">
            <!--<div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{path:'/base'}"><i class="el-icon-menu" style="marginRight:5px;"></i>首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/cplist'}">产品列表</el-breadcrumb-item>
                    <el-breadcrumb-item>产品编辑</el-breadcrumb-item>
                </el-breadcrumb>
            </div>-->
            <div class="edit-oprate">
                <p class="small-title">新增/修改商品</p>
                <el-form :label-position="labelPosition" :model="editData" label-width="100px" :inline="true">
                    <p class="form-tab-label">商品信息填写</p>
                    <el-form-item label="商品编码">
                        <el-input v-model="editData.Id" placeholder="商品编码" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商品品牌">
                        <template scope="scope">
                            <el-select v-model="editData.brand" placeholder="商品品牌" style="width:400px;">
                                <el-option label="爱他美" value="爱他美"></el-option>
                                <el-option label="荷兰牛栏" value="荷兰牛栏"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="editData.proname" placeholder="商品名称" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商品副名称">
                        <el-input v-model="editData.proNextName" placeholder="商品副名称" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="条形码">
                        <el-input v-model="editData.barcode" placeholder="条形码" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="所属分类">
                        <template scope="scope">
                            <el-select v-model="editData.protype" placeholder="所属分类" style="width:400px;">
                                <el-option label="母婴专区" value="母婴专区"></el-option>
                                <el-option label="海外直邮" value="海外直邮"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <el-form-item label="发货方式">
                        <template scope="scope">
                            <el-select v-model="editData.delivery" placeholder="发货方式" style="width:400px;">
                                <el-option label="深圳总仓" value="深圳总仓"></el-option>
                                <el-option label="广州南沙仓" value="广州南沙仓"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <el-form-item label="单位">
                        <template scope="scope">
                            <el-select v-model="editData.unit" placeholder="单位" style="width:400px;">
                                <el-option label="罐" value="罐"></el-option>
                                <el-option label="盒" value="盒"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                   <el-form-item label="售卖状态">
                        <template scope="scope">
                            <el-select v-model="editData.sellState" placeholder="售卖状态" style="width:400px;">
                                <el-option label="上架中" value="on"></el-option>
                                <el-option label="缺货" value="no"></el-option>
                                <el-option label="下架" value="down"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <el-form-item label="商品销量">
                        <el-input v-model="editData.sellnum" placeholder="商品销量" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="产地">
                        <el-input v-model="editData.proaddress" placeholder="产地" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input v-model="editData.prosort" placeholder="排序" style="width:400px;"></el-input>
                    </el-form-item>
                    <p class="form-tab-label">商品搜索词优化</p>
                    <el-form-item label="关键词">
                        <el-input v-model="editData.prokeyword" placeholder="关键词" style="width:800px;"></el-input>
                    </el-form-item>
                    <el-form-item label="短描述">
                        <el-input v-model="editData.shortms" placeholder="短描述" style="width:800px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <el-input type="textarea" :rows="4" v-model="editData.productms" resize="none" style="width:800px;" placeholder="输入一段描述文字"></el-input>
                    </el-form-item>
                    <p class="form-tab-label">商品价格填写</p>
                    <el-form-item label="售价">
                        <el-input v-model="editData.sellxj" placeholder="售价"></el-input>
                    </el-form-item>
                    <el-form-item label="原价">
                        <el-input v-model="editData.sellyj" placeholder="原价"></el-input>
                    </el-form-item>
                    <el-form-item label="分销商价格">
                        <el-input v-model="editData.sellfxjg" placeholder="分销商价格"></el-input>
                    </el-form-item>
                    <el-form-item label="现抢数量">
                        <el-input v-model="editData.nowrobnum" placeholder="现抢数量"></el-input>
                    </el-form-item>
                   <el-form-item label="返现比例">
                        <template scope="scope">
                            <el-select v-model="editData.rebate" placeholder="返现比例" style="width:400px;">
                                <el-option label="不返点" value="noRebate"></el-option>
                                <el-option label="5%" value="5"></el-option>
                                <el-option label="10%" value="10"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>                    
                    <p class="form-tab-label">商品状态选项</p>
                    <el-form-item>
                        <template>
                            <el-radio class="radio" v-model="radio" label="lacked" >锁定</el-radio>
                            <el-radio class="radio" v-model="radio" label="hotsell">热卖</el-radio>
                            <el-radio class="radio" v-model="radio" label="Recommend">推荐</el-radio>
                        </template>
                    </el-form-item>
                    <p class="form-tab-label">商品图片资料</p>
                    <div class="pic-box">
                        <p class="sptpbt">商品主图</p>
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple="true" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                    <div class="pic-box">
                        <p class="sptpbt">商品小图</p>
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" multiple="true" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                    <div class="pic-box">
                        <p class="sptpbt">商品详情图</p>
                    </div>                  
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
        name:"edit",
        data(){
            return{
                labelPosition:"right",
                radio:3,
                editData:{
                     Id:"123456",
                     brand:"",
                     proname:"",
                     proNextName:"",
                     barcode:"", 
                     protype:'',
                     delivery:"",
                     unit:"",
                     sellState:"",
                     sellnum:"",
                     proaddress:"",
                     prosort:"",
                     prokeyword:"",
                     shortms:"",
                     productms:"",
                     sellxj:'',
                     sellyj:"",
                     sellfxjg:"",
                     nowrobnum:"",
                     rebate:""
                },
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style scoped>
.edit-oprate{
    padding-bottom:80px;
}
    .sptpbt{
        height: 40px;
        line-height: 40px;
        color: dodgerblue;
    } 
    .pic-box{
        margin-bottom: 10px;
    }
</style>