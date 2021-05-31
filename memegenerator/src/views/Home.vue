<template>
  <div class="home masonry">
    <div v-for="(i,index) in imgs" :key=index class="grid" >
      <img class="img" :src=i alt="">
    </div>           
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {  
  },
  data() {
    return {
      listImage: null,
      onProgress: false,
      imgs: [],
    };
  },
  created() {    
      //console.log(process.env.VUE_APP_BASE_URL);
    this.getAllImage();
  },
  methods: {
    async getAllImage() {
      this.onProgress = true;
      const response = await this.$api.image.getAll();      
      for (const idx in response.data.data.memes) {

        this.imgs.push(response.data.data.memes[idx].url);
      }
      //console.log(this.imgs);
    }
  }
};
</script>




