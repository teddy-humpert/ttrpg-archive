export default {
  getBooks() {
    return books;
  },

  getBook(pos) {
    return books[pos];
  },
};

const books = [
  {
    bookId: 0,
    name: "Vigor: Into Dust",
    imageName:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/83192534/3372730573.jpg",
    publisherUrl: "https://www.stitchcraftpress.com/home",
    details: [
      { author: "JL Householder and Teddy Humpert",},
      { artist: "Minerva Fox" },
      { publisher: "Stitchcraft Press" },
      { description: "Character-forward TTRPGing in a world on the brink." },
    ],
  },
  {
    bookId: 1,
    name: "Blades in the Dark",
    imageName: "https://d1vzi28wh99zvq.cloudfront.net/images/7070/170689.jpg",
    publisherUrl: "https://evilhat.com/",
    details: [
      { author: "John Harper",},
      { artist: "John Harper" },
      { publisher: "Evil Hat Productions" },
      { description: "Blades in the Dark is a tabletop role-playing game by John Harper about a crew of daring scoundrels seeking their fortunes on the haunted streets of an industrial-fantasy city." },
    ],
  },
  {
    bookId: 2,
    name: "The One Ring - RPG",
    imageName:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91OZXAd5QeL._AC_UF1000,1000_QL80_.jpg",
    publisherUrl: "https://freeleaguepublishing.com/en/games/the-one-ring/",
    details: [
      { author: "Francesco Nepitello and Marco Maggi",},
      { artist: "Various Artists" },
      { publisher: "Originally Cubicle 7 now Free League Publishing" },
      { description: "The One Ring Roleplaying Game is a tabletop role-playing game set in J. R. R. Tolkien's Middle-earth, set at the time between The Hobbit and The Lord of the Rings." },
    ],
  },
  
];
