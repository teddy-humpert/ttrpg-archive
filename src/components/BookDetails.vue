<template>
  <div id="single-book-info">
    <div id="details-panel">
      <h1 class="name">{{ book.name }}</h1>
      <h2>Details</h2>
      <ul>
        <li v-for="detail in book.details" v-bind:key="detail.id">
          {{ detail.author }}
          {{ detail.artist }}
          {{ detail.publisher }}
          {{ detail.description }}
        </li>
      </ul>
    </div>
    <div id="button-bar">
      <button type="button" v-on:click="goToBookPage">
        See Publisher Page
      </button>
      <button type="button" v-on:click="addToFavorites">
        Add to My Favorites
      </button>
    </div>
    <div class="book-image">
      <img :src="book.imageName" class="cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  methods: {
    addToFavorites() {
      this.$store.commit(
        "SET_MESSAGE",
        `Added '${this.book.name}' to favorites`
      );
    },
    goToBookPage() {
      window.open(this.book.publisherUrl, "_blank");
    },
  },

  props: {
    book: {},
  },
};
</script>

<style scoped>
#single-book-info {
  box-shadow: 0 5px 5px #1d3557;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-areas:
    ". details image"
    ". details image"
    ". buttons image";
}

#button-bar {
  grid-area: buttons;
  height: 55px;
  display: flex;
  flex-direction: row;
}

button {
  font-size: 1.1em;
  display: inline-block;
  padding: 10px 20px;
  margin-right: 8px;
  text-align: center;
  text-decoration: none;
  color: #f1faee;
  background-color: #1d3557;
  border: 0;
  outline: none;
}

button:hover {
  background-color: #457b9d;
}

#details-panel {
  height: 100%;
  grid-area: details;
}

.book-image {
  grid-area: image;
}

.name {
  grid-area: title;
  font-size: 3rem;
  font-weight: 400;
}

.cover {
  max-width: 100%;
  height: 100%;
}
</style>