<template>
  <div class="demo demo-button">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt10">
      <plh-table-form
        ref="tableForm"
        v-model="tableData"
        :columns="columns"
        :size="params.size"
        :limitNum="params.limitNum"
        :disabled="params.disabled"
        :showBtn="params.showBtn"
        @input="handleInput"
      ></plh-table-form>
    </div>
    <div class="mt10">
      <plh-button type="primary" @click="handleClick">提交</plh-button>
    </div>
  </div>
</template>
<script>
import { searchList } from './searchList'
export default {
  name: 'DemoTableFormBase',
  data() {
    const options = [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' }
    ]
    return {
      params: {
        size: 'medium',
        limitNum: 6,
        disabled: false,
        showBtn: true
      },
      searchList: [...searchList],
      tableData: [{ input: '12', disabled: true, select: '1', name: '刘备' }],
      columns: [
        {
          tag: 'el-input',
          title: '输入框',
          key: 'input',
          required: true,
          rules: [
            { required: true, message: '请输入' },
            { max: 6, message: '最大个数不超过6' }
          ]
        },
        {
          tag: 'el-select',
          title: '多选',
          key: 'select',
          children: {
            tag: 'el-option',
            options: [...options]
          }
        },
        {
          tag: 'plh-date-picker',
          title: '时间选择',
          key: 'time'
        },
        {
          tag: 'el-switch',
          title: '开关',
          key: 'switch',
          defaultValue: true
        },
        {
          title: '操作人',
          key: 'name',
          format: (row, column, cellValue, index) => {
            return <span>刘备</span>
          }
        }
      ]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleInput(val) {},
    handleClick() {
      let validate = this.$refs.tableForm.validate()
      if (validate) {
        this.$message.success('通过校验')
      } else {
        this.$message.error('未通过校验')
      }
    }
  }
}
</script>
