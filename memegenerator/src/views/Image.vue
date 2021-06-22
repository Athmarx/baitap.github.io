<template>
  <div>
    <img v-if="matchImage" :src="matchImage.url" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentParams: null,
      matchImage: null,
    };
  },
  computed: {
    ...mapState({
      fakeListDb: (state) => state.image,
    }),
  },
  created() {
    this.currentParams = this.$route.params;
  },
  watch: {
    currentParams: {
      deep: true,
      handler() {
        if (this.currentParams) {
          const matchImg = this.fakeListDb.filter(
            (o) => o.id === this.currentParams.id
          );
          matchImg.length
            ? (() => {
                this.matchImage = matchImg[0];
              })()
            : (() => {
                alert("Không có ảnh được chọn");
                this.$router.push("/");
              })();
        }
      },
    },
  },
  methods: {},
};
</script>

<style></style>
