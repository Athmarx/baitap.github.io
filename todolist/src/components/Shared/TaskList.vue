<template>
  <div class="w-100 row mx-0 ">
    <div v-for="task in todoList" :key="task.id" class="alert col-xl-3 col-lg-4 col-md-6" :class="task.status === 1 ? 'alert-primary' : 'alert-success'" role="alert" >
        <p class="title font-weight-bold mb-2">{{task.title}} - {{getCateById(task.category)}}</p>
        <span class="timer">{{parseDate(task.created_at)}}</span>
        <p class="content-p mt-3">{{task.content}}</p>
        <div class="button-group">
          <button type="button" v-if="task.status === 1" class="btn btn-success" @click="handleUpdate('finish',task)">Hoàn Thành</button>
          <button type="button" v-else-if="task.status === 2" class="btn btn-success" @click="handleUpdate('redo',task)">Đặt Lại</button>
          <button type="button" class="btn btn-danger ml-3" @click="handleUpdate('remove',task)">Xóa</button>
        </div>
    </div>
  </div>
</template>

<script>
import { tDate } from "validation_t/src";
export default {
    props: ['todoList','categories','handleUpdateTask'],
    data () {
        return {
        }
    },
    methods: {
      parseDate(_date) {
        let txt = "";
        let customDate = tDate.formatDateCustomize(_date);
        txt = `${customDate.day}, ${customDate.dd} - ${customDate.MMM}, ${customDate.yyyy}`;
        return txt;
      },
      getCateById(_cateId) {
        return this.categories.filter(o => {
          return o.id === _cateId;
        }).length ? this.categories.filter(o => {
          return o.id === _cateId;
          })[0].text : "Không có danh mục";
      },
      handleUpdate(type, payload) {
        this.handleUpdateTask(type, payload);
      },

    },

}
</script>

<style>

</style>