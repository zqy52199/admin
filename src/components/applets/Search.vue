<template>
  <div id="search">

    <div class='search_box1' v-if="showInput == 1">

       <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-row>
           <el-col :span="8">
             <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>

           </el-col>
           <el-col :span="8">
             <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>

           </el-col>
           <div style="float: right;">
             <el-form-item><el-button size="mini" type="primary" @click="onSubmit(1)">查询</el-button></el-form-item>
             <el-form-item><el-button size="mini" type="warning" @click="onReset(1)" native-type="reset" >重置</el-button></el-form-item>
           </div>
         </el-row>
       </el-form>
    </div>
    <div class='search_box1 laji' v-if="showInput == 2">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="企业名称:"><el-input style="width: 200px;" v-model="formInline.companyName" placeholder="企业名称"></el-input></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="状态:">
            <el-select v-model="formInline.status" filterable placeholder="请选择">
              <el-option label="请选择" value=""></el-option>
              <el-option label="待审核" value="0"></el-option>
              <el-option label="已通过" value="1"></el-option>
              <el-option label="已拒绝" value="2"></el-option>
            </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item class="shenTime" label="申请时间:">
              <el-date-picker class="row_input" v-model="formInline.startTime" align="right" type="date" placeholder="开始日期" :picker-options="pickerOptions"></el-date-picker>
              -
              <el-date-picker class="row_input" v-model="formInline.endTime" align="right" type="date" placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
            </el-form-item>
          </el-col>
          <div style="float: right;">
            <el-form-item><el-button size="mini" type="primary" @click="onSubmit(2)">查询</el-button></el-form-item>
            <el-form-item><el-button size="mini" type="warning" @click="onReset(2)" native-type="reset">重置</el-button></el-form-item>
          </div>
        </el-row>

      </el-form>
    </div>

    <div class='search_box1' v-if="showInput == 4">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>

          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>

          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="提现方式:">
               <el-select v-model="formInline.payment" filterable placeholder="请选择">
                 <el-option label="请选择" value=""></el-option>
                 <el-option label="银行转账" value="1"></el-option>
                 <el-option label="支付宝" value="2"></el-option>
               </el-select>
             </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="提现金额:">
              <el-input
                style="width: 100px;"
                placeholder="最小价格"
                v-model="formInline.minPrice"
                clearable>
              </el-input>
              -
              <el-input
                style="width: 100px;"
                placeholder="最大价格"
                v-model="formInline.maxPrice"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item class="shenTime" label="申请时间:">
              <el-date-picker class="row_input" v-model="formInline.startTime" align="right" type="date" placeholder="开始日期" :picker-options="pickerOptions"></el-date-picker>
              -
              <el-date-picker class="row_input" v-model="formInline.endTime" align="right" type="date" placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
            </el-form-item>
          </el-col>
          <div style="float: right;">
            <el-form-item><el-button size="mini" type="primary" @click="onSubmit(4)">查询</el-button></el-form-item>
            <el-form-item><el-button size="mini" type="warning" @click="onReset(4)" native-type="reset">重置</el-button></el-form-item>
          </div>
        </el-row>


      </el-form>
    </div>
    <div class='search_box1' v-if="showInput == 5">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>

          </el-col>
          <el-col :span="8">
           <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>

          </el-col>
          <el-col :span="8">
            <el-form-item label="有效推广:">
              <el-input
                style="width: 120px;"
                placeholder="请输入下限值"
                v-model="formInline.startNum"
                clearable>
              </el-input>
              -
              <el-input
                style="width: 120px;"
                placeholder="请输入上限值"
                v-model="formInline.endNum"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item style="margin-right: 50px;" label="提现金额:">
              <el-input
                style="width: 100px;"
                placeholder="最小价格"
                v-model="formInline.minPrice"
                clearable>
              </el-input>
              -
              <el-input
                style="width: 100px;"
                placeholder="最大价格"
                v-model="formInline.maxPrice"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="排序:">
              <el-select v-model="formInline.sorts" filterable placeholder="请选择">
                <el-option label="请选择" value=""></el-option>
                <el-option label="累计提交推广" value="1"></el-option>
                <el-option label="累计有效推广" value="2"></el-option>
                <el-option label="累计提现金额" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <div style="float: right;">
            <el-form-item><el-button size="mini" type="primary" @click="onSubmit(5)">查询</el-button></el-form-item>
            <el-form-item><el-button size="mini" type="warning" @click="onReset(5)" native-type="reset">重置</el-button></el-form-item>
          </div>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {request} from '@/network/request';
export default {
  name: 'search',
  props:['showInput', 'datas', 'count'],
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      // 查询内容
      formInline: {
        // 查询状态：待处理--0   已拒绝--2  已同意--1
        status: '',
        // 查询状态：支付宝--2   银行转账--1
        payment: '',
        // 累计排序: 累计推广--1  累计有效推广--2 累计提现--3
        sorts: '',
        numberId: '',
        companyName: '',
        name: '',
        minPrice: '',
        maxPrice: '',
        startTime: '',
        endTime: '',
        startNum: '',
        endNum: '',
      },
      value: [],
      tempAutoTime: ''
    };
  },
  methods: {
    timeDate(time) {
      const d = new Date(time);
      return d.getTime()/1000;
    },
    onSubmit(id) {
      let url = '';
      let data1 = {};
      let formInline = this.formInline;
      if(id === 1 ){
        url = '/admin/Smallprogram/salesmanList';
        data1 = {
          "name":formInline.name,
          "number":formInline.numberId,
          "count":this.count
        }
      }else if(id === 2){
		  const startTime = this.timeDate(formInline.startTime) || "";
		  const endTime = this.timeDate(formInline.endTime) || "";
        // 商家推广
        url = '/admin/Smallprogram/merchantList';
        data1 = {
          "number":formInline.numberId,        //#兼职编号
          "company":formInline.companyName,       //#公司名称
          "status":formInline.status,    //#经营品类id
          "start":startTime,         //#开始时间（时间戳）
          "end": endTime,
          "count":this.count
        }
      } else if(id === 4){
        // 提现申请
        url = '/admin/Smallprogram/withdrawalsList';
        const startTime = this.timeDate(formInline.startTime) || "";
        const endTime = this.timeDate(formInline.endTime) || "";
        data1 = {
          "number":formInline.numberId,        //#兼职编号
          "name":formInline.name,          //#姓名
          "mode":formInline.payment,          //#提现方式
          "min":formInline.minPrice,           //#最小金额
          "max": formInline.maxPrice,           //#最大金额
          "start":startTime,         //#开始时间（时间戳）
          "end": endTime,        //#结束时间（时间戳）
          "count":this.count
        }
      }else if(id === 5){
        // 业绩
        url = '/admin/Smallprogram/performanceList';
        data1 = {
           "number":formInline.numberId,
            "name":formInline.name,
            "yxtgs_min":formInline.startNum,     //# 有效推广数最小值
            "yxtgs_max":formInline.endNum,     //# 有效推广数最大值
            "txje_min":formInline.minPrice,      //#提现金额最小值
            "txje_max":formInline.maxPrice,       //#提现金额最大值
            "sort":formInline.sorts,        //#排序 1.累计提交推广数  2.累计有效推广数  3.累计提现金额
            "count":this.count
        }
      }
      request({
        url,
        data:data1,
        method:'post'

      }).then(res => {
        this.$emit('searchCon',{data:res.data,nums:res.nums,parmas:data1});
      })
    },
    // 重置
    onReset(e) {
      if(e === 1) {
        this.formInline.name = '';
        this.formInline.numberId = '';
      }else if(e === 2) {
        this.formInline.numberId = '';
        this.formInline.companyName = '';
        this.formInline.startTime = '';
        this.formInline.endTime = '';
        this.formInline.status = ''
        this.value = [];
      }else if(e === 4) {
        this.formInline.numberId = '';        //#兼职编号
        this.formInline.name = '';          //#姓名
        this.formInline.payment = '';          //#提现方式
        this.formInline.minPrice = '';           //#最小金额
        this.formInline.maxPrice = '';           //#最大金额
        this.formInline.startTime = '';        //#开始时间（时间戳）
        this.formInline.endTime = '';          //#结束时间（时间戳）
      }else if(e === 5) {
          this.formInline.numberId = '';
          this.formInline.name = '';
          this.formInline.startNum = '';
          this.formInline.endNum = '';
          this.formInline.minPrice = '';
          this.formInline.maxPrice = '';
          this.formInline.sorts = '';       //#排序 1.累计提交推广数  2.累计有效推广数  3.累计提现金额
      }

      this.onSubmit(e);
    }

  },
  watch: {
    tempAutoTime(val) {
      this.formInline.startTime = val[0];
      this.formInline.endTime = val[1];
    }
  }
};
</script>

<style>
#search {
  margin-top: 20px;
}

#search .el-form-item__label {
  font-size: 12px;
}

#search .el-input__inner {
  font-size: 12px;
}

#search .el-form {
  border-bottom: 1px solid #dbdbdb;
}

#search .el-input {
  height: 40px;
  width: 150px;
}

#search .el-cascader .el-input {
  width: 200px;
}

#search .cascaders .el-input {
  width: 270px;
}

.demonstration {
  padding-right: 8px;
}

#search .el-input__inner {
  height: 30px;
}

#search .demonstration {
  color: #606266;
}


.shenTime .el-date-editor .el-range__icon, .el-date-editor .el-range-separator {
  line-height: 23px;
}

/* #search .el-button--primary {
  background-color: #006ac3;
  border: none;
}

#search .el-button--warning {
  background-color: #1eb86b;
  border: none;
}
 */

</style>
