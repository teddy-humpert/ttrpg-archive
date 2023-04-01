<template>
  <div id="home">
    <section id="search">
      <search-box />
    </section>
    <article id="about-us">
      <h2>What is this?</h2>
      <p>A place for you to check out TTRPGs you've never seen before, or maybe have seen before but forgot about.
      </p>
      <p>       Feel free to drop a review on any of the ones you've experienced, to help others decide what's best for them!
      </p>
    </article>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "RecipesView",
  components: {
    SearchBox
  },
}
</script>

<style scoped>
h1,
h2,
p {
  color: #1d3557;
  margin: 0;
}

#home {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "search search search"
    ". about-us . ";
}

article {
  grid-area: about-us;
  text-align: left;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-content: center;
  height: 200px;
  width: 100vw;
  margin-bottom: 40px;
}

article p {
  font-size: 1.16rem;
}

#search {
  grid-area: search;
  height: 400px;
  background-image: url('../assets/city.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 96%;
  display: flex;
  padding-left: 30px;
  /* align-items: center;
  justify-content: center; */
}
</style>