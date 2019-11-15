<template>
  <div id="protocol">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户协议" name="first">
          <Protocols />
        </el-tab-pane>
        <el-tab-pane label="商家协议" name="second">
          <Protocols />
        </el-tab-pane>
        <el-tab-pane label="退货协议" name="third">
          <Protocols />
        </el-tab-pane>
        <el-tab-pane label="广告协议" name="fourth">
          <Protocols />
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  import Protocols from '@/components/comprehensive/protocols';
  export default {
    name:"protocol",
    data() {
      return {
        activeName:'first'
      }
    },
    methods: {
      handleClick(e) {
        console.log(e)
      }
    },
    components: {
      Protocols
    }
  }
</script>

<style>
</style>
