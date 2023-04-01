<template>
  <div>
    <h1>Find a Book</h1>
    <div id="search-box">
      <button class="icon-button" id="search-button" @click="searchBooks()" tabindex="-1">
        <i class="fa-solid fa-magnifying-glass fa-3x"></i>
      </button>
      <input type="text" name="search-tb" id="search-tb" @keyup.enter="searchBooks()" v-model="searchString" />
    </div>
  </div>
</template>

<script>
import bookService from "../services/BookService";

export default {
  name: "SearchBox",

  props: {
    delay: {
      type: Number,
      default: 1000,
    },
  },

  data() {
    return {
      searchString: "",
    };
  },

  methods: {
    searchBooks() {
      const books = bookService.getBooks();
      let book = books.filter(book => book.name.toLowerCase().includes(this.searchString.toLowerCase()));
      this.$router.push({ name: 'books', params: { books: book } });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5em;
  color: #27612f;
  margin: 0;
}

#search-box {
  display: inline-block;
  background-color: #f1faee;
  opacity: .8;
}

#search-tb {
  font-size: 3em;
  border: none;
  color: #27612f;
}

#search-tb:focus-visible {
  outline: none;
}

#search-button {
  color: #1d3557;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
</style>
