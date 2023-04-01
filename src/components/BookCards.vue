<template>
  <section id="book-cards">
    <article class="book-card" v-for="book in books" :key="book.bookId" @click="details(book.bookId)">
      <div class="book-image">
        <img class="cover" :src="book.imageName" />
      </div>
      <div class="name">{{ book.name }}</div>
    </article>
  </section>
</template>

<script>
export default {
  name: "BookCards",
  props: {
    books: [],
  },

  methods: {
    details(id) {
      this.$router.push({
        name: "book",
        params: {
          id: id,
          books: this.books,
        },
      });
    },
  },
};
</script>

<style scoped>
#book-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.book-card {
  display: inline-block;
  width: 325px;
  height: 410px;
  margin: 30px;
  text-align: center;
  font-size: 1.32rem;
  font-weight: bold;
  color: #1d3557;
  box-shadow: 0 4px 7px #1d3557;
  overflow: hidden;
}

.cover {
  object-fit: cover;
  width: 100%;
}
</style>