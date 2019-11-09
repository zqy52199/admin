<template>
  <div id="list" style="margin-top: 20px;" class="list_box">
    <!-- 基本资料列表 -->
    <div v-if="showDiv == 1" class="box1">
      <el-table :data="tempListArr" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
                <el-form-item label="姓名:">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="身份证号:">
                    <span>{{ props.row.cardId }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="手机:">
                    <span>{{ props.row.telphone }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="兼职编码:">
                    <span>{{ props.row.number }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="银行账号:">
                    <span>{{ props.row.bankaccount }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="所在地区:">
                    <span>{{ props.row.area }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="注册日期:">
                    <span>{{ props.row.created }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-form-item label="详细地址:">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                </div>
              </el-col>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column width="80px" label="ID">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="兼职编号" prop="number"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column width="220px" label="身份证号" prop="cardId"></el-table-column>
        <el-table-column label="手机" prop="telphone"></el-table-column>
        <el-table-column width="220px" label="银行账号" prop="bankaccount"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 0">冻结</span>
            <span v-else @click="freeze(scope.row.uid, scope.row.status, scope.$index)" :style="scope.row.status == 1 ? 'cursor: pointer;color: #2592ff;' : ''">冻结</span>

            &nbsp;&nbsp;

            <span v-if="scope.row.status == 1">激活</span>
            <span v-else @click="freeze(scope.row.uid, scope.row.status, scope.$index)" :style="scope.row.status == 0 ? 'cursor: pointer;color: #2592ff;' : 'cursor: pointer;'">
              激活
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 商家推广列表 -->
    <div v-if="showDiv == 2" ref="className" class="box2">
      <el-table :data="tempListArr" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
                <el-form-item label="兼职编号:">
                  <span>{{ props.row.number }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="企业名称:">
                    <span>{{ props.row.company }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="企业固定电话:">
                    <span>{{ props.row.tel }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="企业法人:">
                    <span>{{ props.row.legal }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="企业信用代码:">
                    <span>{{ props.row.company_sn }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="经营品类:">
                    <span>{{ props.row.category_id }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="推荐渠道:">
                    <span v-if="props.row.channel === 1">电商平台</span>
                    <span v-else-if="props.row.channel === 2">自身人脉</span>
                    <span v-else-if="props.row.channel === 3">论坛帖子</span>
                    <span v-else>{{ props.row.channel_ext }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-form-item label="提交日期:">
                    <span>{{ props.row.updated }}</span>
                  </el-form-item>
                </div>
              </el-col>

              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-form-item label="企业地址:">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple">
                  <el-form-item label="联系记录证明:">
                    <div style="margin-top: 15px;">
                      <div class="img_div_box" v-for="item in props.row.pics"><img :src="baseURL + '/' + item" style="width: 100%;height: 100%;" alt="" /></div>
                    </div>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="24">
                <div style="font-size: 12px;border: 1px blue dashed;border-radius: 6px;padding: 20px;overflow: hidden;">
                  <el-col :span="6">
                    注册是否通过： {{ props.row.isreg == 0 ? '否' : '是' }} <span style="margin-left: 10px;cursor: pointer;color: #2863FD;">查看</span>
                    <span v-if="props.row.isreg == 0"><el-button @click="tempClick(props.row.mid, props.row.isreg, 2, props.$index)" size="mini" type="danger">注册</el-button></span>
                  </el-col>
                  <el-col :span="6">
                    产品发布是否达标： {{ props.row.isrelease == 0 ? '否' : '是'}} <span style="margin-left: 10px;cursor: pointer;color: #2863FD;">查看</span>
                  <span v-if="props.row.isrelease == 0"><el-button @click="tempClick(props.row.mid, props.row.isrelease, 3, props.$index)" size="mini" type="danger">发布</el-button></span>
                  </el-col>

                </div>
              </el-col>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column width="60px" label="ID">
          <template slot-scope="props">
            <span v-if="props.row.status == 0 && props.row.istop == 0" style="color: #999;">{{ props.$index + 1 }}</span>
            <span v-if="props.row.status == 0 && props.row.istop == 1" style="color: #2962ff;">{{ props.$index + 1 }}</span>
            <span v-if="props.row.status == 1" style="color: #1aad19;">{{ props.$index + 1 }}</span>
            <span v-if="props.row.status == 2" style="color: red;">{{ props.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column width="60px" label="选择">

          <template slot-scope="props">
           <input type="checkbox" v-if="props.row.status == 0 && props.row.isrelease == 1 && props.row.isreg == 1" name="checkbox1" v-model="checkVal" :value="props.row.mid" class="checkInput">
          </template>

        </el-table-column>
        <el-table-column label="企业名称">
          <template slot-scope="props">
            <span v-if="props.row.status == 0 && props.row.istop == 0" style="color: #999;">{{ props.row.company }}</span>
            <span v-if="props.row.status == 0 && props.row.istop == 1" style="color: #2962ff;">{{ props.row.company }}</span>
            <span v-if="props.row.status == 1" style="color: 1aad19;">{{ props.row.company }}</span>
            <span v-if="props.row.status == 2" style="color: red;">{{ props.row.company }}</span>
          </template>
        </el-table-column>
        <el-table-column label="兼职编号">
          <template slot-scope="props">
            <span v-if="props.row.status == 0 && props.row.istop == 0" style="color: #999;">{{ props.row.number }}</span>
            <span v-if="props.row.status == 0 && props.row.istop == 1" style="color: #2962ff;">{{ props.row.number }}</span>
            <span v-if="props.row.status == 1" style="color: 1aad19;">{{ props.row.number }}</span>
            <span v-if="props.row.status == 2" style="color: red;">{{ props.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column width="220px" label="提交日期">
          <template slot-scope="props">
            <span v-if="props.row.status == 0 && props.row.istop == 0" style="color: #999;">{{ props.row.updated }}</span>
            <span v-if="props.row.status == 0 && props.row.istop == 1" style="color: #2962ff;">{{ props.row.updated }}</span>
            <span v-if="props.row.status == 1" style="color: 1aad19;">{{ props.row.updated }}</span>
            <span v-if="props.row.status == 2" style="color: red;">{{ props.row.updated }}</span>
          </template>
        </el-table-column>
        <el-table-column width="220px" label="操作" prop="updated">
          <template slot-scope="props">

              <el-button v-if="props.row.status == 1" disabled size="mini" type="success">已通过</el-button>
              <el-button v-if="props.row.status == 2" disabled size="mini" type="danger">已拒绝</el-button>

            <span v-if="props.row.status == 0 && props.row.isrelease == 1 && props.row.isreg == 1" ref="radios">
              <span style="margin-right: 10px;">
                <input type="checkbox" :value="1" :data-mid="props.row.mid" :class="'radiosTwo radiosTwo'+props.row.mid" @click="radiosCheck(1, 'radiosTwo'+props.row.mid)" style="position: relative;top: 3px;" >
                <el-button size="mini" @click="oneBy(1, props.row.mid)" type="success">通过</el-button>
              </span>
              <span>
                <input type="checkbox" :value="2" :data-mid="props.row.mid" :class="'radiosTwo radiosTwo'+props.row.mid" @click="radiosCheck(2, 'radiosTwo'+props.row.mid)" style="position: relative;top: 3px;" >
                <el-button size="mini" @click="oneBy(2, props.row.mid)" type="danger">拒绝</el-button>
              </span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="props">
            <span v-if="props.row.status == 0 && props.row.istop == 0" style="color: #999;">待审核</span>
            <span v-if="props.row.status == 0 && props.row.istop == 1" style="color: #2962ff;">待审核</span>
            <span v-else-if="props.row.status == 1" style="color: 1aad19;">已通过</span>
            <span v-else-if="props.row.status == 2" style="color: red;">已拒绝</span>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 20px;overflow: hidden;">
        <div style="float: left;">
         <span ><input style="position: relative;top: 2px;" type="checkbox" @click="allCheck"> 全选</span>
         <span></span>
         <el-button type="success" size="mini" @click="allBy(1)">一键通过</el-button>
         <el-button type="danger" size="mini" @click="allBy(2)">一键拒绝</el-button>
        </div>
        <div style="float: right;">
          已选 <el-button style="margin: 0 10px;" type="primary" size="mini" @click="allBtn">一键提交</el-button>
        </div>

      </div>

    </div>
    <!-- 提现申请列表 -->
    <div v-if="showDiv == 4" class="box4">
      <el-table :data="tempListArr" style="width: 100%">
        <el-table-column width="80px" label="ID">
          <template slot-scope="props">
            {{ props.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="兼职编号" prop="number"></el-table-column>
        <el-table-column width="120px" label="姓名" prop="name"></el-table-column>
        <el-table-column width="120" prop="tixian" label="提现方式">
          <template slot-scope="props">
            <span>{{ props.row.mode == 1 ? '银行转账' : '支付宝' }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="提现账号"></el-table-column>
        <el-table-column width="120" prop="money" label="提现金额(￥)"></el-table-column>
        <el-table-column prop="created" label="申请时间"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template scope="scope">
            <span v-if="scope.row.status == 0">
              <span style="margin-right: 15px;color: #999;">待处理</span>
              <el-button @click="examineBtn(scope.row.id, scope.$index)" size="mini" type="primary">已打款</el-button>
            </span>
            <span v-else>
              <span style="margin-right: 15px;color: #09bb07;">已完成</span>
              <el-button @click="visiblea(scope.row.voucher)" size="mini" type="primary">查看凭证</el-button>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 查看凭证 -->
    <el-dialog title="查看汇款凭证" :visible.sync="visible"  center>
      <div style="border: 1px solid #DBDBDB;border-radius: 5px;margin: 0 auto;"><img style="height: 100%;width: 100%;" :src="baseURL+'/'+imgUrl" alt="" /></div>
    </el-dialog>
    <!-- 上传凭证 -->
    <el-dialog :visible.sync="centerDialogVisible" width="35%" center>
     <input v-show="false" ref="inputClick" @change="changeImage($event)" type="file" />
     <input style="width: 300px;height: 24px;" :value="imgName" type="text">
     <el-button @click="inputClicks" size="mini" type="primary">上传汇款凭证</el-button>
     <div style="width: 220px;margin: 40px auto;">
       <el-button size="small" style="width: 100px;" @click="determine" type="primary">确定</el-button>
       <el-button size="small" style="width: 100px;" @click="centerDialogVisible = false" type="primary">关闭</el-button>
     </div>
    </el-dialog>
    <!-- 推广业绩列表 -->
    <div v-if="showDiv == 5" class="box5">
      <el-table :data="tempListArr" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
                  :data="props.row.descdata"
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="byljtg"
                    label="本月累计推广"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="byyxtg"
                    label="本月有效推广">
                  </el-table-column>
            			<el-table-column
            			  prop="byjxjs"
            			  label="本月绩效基数"
            			  width="180">
            			</el-table-column>
            			<el-table-column
            			  prop="bytxje"
            			  label="本月提现金额">
            			</el-table-column>
                </el-table>
          </template>
        </el-table-column>
        <el-table-column width="60px" label="ID">
          <template scope="props">
            {{ props.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="兼职编号" prop="number"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column prop="created" label="注册日期"></el-table-column>

        <el-table-column prop="ljtgs" label="累计提交推广"></el-table-column>

        <el-table-column prop="yxtgs" label="累计有效推广"></el-table-column>
        <el-table-column prop="ljzyj" label="累计总业绩"></el-table-column>

        <el-table-column prop="txje" label="累计提现(￥)"></el-table-column>
        <el-table-column prop="dqtx" label="当前提现(￥)"></el-table-column>
        <el-table-column prop="dqye" label="当前余额(￥)"></el-table-column>
      </el-table>
      <div style="float: right;margin: 20px 30px;">
        <el-button @click="exportExcel" type="primary">导出Excel</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import { request } from '@/network/request';
import { baseURL } from '@/network/baseURL';
import axios from 'axios';
export default {
  name: 'list',
  props: ['listArr', 'showDiv', 'performanceTow', 'parmasPer'],
  data() {
    return {
      baseURL: baseURL,
      tempListArr: this.listArr,
      visible: false,
      centerDialogVisible: false,
      imgUrl: '',
      imgName:'',
      id:'',
      index:'',
      checkVal:[],
      checkeds:true,
      frist:0,
      mid:0
    };
  },
  methods: {
    // 导出excel
    exportExcel() {
     const name =  this.parmasPer.name;
     const number =  this.parmasPer.number;
     const sort =  this.parmasPer.sort;
     const txje_max =  this.parmasPer.txje_max;
     const txje_min =  this.parmasPer.txje_min;
     const yxtgs_max =  this.parmasPer.yxtgs_max;
     const yxtgs_min =  this.parmasPer.yxtgs_min;
      window.location.href = 'https://vx.eaglesell.com.cn/index.php/admin/Publicoperate/excel?number='+number+'&name='+name+'&sort='+sort+'&txje_max='+txje_max+'&txje_min='+txje_min+'&yxtgs_max='+yxtgs_max+'&yxtgs_min='+yxtgs_min+'';
    },
    // 一键通过 或拒绝
    allBy(status) {
       let list = [];
       let arr = this.checkVal;

       for(let i = 0; i < arr.length; i++) {
         let obj = {mid:arr[i],status:status};
         list.push(obj)
       }
       if(list.length == 0) {
         alert('请先选中再通过或拒绝');
         return;
       }
       this.axios(list)
    },
    // 一键提交
    allBtn() {
       let checkDom = this.$refs.className.getElementsByClassName('radiosTwo');
       let list = [];
       for(let i in checkDom){
         if(checkDom[i].checked) {
           let mid = checkDom[i].getAttribute("data-mid");
           let status = checkDom[i].value;
           let obj = {status, mid};
            list.push(obj);
         }
       }

       if(list.length == 0) {
         alert('请先选中再提交');
         return;
       }
      this.axios(list)
    },
    // 单个通过 或拒绝
    oneBy(status, mid) {
      let list = [{mid, status}];
      this.axios(list)
    },
    // 请求封装
    axios(list) {
      request({
        url:'/admin/Smallprogram/merchantExamine',
        method:'post',
        data:{
          list
        }
      }).then(res => {
        if(res.error == 0) {
          this.$emit('tempEvent',0)
        }
        alert(res.message)
      })
    },

    nihao() {
        console.log(this.checkVal)
    },
    allCheck() {
       let checkDom = this.$refs.className.getElementsByClassName('checkInput');
        for(let i = 0; i<checkDom.length; i++) {

          if(this.checkeds) {
            this.checkVal.push(checkDom[i].value)
            checkDom[i].checked = true
          }else {
            checkDom[i].checked = false
            this.checkVal = [];
          }

        }

        this.checkeds = !this.checkeds;
    },
    // 复选变单选
    radiosCheck(obj, mid) {
      let arr=this.$refs.className.getElementsByClassName(mid);
      if(this.frist == obj && this.mid == mid) {
        arr[0].checked = false;
        arr[1].checked = false;
        obj = 0;
      }else {
        if(obj == 1) {
          arr[0].checked = true;
          arr[1].checked = false;
        }else if(obj == 2) {
          arr[0].checked = false;
          arr[1].checked = true;
        }


      }

      this.frist = obj;
      this.mid = mid;
             
    },
    // 已打款确定
    determine() {
      request({
        url:'/admin/Smallprogram/examine',
        method:'post',
        data:{
          id:this.id,
          voucher:this.imgUrl
        }
      }).then(res => {
        this.centerDialogVisible = false;
        if(res.error == 0) {
          this.tempListArr[this.index].status = 1;
        }
          alert(res.message)
      })

    },
    // input file 上传文件事件
    inputClicks() {
      this.$refs.inputClick.click();
    },
    // 上传图片
    changeImage(e) {
      let file = e.target.files[0];
      this.imgName = file.name;
      let formData = new FormData();
      formData.append('images', file);
      axios.post('https://vx.eaglesell.com.cn/index.php/admin/PublicOperate/uploadimg', formData).then(res => {
        this.imgUrl =  res.data.data[0]
      });
    },
    // 查看凭证
    visiblea(url) {
      this.imgUrl = url || '';
      this.visible = true;
    },
    // 上传凭证
    examineBtn(id, index) {
      this.centerDialogVisible = true;
      this.id = id;
      this.index = index;
    },
    // 临时接口
    tempClick(mid, status, type, index) {
      request({
        url: '/admin/Smallprogram/examinetest',
        method: 'post',
        data: {
          mid,
          type,
          status
        }
      }).then(res => {
        alert(res.message);
        if (type == 2) {
          this.tempListArr[index].isreg = 1;
        } else {
          this.tempListArr[index].isrelease = 1;
        }
      });
    },
    //基本资料-- 冻结  激活
    freeze(uid, status, index) {
      let sta = status == 0 ? 1 : 0;
      request({
        url: '/admin/Smallprogram/changeStatus',
        method: 'post',
        data: {
          uid
        }
      }).then(res => {
        alert(res.message);
        this.tempListArr[index].status = sta;
      });
    },
    // 审核状态   1 通过   2 拒绝
    by(mid, status, index) {
      request({
        url: '/admin/Smallprogram/merchantExamine',
        method: 'post',
        data: {
          mid,
          status
        }
      }).then(res => {
        alert(res.message);
        this.tempListArr[index].status = status;
      });
    }
  },
  watch: {
    listArr: function(val) {
      this.tempListArr = val;
    }
  }
};
</script>

<style>
.list_box .el-form-item {
  min-width: 200px;
  margin-bottom: 0;
}

#list .box2 .img_div_box {
  height: 150px;
  width: 250px;
  border: 1px solid #dbdbdb;
  margin-left: 20px;
  margin-bottom: 20px;
  float: left;
}

.el-table tr.expanded {
  background: #dfeefd;
}

.el-table tr td.el-table__expanded-cell {
  background: #f3f8ff;
}

.el-dialog__title {
  color: #333;
  font-size: 14px;
}

.el-table th.is-leaf {
  text-align: center;
}

.el-table .el-table__row td {
  text-align: center;
}


/*
#list .el-button--success {
  background-color: #09bb07;
  border: none;
}

#list .el-button--danger {
  background-color: #ee5858;
  border: none;
} */


</style>
