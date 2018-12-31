<template>
  <div>
    <Card
      :key='book.id'
      v-for="book in books"
      :book='book'
    ></Card>
  </div>
</template>

<script>
import { get } from "@/util";
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    async getList() {
      const books = await get("/weapp/booklist");
      console.log(books);
      this.books = books.list;
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style>
</style>
