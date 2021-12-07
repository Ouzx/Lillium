import * as media from "../../assets/covers/newz";

const DETAIL = {
  title: "The Lord of the Rings",
  description:
    "The Lord of the Rings is an epic high fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold",
  author: "J. R. R. Tolkien",
  image: require("../../assets/img/card-bg.png"),
};

const BOOKS = [
  // {
  //   id: "1",
  //   onPress: () => {},
  //   image: media.alacakaranlik,
  //   title: "Twilight",
  //   pageNum: "500",
  //   author: "Stephenie Meyer",
  // },
  {
    id: "2",
    onPress: () => {},
    image: media.balikci,
    title: "Balıkçı ve Oğlu",
    pageNum: "356",
    author: "Zülfü Livaneli",
  },
  {
    id: "3",
    onPress: () => {},
    image: media.biridammahkumu,
    title: "Bir İdam Mahkumunun Son Günü",
    pageNum: "632",
    author: "Victor Hugo",
  },
  {
    id: "4",
    onPress: () => {},
    image: media.canlidevre,
    title: "Canlı Devre",
    pageNum: "856",
    author: "David Eagleman",
  },
  {
    id: "5",
    onPress: () => {},
    image: media.gormebicimleri,
    title: "Görme Biçimleri",
    pageNum: "361",
    author: "John Berger",
  },
  {
    id: "6",
    onPress: () => {},
    image: media.harrypotter1,
    title: "Harry Potter and the Philosopher's Stone",
    pageNum: "320",
    author: "J.K. Rowling",
  },
  {
    id: "7",
    onPress: () => {},
    image: media.hav,
    title: "HAV",
    pageNum: "241",
    author: "Jan Morris",
  },
  {
    id: "8",
    onPress: () => {},
    image: media.incognito,
    title: "Incognito",
    pageNum: "425",
    author: "David Eagleman",
  },
];

export { BOOKS, DETAIL };
