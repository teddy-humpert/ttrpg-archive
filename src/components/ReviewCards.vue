<template>
  <section id="review-cards">
    <h3>Reviews ({{ reviewsForSingleBook.length }})</h3>
    <article
      class="review-card"
      v-for="review in reviewsForSingleBook"
      :key="review.id"
    >
      <hr size="2" color="#f1faee" align-self: center />
      <div class="review-text">{{ review.body }}</div>
      <div class="review-info">
        <div class="review-text">{{ review.user }}</div>
        <div>+</div>
        <div class="location">{{ review.location }}</div>
        <div>+</div>
        <div class="stars">{{ review.stars }} stars</div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "ReviewCards",
  props: {
    reviews: [],
    book: {},
  },
  computed: {
    reviewsForSingleBook: function () {
      let currentBookId = this.book.bookId;
      let singleBookReviews = this.reviews.filter(function (review) {
        return review.bookId == currentBookId;
      });

      return singleBookReviews;
    },
  },
};
</script>

<style scoped>
#review-cards {
  padding: 0 20px;
  background-color: #1d3557;
  color: #f1faee;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.review-info {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-evenly;
}
</style>