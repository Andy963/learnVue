<template>

</template>

<script>
export default {

  created() {
    // 当路由参数变化时，/user/1切换到/user/2原来的组件实例会被利用
    // 因为两个路由渲染了同一个组件，
    console.log(this.$route.params.id)
  },
  // 解决方法一
  // watch:{
  //   $route:(to,from)=>{
  //     console.log(to.params.id)
  //     // 发起ajax请示后端接口数据
  //   }
  // }
  // 解决方法二
  beforeRouteUpdate(to, from, next) {
    console.log(to.params.id)
    // 一定要调用next,不会会阻塞整个路由
    next();
  }
}
</script>

<style scoped>

</style>