/* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <div class="container-fluid">
      <h1 v-show="onLoadingPage">Loading...</h1>
      <Pagination
        :handle-change-page="handleChangePage"
        :handle-change-per-pages="handleChangePerPage"
        :pagination="pagination"
      ></Pagination>
      <!-- <div class="row">
        <div
          v-for="image in handlePaginationImage()"
          :key="image.id"
          class="col-3"
        >
          <img
            :src="image.url"
            :alt="image.name"
            class="w-100"
            @click="handleSelectImage(image)"
          />
        </div>
      </div> -->
      <div class="row">
        <div class="col-sm d-flex flex-column">
          <div v-for="image in listImage1" :key="image.id" class="py-2">
            <img
              :src="image.url"
              :alt="image.name"
              class="w-100"
              @click="handleSelectImage(image)"
            />
          </div>
        </div>
        <div class="col-sm d-flex flex-column">
          <div v-for="image in listImage2" :key="image.id" class="py-2">
            <img
              :src="image.url"
              :alt="image.name"
              class="w-100"
              @click="handleSelectImage(image)"
            />
          </div>
        </div>
        <div class="col-sm d-flex flex-column">
          <div v-for="image in listImage3" :key="image.id" class="py-2">
            <img
              :src="image.url"
              :alt="image.name"
              class="w-100"
              @click="handleSelectImage(image)"
            />
          </div>
        </div>
        <div class="col-sm d-flex flex-column">
          <div v-for="image in listImage4" :key="image.id" class="py-2">
            <img
              :src="image.url"
              :alt="image.name"
              class="w-100"
              @click="handleSelectImage(image)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@/components/Shared";
export default {
  name: "Home",
  components: {
    Pagination,
  },
  data() {
    return {
      listImage: [],
      listImage1: [],
      listImage2: [],
      listImage3: [],
      listImage4: [],
      onProgress: false,
      onLoadingPage: false,
      pagination: {
        count: 100,
        current_page: 1,
        links: {},
        per_page: 5,
        total: 100,
        total_pages: 20,
      },
    };
  },
  watch: {
    pagination: {
      deep: true,
      handler() {
        this.handleMasonryImage();
      },
    },
  },
  created() {
    //console.log(process.env.VUE_APP_BASE_URL);
    this.getAllImage();
    this.$store.dispatch("getAllImage");
  },

  methods: {
    async getAllImage() {
      this.onProgress = true;
      this.onLoadingPage = true;
      const response = await this.$api.image.getAll();
      this.onLoadingPage = false;
      if (!response) {
        return;
      }
      try {
        // if(!response.success){
        //   return;
        // }
        this.listImage = [...response.data.data.memes];
        this.handleMasonryImage();
        //console.log(this.listImage);
      } catch (error) {
        console.log(error);
      }
    },
    handleNavigateTo(_url) {
      this.$router.push(_url);
    },
    handleSelectImage(_image) {
      this.handleNavigateTo(`/image/${_image.id}`);
    },
    handleChangePerPage(_val) {
      //console.log(_val);
      this.pagination = {
        ...this.pagination,
        per_page: _val,
        current_page: 1,
        page: 1,
        total_pages: 100 / _val,
      };
    },
    handleChangePage(_val) {
      //console.log(_val);
      this.pagination = {
        ...this.pagination,
        current_page: _val,
        page: _val,
      };
    },
    handleMasonryImage() {
      this.listImage1 = [];
      this.listImage2 = [];
      this.listImage3 = [];
      this.listImage4 = [];
      //console.log(this.listImage, "listImage");
      const arr = this.listImage.slice(
        this.pagination.current_page * this.pagination.per_page -
          this.pagination.per_page,
        this.pagination.current_page * this.pagination.per_page
      );
      //console.log(arr, "arr");
      const _this = this;
      for (let i = 0; i < arr.length; i++) {
        // if (i === 0 || i === 4 || i === 8) {
        //   _this.listImage1.push(arr[i]);
        // } else if (i === 1 || i === 5 || i === 9) {
        //   _this.listImage2.push(arr[i]);
        // } else if (i === 2 || i === 6 || i === 10) {
        //   _this.listImage3.push(arr[i]);
        // } else {
        //   _this.listImage4.push(arr[i]);
        // }
        i === 0 || i === 4 || i === 8
          ? _this.listImage1.push(arr[i])
          : i === 1 || i === 5 || i === 9
          ? _this.listImage2.push(arr[i])
          : i === 2 || i === 6 || i === 10
          ? _this.listImage3.push(arr[i])
          : _this.listImage4.push(arr[i]);
      }
    },

    // handlePaginationImage() {

    //   return this.listImage.slice(
    //     this.pagination.current_page * this.pagination.per_page -
    //       this.pagination.per_page,
    //     this.pagination.current_page * this.pagination.per_page
    //   );
    // },
  },
};
</script>
