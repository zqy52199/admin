<template>
  <div id="reviewDetail">
    <!-- 资质审核 -->
    <div class="qualificationReview">
      <div class="header_box">
        当前审核状态:  <span style="color: #FF2150;font-size: 14px;font-weight: 700;" v-show="1">待审核</span>
                      <span style="color: #E75D01;font-size: 14px;font-weight: 700;" v-show="1">已拒绝</span>
                      <span style="color: #09BA07;font-size: 14px;font-weight: 700;" v-show="1">已通过</span>
      </div>
      <div class="center_box">
        <el-row>
          <el-col :span="4">
            <div style="border: 1px solid red;height: 150px;">
              <img src="" style="height: 100%;width: 100px;" alt="">
            </div>
          </el-col>
          <el-col :span="17">
            <div class="center_box_name" style="padding-left: 20px;">
              <div>店铺名称：啥撒旦法撒旦法</div>
              <div>英文名称：niho</div>
              <div>西文名称：sdfasdjf</div>
              <div>联系QQ号：</div>
              <div>店铺标题：</div>
            </div>
          </el-col>
          <el-col :span="3">
            <span>商家账号：123456</span>
          </el-col>
        </el-row>
        <div class="center_box1">
          <el-row style="border-bottom: 1px solid #DBDBDB;padding-bottom: 30px;">
            <el-col :span="22">
              <el-col :span='12'>公司法人：351631</el-col>
              <el-col :span='12'>身份证号：525465654</el-col>
              <el-col :span='12'>公司名称：35165156</el-col>
              <el-col :span='12'>公司电话：35163516556</el-col>
              <el-col :span='12'>经营项目：3512156</el-col>
              <el-col :span='12'>主营产品：635416516</el-col>
              <el-col :span='24'>公司地址：送快递发is和的覅哈斯时间as阿斯加爱上</el-col>
            </el-col>
            <el-col :span="2">
              <div>营业执照</div>
              <img src="" alt="">
            </el-col>

          </el-row>
          <el-row style="padding-top: 30px;">
            <el-col :span="21">
              <el-col :span='24'>收款人姓名：351631</el-col>
              <el-col :span='24'>对公账号：525465654</el-col>
            </el-col>
            <el-col :span="3">
              <div>对公账户证明</div>
              <img src="" alt="">
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 发布审核 -->
    <div v-if="false" class="releaseReview">
      <div class="header_box">
        商家发布审核:  <span class="header_box_span" style="color: #FF2150;" v-show="1">待审核</span>
                      <span class="header_box_span" style="color: #E75D01;" v-show="1">已拒绝</span>
                      <span class="header_box_span" style="color: #09BA07;" v-show="1">已通过</span>
      </div>
      <div class="center_box">
        <el-tabs v-model="activeName">
            <el-tab-pane label="商品信息" name="first">
              <el-row>
                <el-col :span="2" style="line-height: 30px;">
                  <span><span style="color: red;">*</span>发布语言：</span>
                </el-col>
                <el-col :span="20">
                  <div class="language">
                    <span :class="languageIndex === index ? 'active' : ''" v-for="(item, index) in language" :key="index" @click="langClick(index)">{{item}}</span>
                  </div>
                </el-col>
              </el-row>
              <!-- 中文 -->
              <div v-show="languageIndex === 0" class="center_box_content">
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品分类：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品名称：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="8">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                    </el-col>

                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>搜索关键词：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品图片：</span>
                  </el-col>
                  <el-col :span="20">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>参数信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品编号：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> 0/6
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>产能：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /天
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>单价：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /人民币
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;体积：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;容量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱尺寸：</span>
                  </el-col>
                  <el-col :span="16">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     /cm
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                      /kg
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱数量：</span>
                  </el-col>
                  <el-col :span="11">
                    <input type="text" disabled style="width: 125px;height: 25px;">
                     /pcs
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>HS编码：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>包装信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2.5">
                    <span><span style="color: red;">*</span>商品详情描述：</span>
                  </el-col>
                  <el-col :span="16">
                    <!-- 富文本编辑器 -->
                    <Editor />
                  </el-col>
                </el-row>
              </div>
              <!-- 英文 -->
              <div v-show="languageIndex === 1" class="center_box_content">
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品分类：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品名称：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="8">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                    </el-col>

                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>搜索关键词：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品图片：</span>
                  </el-col>
                  <el-col :span="20">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>参数信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品编号：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> 0/6
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>产能：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /天
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>单价：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /人民币
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;体积：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;容量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱尺寸：</span>
                  </el-col>
                  <el-col :span="16">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     /cm
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                      /kg
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱数量：</span>
                  </el-col>
                  <el-col :span="11">
                    <input type="text" disabled style="width: 125px;height: 25px;">
                     /pcs
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>HS编码：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>包装信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
              </div>
              <!-- 西文 -->
              <div v-show="languageIndex === 2" class="center_box_content">
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品分类：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品名称：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="8">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                    </el-col>

                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>搜索关键词：</span>
                  </el-col>
                  <el-col :span="20">
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="1111">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="2222">
                    </el-col>
                    <el-col :span="4">
                      <input disabled style="width: 120px;height: 25px;" type="text" value="3333">
                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品图片：</span>
                  </el-col>
                  <el-col :span="20">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                    <img src="" style="border: 1px solid #DBDBDB;height: 100px; width: 100px;float: left;margin-right: 10px;" alt="">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>参数信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                     <el-col :span="12" style="margin-bottom: 10px;">
                       品牌：<input type="text" style="width: 150px;height: 25px;" disabled>
                     </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>商品编号：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> 0/6
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>产能：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /天
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>单价：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;"> /人民币
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;体积：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span>&nbsp;&nbsp;容量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 350px;height: 25px;">
                     <input type="text" disabled style="width: 60px;height: 25px;margin-left: 5px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱尺寸：</span>
                  </el-col>
                  <el-col :span="16">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     &nbsp;*&nbsp;
                     <input type="text" disabled style="width: 125px;height: 25px;">
                     /cm
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱重量：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 125px;height: 25px;">
                      /kg
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>装箱数量：</span>
                  </el-col>
                  <el-col :span="11">
                    <input type="text" disabled style="width: 125px;height: 25px;">
                     /pcs
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>HS编码：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>包装信息：</span>
                  </el-col>
                  <el-col :span="11">
                     <input type="text" disabled style="width: 422px;height: 25px;">
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- 发布信息 -->
            <el-tab-pane label="发布信息" name="second">
              <el-row style="margin-bottom: 20px;">
                <el-col :span="2" style="line-height: 30px;">
                  <span><span style="color: red;">*</span>发布语言：</span>
                </el-col>
                <el-col :span="20">
                  <div class="language">
                    <span :class="languageIndex === index ? 'active' : ''" v-for="(item, index) in language" :key="index" @click="langClick(index)">{{item}}</span>
                  </div>
                </el-col>
              </el-row>
              <div v-show="languageIndex === 0">
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>选择商品：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>发布标题：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>最小起订量：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>批发价格：</span>
                  </el-col>
                  <el-col :span="10">
                    <el-col :span="12">
                      数量 >= <input disabled type="text" style="width: 120px;height: 25px;">

                    </el-col>
                    <el-col :span="12">
                      折扣： <input disabled type="text" style="width: 120px;height: 25px;"> 折

                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>规格：</span>
                  </el-col>
                  <el-col :span="10">
                   是大是大非史蒂夫
                  </el-col>
                </el-row>
              </div>
              <div v-show="languageIndex === 1">
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>选择商品：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>发布标题：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>最小起订量：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>批发价格：</span>
                  </el-col>
                  <el-col :span="10">
                    <el-col :span="12">
                      数量 >= <input disabled type="text" style="width: 120px;height: 25px;">

                    </el-col>
                    <el-col :span="12">
                      折扣： <input disabled type="text" style="width: 120px;height: 25px;"> 折

                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>规格：</span>
                  </el-col>
                  <el-col :span="10">
                   是大是大非史蒂夫2
                  </el-col>
                </el-row>
              </div>
              <div v-show="languageIndex === 2">
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>选择商品：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>发布标题：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;line-height: 25px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>最小起订量：</span>
                  </el-col>
                  <el-col :span="20">
                      <input disabled style="width: 422px;height: 25px;" type="text" value="1111">
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>批发价格：</span>
                  </el-col>
                  <el-col :span="10">
                    <el-col :span="12">
                      数量 >= <input disabled type="text" style="width: 120px;height: 25px;">

                    </el-col>
                    <el-col :span="12">
                      折扣： <input disabled type="text" style="width: 120px;height: 25px;"> 折

                    </el-col>
                  </el-col>
                </el-row>
                <el-row style="margin-bottom: 20px;">
                  <el-col :span="2">
                    <span><span style="color: red;">*</span>规格：</span>
                  </el-col>
                  <el-col :span="10">
                   是大是大非史蒂夫3
                  </el-col>
                </el-row>
              </div>


            </el-tab-pane>
          </el-tabs>
      </div>
    </div>
    <!-- 分类审核 -->
    <div v-if="false" class="classificationReview" style="min-height: 600px;">
      <div class="header_box">
        当前审核状态:  <span class="header_box_span" style="color: #FF2150;" v-show="1">待审核</span>
                      <span class="header_box_span" style="color: #E75D01;" v-show="1">已拒绝</span>
                      <span class="header_box_span" style="color: #09BA07;" v-show="1">已通过</span>
      </div>
      <div class="center_box">
        <el-row>
          <el-col :span="2" style="margin-left: 20px;">
            <span>申请分类：</span>
          </el-col>
          <el-col :span="15">
              <div>一级分类：12312</div>
              <div>二级分类：23123</div>
              <div>三级分类：123123</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" style="margin-left: 20px;margin-top: 100px;">
            <span>拒绝理由：<span style="color: #00A1E9;">（如果拒绝申请，请填写拒绝理由）</span></span>
          </el-col>
          <el-col :span="12" style="margin-left: 20px;margin-top: 10px;">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </el-col>
        </el-row>
        <div style="margin-left: 20px;margin-top: 50px;">
         <el-button type="primary">审核通过</el-button>
         <el-button type="primary">拒绝审核</el-button>
        </div>
      </div>
    </div>
    <!-- 货款审核 -->
    <div v-if="false" class="paymentReview">
      <div>
        <el-tabs v-model="detailActiveName">
            <el-tab-pane label="全部" name="detailFirst">
              <Search />
              <List :listArr="listArr" />
            </el-tab-pane>
            <el-tab-pane label="首款申请" name="detailSecond">首款申请</el-tab-pane>
            <el-tab-pane label="发货款申请" name="detailThird">发货款申请</el-tab-pane>
            <el-tab-pane label="尾款申请" name="detailFourth">尾款申请</el-tab-pane>
          </el-tabs>
      </div>
      <div class="center_box">

      </div>
    </div>
  </div>
</template>

<script>
  import Editor from '@/components/Editor';
  import Search from '@/components/review/detailCom/Search';
  import List from '@/components/review/detailCom/List';
  export default {
    name:'reviewdetail',
    data() {
      return {
        textarea:'',
        activeName: 'first',
        detailActiveName:'detailFirst',
        language: ['中文', '英文', '西文'],
        languageIndex:0,
        listArr:[{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderNumber:'123456',
          orderStatus:'申请类型',
          applicationTime:'申请时间',
          orderType:'1'
        },{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderStatus:'申请类型',
          orderNumber:'123456',
          applicationTime:'申请时间',
          orderType:'2'
        },{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderNumber:'123456',
          orderStatus:'申请类型',
          applicationTime:'申请时间',
          orderType:'3'
        }
        ]
      }
    },
    components:{
      Editor,
      Search,
      List
    },
    methods: {
      langClick(index) {
        this.languageIndex = index;
      }
    }
  }
</script>

<style>
  .header_box {
    padding: 15px 10px;
    background: #FFF7F5;
    border: 1px solid #FF2150;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .qualificationReview .center_box {
    margin-top: 20px;
    border-top: 2px solid #DBDBDB;
    padding: 30px 0;
  }

  .qualificationReview .center_box_name > div {
    line-height: 25px;
  }

  .qualificationReview .center_box1{
    border: 1px dashed #009FE9;
    border-radius: 6px;
    margin: 30px 0;
    padding: 20px;
  }

  .qualificationReview .center_box1 .el-col {
    line-height: 25px;
  }
  .releaseReview .center_box {
    padding: 10px 20px;
  }

  .releaseReview .language {
    overflow: hidden;
  }

  .releaseReview .language  span {
    border: 1px solid #DBDBDB;
    float: left;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    width: 70px;
  }
  .releaseReview .language .active {
    color: #009FE9;
    border: 1px solid #009FE9;
  }
  .releaseReview .center_box_content {
    margin-top: 20px;
  }

  .releaseReview .header_box_span {
    font-size: 14px;font-weight: 700;
  }

  .center_box_content .el-col{
    line-height: 30px;
  }
</style>
