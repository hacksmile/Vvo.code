<template>
    <div class="home">
        <Vvoheader></Vvoheader> 
        <div class="content">
            <router-view class="view one"></router-view>
            <router-view class="view five" name="a"></router-view>
            <router-view class="view five" name="b"></router-view>
            <router-view class="view five" name="c"></router-view>
            <router-view class="view five" name="d"></router-view>
            <router-view class="view five" name="e"></router-view>
        </div>
    </div>
</template>
<script>
import Vvoheader from '../common/head.vue'
export default{
    name:"Home",
    components:{
        Vvoheader
    }
}
</script>
<style scoped>

</style>