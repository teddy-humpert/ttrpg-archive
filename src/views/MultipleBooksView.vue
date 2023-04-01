<template>
  <div id="books-view">
    <h1 id="books-title">Books</h1>
    <book-cards :books="books ? books : bookData" />
  </div>
</template>

<script>
import BookCards from "../components/BookCards.vue";
import BookService from "../services/BookService";

export default {
  name: "MultipleBooksView",
  components: {
    BookCards,
  },
  props: {
    books: [],
  },
  data() {
    return {
      bookData: []
    };
  },
  methods: {
    getAllBooks() {
      return BookService.getBooks();
    },
  },
  created() {
    if (!this.books) {
      this.bookData = this.getAllBooks();
    }
  },
};
</script>

<style scoped>
#books-title {
  text-align: center;
}
</style>