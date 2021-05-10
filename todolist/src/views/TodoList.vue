<template>
  <div class="container">
    <div class="form-group search-bar">
        <input v-model="textQuery" type="text" class="form-control bg-white box-3d"  placeholder="Tìm kiếm nhanh ghi chú của bạn">
    </div>
    <div class="form-group search-bar row">
        <div class="col-6">
            <label for="title" class="label-for-input font-weight-bold text-left d-block">Tiêu đề</label>
            <input id="title" v-model="formData.title" type="text"  class="form-control bg-white box-3d"  placeholder="Tiêu đề">   
            <div v-if="!formData.title" class="alert alert-warning font-weight-bold text-left d-block mt-1 box-3d" role="alert">
                Xin thêm tiêu đề !
            </div>
        </div>
        <div class="col-6">
            <label class="label-for-input font-weight-bold text-left d-block">Danh mục</label>
            <select v-model="selectedCate" class="custom-select box-3d">
            <option v-for="(item,idx) in categories" :key="idx" :value="item.id">{{item.text}}</option>
            </select> 
            <div v-if="!selectedCate" class="alert alert-warning font-weight-bold text-left d-block mt-1 box-3d" role="alert">
                Xin chọn danh mục !
            </div>
        </div>
        <div class="col-12">
            <label for="content" class="label-for-input font-weight-bold text-left d-block">Nội dung</label>
            <textarea id="content" v-model="formData.content" class="form-control bg-white box-3d"  rows="3" placeholder="Nội dung"></textarea>  
            <div v-if="!formData.content" class="alert alert-warning font-weight-bold text-left d-block mt-1 box-3d" role="alert">
                Xin nhập nội dung !
            </div>
        </div>
        <div class="col-12 mt-3">
            <button type="button" class="btn btn-success w-100" @click="handleSubmit" :disabled="loadingBtn">Thêm mới</button>
        </div>
        <div >
            <GroupByCate  :categories="categories" :handle-filter-by-group="handleFilterByGroup"/>
        </div>
        <div class="TaskList col-12 mt-3">
            <TaskList  :todo-list="filterGroup || handleFilterTaskByText || todoList" :categories="categories" :handle-update-task="handleUpdateTask" />
            
        </div>
    </div>
  </div>
</template>

<script>
    import TaskList from '@/components/Shared/TaskList';
    import GroupByCate from '@/components/Shared/GroupByCate';
    export default {
        data() {
            return {
                categories: [
                    {
                        id: 1,
                        text: 'Không có'
                    },
                    {
                        id: 2,
                        text: 'Sở thích'
                    },
                    {
                        id: 3,
                        text: 'Công việc'
                    },
                    {
                        id: 4,
                        text: 'Du lịch'
                    },
                ],
                statusList: [
                    {
                        id: 1,
                        text: 'Mới'
                    },
                    {
                        id: 2,
                        text: 'Đã Xong'
                    },
                    {
                        id: 3,
                        text: 'Hủy'
                    },
                ],
                formData: {},
                selectedCate: null,
                loadingBtn: false,
                todoList: [],
                textQuery: "",
                refQuery: null,
                filterList: null,
                filterGroup: null,
            }
        },
        components: {
            TaskList,                 // TaskList : TaskList <== viết đầy đủ
            GroupByCate
        },
        computed: {
            handleFilterTaskByText: function() {          
                let _filterList = null;
                
                if(!this.textQuery) {
                    return _filterList;                    
                } ; 
                // if(this.filterGroup){
                //     //console.log("whp");
                //     _filterList = [...this.filterGroup.filter(o => {
                //         o.title.toLowerCase();
                //         this.textQuery.toLowerCase();
                //         return o.title.includes(this.textQuery);                
                //     })];                    
                // } else {             
                //     _filterList = [...this.todoList.filter(o => {
                //         o.title.toLowerCase();
                //         this.textQuery.toLowerCase();
                //         return o.title.includes(this.textQuery);                
                //     })];
                // };   
                _filterList = [...this.todoList.filter(o => {
                        o.title.toLowerCase();
                        this.textQuery.toLowerCase();
                        return o.title.includes(this.textQuery);                
                    })];                                         
                return _filterList;                
            },
            
        },

        watch : {
            textQuery () {
                
                if(!this.refQuery) {
                    clearTimeout(this.refQuery);
                    
                };
                this.refQuery = setTimeout(() => {                    
                    //this.handleFilterTaskByText(this.textQuery); // khi function này được thực thi xong, các câu lệnh phía dưới mới được thực hiện
                    
                    this.handleFilterTaskByText;                    
                    this.refQuery = null;
                    
                },700);               
                
            },
        },
        methods: {
            handleSubmit () {
                this.loadingBtn = true;
                
                let params = {...this.formData};
                params.category = this.selectedCate;
                params.created_at = new Date();
                params.status = 1;
                params.id = new Date().getTime();
                if (!params.title || !params.category || !params.content ) {
                    this.loadingBtn = false;
                    return;
                }
                setTimeout(()=>{
                    this.loadingBtn = false;
                    let randomResponse = Math.floor(Math.random()*10 )% 2;
                    if(randomResponse) {
                        this.resetForm();
                        this.todoList.push(params);
                        
                        console.log("call api thành công.");
                    } else {
                        console.log("call api thất bại.");
                    }                    
                },1000);
                
            },
            resetForm () {
                this.formData = {};
                this.selectedCate = null;
            },
            handleUpdateTask(type, payload) {
                switch (type) {
                    case "finish":
                        this.handleFinishTask(payload);
                        break;
                    case "redo":
                        this.handleRedoTask(payload);
                        break;
                    case "remove":
                        this.handleRemoveTask(payload);
                        break;
                    default:
                        break;
                }
            },
            handleFinishTask(_task) {
                if(!_task) {return;}
                let ar1 = [...this.todoList];
                ar1.forEach(o => {
                if(o.id === _task.id){o.status = 2;}
                });
                this.todoList = [...ar1];
            },
            handleRedoTask(_task) {
                if(!_task) {return;}
                let ar1 = [...this.todoList];
                ar1.forEach(o => {
                if(o.id === _task.id){o.status = 1;}
                });
                this.todoList = [...ar1];
            },
            handleRemoveTask(_task) {
                if(!_task) {return;}
                this.todoList = [...this.todoList.filter(o => {return o.id !== _task.id}),];

            },
            // handleFilterTaskByText(_text) {
            //     // console.log("trigger");
            //     if(!_text) {
            //         this.filterList = null;
            //         return;
            //     }
            //     this.filterList = [...this.todoList.filter(o => {
            //         return o.title.includes(_text);
            //     })];
                
            // },
            handleFilterByGroup(_group) {    
                            
                if(_group.length === 0){
                    this.filterGroup = null;                    
                    return;
                }
                
                this.filterGroup = [...this.todoList.filter(o=> {
                    
                    return o.title.includes(this.textQuery) && _group.includes(o.category);
                })];
                
            },
            
        }
    }
</script>

<style>
.box-3d {
    box-shadow: 1px 2px 1px rgb(163, 160, 160);
}
.label-for-input {
    font-size: 18px;
}
.text-left {
    text-align: left;
}
</style>