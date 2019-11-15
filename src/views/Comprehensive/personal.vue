<template>
  <div id="personal">
     <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="information">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
              <el-col :span="10">
                <el-form-item label="用户名:"><el-input v-model="formInline.user" placeholder="用户名"></el-input></el-form-item>

              </el-col>
              <el-col :span="10">
                <el-form-item label="手机号码:"><el-input v-model="formInline.phone" placeholder="手机号码"></el-input></el-form-item>

              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>

              </el-col>
              <el-col :span="10">
                <el-form-item label="电子邮箱:"><el-input v-model="formInline.email" placeholder="电子邮箱"></el-input></el-form-item>

              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="性别:">
                  <el-radio v-model="formInline.gender" label="1">男</el-radio>
                  <el-radio v-model="formInline.gender" label="2">女</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-col :span="5">
                  <el-form-item label="头像:"></el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-button size="mini" type="primary">上传</el-button>
                </el-col>
                <el-col :span="8">
                  <div style="width: 300px;height: 200px; border: 1px solid #DBDBDB;">
                    <img style="width: 100px;height: 100px;" src="" alt="">
                  </div>
                </el-col>
              </el-col>
            </el-row>
          </el-form>
          <div style="text-align: center;">
            <el-button style="margin: 200px auto; " size="mini" type="primary">保存</el-button>
          </div>

        </el-tab-pane>
        <el-tab-pane label="修改密码" name="password">
          <el-form :inline="true" :model="changes" class="demo-form-inline">
            <el-row>
              <el-col :span="10">
                <el-form-item label="新密码:"><el-input v-model="changes.newPwd" placeholder="新密码"></el-input></el-form-item>

              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="确认密码:"><el-input v-model="changes.conPwd" placeholder="确认密码"></el-input></el-form-item>

              </el-col>

            </el-row>

          </el-form>
            <el-button style="margin: 50px 100px;" size="mini" type="primary">确认</el-button>


        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  export default {
    name:"personal",
    data() {
      return {
        activeName:'information',
        formInline:{
          user:'',
          phone:'',
          email:'',
          name:'',
          gender:'1'
        },
        changes:{
          newPwd:'',
          conPwd:''
        }
      }
    },
    components: {

    }
  }
</script>

<style>
  #personal {
    min-height: 680px;
  }

   #personal .el-input__inner {
    height: 30px;
  }

   #personal  .el-form-item__label {
    width: 90px;
  }
</style>
