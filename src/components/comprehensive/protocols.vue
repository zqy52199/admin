<template>
  <div id="protocols">
    <div class="protocols_title">
        <span @click="languageClick(index)" :style="languageIndex == index ? 'border:1px solid #2591ff;color:#2591ff' : '' " class="protocols_title_span" v-for="(item, index) in language">{{item}}</span>
    </div>
    <div class="protocols_box">
      <!-- 中文 -->
      <div v-show="languageIndex == 0">
          <Editor />
      </div>
      <!-- 英文 -->
      <div v-show="languageIndex == 1">
        <Editor />
      </div>
      <!-- 西文 -->
      <div v-show="languageIndex == 2">
        <Editor />
      </div>
    </div>
  </div>
</template>

<script>
  import Editor from '@/components/Editor'
  export default {
    name:"protocols",
    data() {
      return {
        language:['中文', '英文', '西文'],
        languageIndex:'0'
      }
    },
    methods: {
      languageClick(i) {
        this.languageIndex = i;
      }
    },
    components: {
      Editor
    }
  }
</script>

<style>
  #protocols {
    padding: 20px;
  }

  .protocols_title {
    text-align: center;
    height: 50px;
  }

  .protocols_title_span {
    padding: 5px 20px;
    border: 1px solid #DBDBDB;
    cursor: pointer;
  }
</style>
