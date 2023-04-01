<template>
  <div id="single-book-view">
    <book-details :book="this.book"> </book-details>
    <div id="reviews-section">
      <review-section :book="this.book" />
    </div>
  </div>
</template>

<script>
import ReviewSection from "../components/ReviewSection.vue";
import BookDetails from "../components/BookDetails.vue";
import BookService from "../services/BookService";

export default {
  name: "SingleBookView",
  components: {
    BookDetails,
    ReviewSection,
  },

  data() {
    return {
      book: {},
    };
  },

  created() {
    this.book = BookService.getBook([this.$route.params.id]);
  },
};
</script>

<style scoped>
#reviews-title {
  font-size: 2rem;
  font-weight: 500;
  padding-left: 10px;
}
</style>