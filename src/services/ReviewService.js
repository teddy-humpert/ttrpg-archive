export default {
    getBookReviews(bookId) {
        return reviews.filter((review) => {
            return review.bookId == bookId;
        });
    }
}

const reviews = [
    {
        bookId: 0,
        id: 1,
        user: "Queen Maeve",
        location: "Paris, KY",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        stars: 4,
    },
    {
        bookId: 0,
        id: 2,
        user: "Lord of the King",
        location: "Denver, CO",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        stars: 5,
    },
    {
        bookId: 1,
        id: 3,
        user: "Simone de Bouvoir",
        location: "UAE",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        stars: 2,
    }
]