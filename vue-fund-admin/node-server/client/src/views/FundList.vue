<template>
  <div class="fillContainer">
    <el-form :inline="true" ref="searchFrom">
      <el-form-item class="btnRight">
        <el-button type="primary" size="small" @click="handleAdd()">添加</el-button>
      </el-form-item>
    </el-form>
    <div class="table_container">
      <el-table
      :data="allTableData"
      max-height="450"
      stripe
      border
      style="width: 100%">
        <el-table-column
        type="index"
        align="center"
        label="序号"
        width="55">
        </el-table-column>
        <el-table-column
        prop="createOn"
        align="center"
        label="创建时间">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px;">{{ scope.row.createOn }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="type"
        label="收支类型"
        align="center">
        </el-table-column>
        <el-table-column
        prop="descript"
        label="收支描述"
        align="center">
        </el-table-column>
        <el-table-column
        prop="income"
        align="center"
        label="收入">
          <template slot-scope="scope">
            <span style="color: #00d053">{{ scope.row.income }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="expend"
        align="center"
        label="支出">
          <template slot-scope="scope">
            <span style="color: #f56767">{{ scope.row.expend }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="cash"
        align="center"
        label="账户现金">
          <template slot-scope="scope">
            <span style="color: #4db3ff">{{ scope.row.cash }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop='remark'
        label="备注"
        align='center'
        width="220">
        </el-table-column>
        <el-table-column label="操作" prop="operation" fixed="right" align="center" width="320">
            <template slot-scope="scope">
                <el-button
                type='primary'
                icon='edit'
                size="small"
                @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                size="small"
                icon='delete'
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
    <from-dialog :dialog="dialog" :formData="formData" @update="getProfile"></from-dialog>
  </div>
</template>

<script>
import FromDialog from '../components/FromDialog'

export default {
  name: 'fund-list',
  data() {
    return {
      allTableData: [],
      formData: {},
      formObj: {
        type:'',
        descript:'',
        incode:'',
        expend:'',
        cash:'',
        remark:'',
        id:''
      },
      dialog: {
        show:false,
        title:'',
        option: 'edit'
      }
    }
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      this.$axios.get('/api/profiles')
      .then(res => {
        this.allTableData = res.data
      })
      .catch(err => console.log(err))
    },
    handleAdd() {
      this.dialog = {
        show: true,
        title: '添加资金管理信息',
        option: 'create'
      };
      this.formData = {...this.formObj};
    },
    handleEdit(row) {
      this.dialog = {
        show: true,
        title: '编辑资金管理信息',
        option: 'edit'
      };
      this.formData = {
        ...row,
        id: row._id
      };
    },
    handleDelete(row) {
      this.$axios.delete(`/api/profiles/delete/${row._id}`)
      .then(res => {
        this.$message({
          type: 'success',
          message: res.message
        })
        this.getProfile()
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: res
        })
      })
    }
  },
  components: {
    FromDialog
  }
};
</script>


<style scoped>
.fillContainer{
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box
}
.btnRight{
    float: right;
}
.pagination{
    text-align: right;
    margin-top: 10px;
}
</style>

