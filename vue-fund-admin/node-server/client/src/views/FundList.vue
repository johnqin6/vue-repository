<template>
  <div class="fillContainer">
    <el-form :inline="true" ref="searchFrom" :model="searchData">
      <el-form-item label="按照时间筛选:">
        <el-date-picker
        v-model="searchData.startTime"
        type="datetime"
        placeholder="选择开始时间"
        >
        </el-date-picker>
        --
        <el-date-picker
        v-model="searchData.endTime"
        type="datetime"
        placeholder="选择结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
          <el-button type='primary' size="search" @click="handleSearch()">筛选</el-button>
      </el-form-item>
      <el-form-item class="btnRight" v-if="user.identity === 'manager'">
        <el-button type="primary" size="small" @click="handleAdd()">添加</el-button>
      </el-form-item>
    </el-form>
    <div class="table_container">
      <el-table
      :data="tableData"
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
        label="创建时间"
        width="200">
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
            <span style="color: #00d053">+{{ scope.row.income }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="expend"
        align="center"
        label="支出">
          <template slot-scope="scope">
            <span style="color: #f56767">-{{ scope.row.expend }}</span>
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
      <el-row>
        <el-col :span='24'>
            <div class="pagination">
              <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="paginations.pageIndex"
              :page-sizes="paginations.pageSizes"
              :page-size="paginations.pageSize"
              :layout="paginations.layout"
              :total="paginations.total">
              </el-pagination>
            </div>
        </el-col>
      </el-row>
    </div>
    <from-dialog :dialog="dialog" :formData="formData" @update="getProfile"></from-dialog>
  </div>
</template>

<script>
import FromDialog from '../components/FromDialog'
import moment from 'moment'

export default {
  name: 'fund-list',
  data() {
    return {
      allTableData: [],
      tableData: [],
      formData: {},
      searchData: {
        startTime: '',
        endTime: ''
      },
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
      },
      paginations: {
        pageIndex: 1,
        pageSize: 5,
        pageSizes: [5, 10, 20, 30],
        layout:'total,sizes,prev,pager,next,jumper', // 翻页属性
        total: 0
      }
    }
  },
  created() {
    this.getProfile();
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    getProfile() {
      this.$axios.get('/api/profiles')
      .then(res => {
        this.allTableData = res.data
        this.paginations.total = this.allTableData.length;
        if (this.allTableData && this.allTableData.length > 0) {
          this.allTableData = this.allTableData.map(item => {
            item.createOn = moment(item.createOn).format('YYYY-MM-DD hh:mm')
            return item
          })
        }
        this.setPaginationData();
      })
      .catch(err => console.log(err))
    },
    // 新增数据
    handleAdd() {
      this.dialog = {
        show: true,
        title: '添加资金管理信息',
        option: 'create'
      };
      this.formData = {...this.formObj};
    },
    // 编辑数据
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
    // 删除数据
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
    },
    handleSearch() {
      const startTime = this.searchData.startTime.getTime();
      const endTime = this.searchData.endTime.getTime();
      const tableData = this.allTableData.filter(item => {
        let createOn = new Date(item.createOn)
        let time = createOn.getTime()
        return time >= startTime && time <= endTime
      })
      this.paginations.total = tableData.length;
      this.setPaginationData(tableData);
    },
    handleSizeChange(val) {
      this.paginations.pageSize = val;
      this.setPaginationData();
    },
    handleCurrentChange(val) {
      this.paginations.pageIndex = val;
      this.setPaginationData();
    },
    setPaginationData(tableData) {
      let allTableData = []
      if (tableData) {
        allTableData = tableData
      } else {
        allTableData = this.allTableData
      }
      const pageIndex = this.paginations.pageIndex;
      const pageSize = this.paginations.pageSize;
      this.tableData = allTableData.filter((item, index) => {
        if ((index >= (pageIndex - 1) * pageSize) &&  (index < pageIndex * pageSize)) {
          return item;
        }
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

