<template>
  <div>
    <BookInfo :info='info'></BookInfo>
  </div>
</template>

<script>
import { get, post, showModel } from "@/util";
import BookInfo from "@/components/BookInfo";

export default {
  components: {
    BookInfo
  },
  data() {
    return {
      bookid: "",
      info: {}
    };
  },
  methods: {
    async getDetail() {
      const info = await get("/weapp/bookdetail", { id: this.bookid });
      wx.setNavigationBarTitle({
        title: info.title
      });
      this.info = info;
    }
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getDetail();
  }
};
</script>

<style>
</style>

