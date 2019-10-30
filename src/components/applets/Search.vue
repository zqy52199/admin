<template>
  <div id="search">

    <div class='search_box1' v-if="showInput == 1">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
         <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>
         <div style="float: right;">
           <el-form-item><el-button size="small" type="primary" @click="onSubmit">查询</el-button></el-form-item>
           <el-form-item><el-button size="small" type="warning" native-type="reset" @click="onReset">重置</el-button></el-form-item>
         </div>
       </el-form>
    </div>
    <div class='search_box1 laji' v-if="showInput == 2">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
        <el-form-item style="margin-right: 50px;" label="企业名称:"><el-input style="width: 200px;" v-model="formInline.companyName" placeholder="企业名称"></el-input></el-form-item>
        <el-form-item >
          <span class="demonstration">经营品类: </span>
          <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
        </el-form-item>
        <div style="float: right;">
          <el-form-item><el-button size="small" type="primary" @click="onSubmit">查询</el-button></el-form-item>
          <el-form-item><el-button size="small" type="warning" native-type="reset" @click="onReset">重置</el-button></el-form-item>
        </div>
      </el-form>
    </div>
    <div class='search_box1' v-if="showInput == 3">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
        <el-form-item style="margin-right: 50px;" label="企业名称:"><el-input style="width: 200px;" v-model="formInline.companyName" placeholder="企业名称"></el-input></el-form-item>
        <el-form-item label="审核状态:">
          <el-select v-model="formInline.status" filterable placeholder="请选择">
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已拒绝" value="1"></el-option>
            <el-option label="已通过" value="2"></el-option>
          </el-select>
        </el-form-item>
        <div style="float: right;">
          <el-form-item><el-button size="mini" type="primary" @click="onSubmit">查询</el-button></el-form-item>
          <el-form-item><el-button size="mini" type="warning" native-type="reset" @click="onReset">重置</el-button></el-form-item>
        </div>

      </el-form>
    </div>
    <div class='search_box1' v-if="showInput == 4">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
        <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>
        <el-form-item style="margin-right: 50px;" label="提现方式:">
          <el-select v-model="formInline.payment" filterable placeholder="请选择">
            <el-option label="支付宝" value="0"></el-option>
            <el-option label="银行转账" value="1"></el-option>
          </el-select>
        </el-form-item>
        <div style="display: inline-block;">
          <el-form-item style="margin-right: 50px;" label="提现金额:">
            <el-input
              style="width: 120px;"
              placeholder="最小价格"
              v-model="formInline.minPrice"
              clearable>
            </el-input>
            -
            <el-input
              style="width: 120px;"
              placeholder="最大价格"
              v-model="formInline.maxPrice"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item class="shenTime" label="申请时间:">
                <el-date-picker
                      v-model="tempAutoTime"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
          </el-form-item>
        </div>
        <div style="float: right;">
          <el-form-item><el-button size="mini" type="primary" @click="onSubmit">查询</el-button></el-form-item>
          <el-form-item><el-button size="mini" type="warning" native-type="reset" @click="onReset">重置</el-button></el-form-item>
        </div>

      </el-form>
    </div>
    <div class='search_box1' v-if="showInput == 5">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="margin-right: 50px;" label="兼职编号:"><el-input v-model="formInline.numberId" placeholder="兼职编号"></el-input></el-form-item>
        <el-form-item style="margin-right: 50px;" label="姓名:"><el-input v-model="formInline.name" placeholder="姓名"></el-input></el-form-item>
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
        <div style="display: inline-block;">
          <el-form-item style="margin-right: 50px;" label="提现金额:">
            <el-input
              style="width: 120px;"
              placeholder="最小价格"
              v-model="formInline.minPrice"
              clearable>
            </el-input>
            -
            <el-input
              style="width: 120px;"
              placeholder="最大价格"
              v-model="formInline.maxPrice"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="排序:">
            <el-select v-model="formInline.sorts" filterable placeholder="请选择">
              <el-option label="累计提交推广" value="0"></el-option>
              <el-option label="累计有效推广" value="1"></el-option>
              <el-option label="累计提现金额" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div style="float: right;">
          <el-form-item><el-button size="mini" type="primary" @click="onSubmit">查询</el-button></el-form-item>
          <el-form-item><el-button size="mini" type="warning" native-type="reset" @click="onReset">重置</el-button></el-form-item>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props:['showInput'],
  data() {
    return {
      // 查询内容
      formInline: {
        // 查询状态：待处理--0   已拒绝--1  已同意--2
        status: '0',
        // 查询状态：支付宝--0   银行转账--1
        payment: '0',
        // 累计排序: 累计推广--0  累计有效推广--1 累计提现--2
        sorts: '0',
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
      tempAutoTime: '',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    onReset() {
      console.log('onReset!');
    },
    handleChange(value) {
      console.log(value);
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

.demonstration {
  padding-right: 8px;
}

#search .el-input__inner {
  height: 30px;
}


.shenTime .el-date-editor .el-range__icon, .el-date-editor .el-range-separator {
  line-height: 23px;
}



</style>
