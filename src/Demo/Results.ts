import * as topics from "../../assets/topics";
import { hobbit, catcher, lotr, grapes } from "../../assets/covers/newz";
import { salinger, steinback, tolkien } from "../../assets/authors";
const Results = {
  Books: [
    {
      title: "The Lord of the Rings",
      id: "lotr",
      pageNum: "254",
      author: "J.R.R. Tolkien",
      image: lotr,
    },
    {
      title: "The Hobbit",
      id: "hobbit",
      pageNum: "310",
      author: "J.R.R. Tolkien",
      image: hobbit,
    },
    {
      title: "The Catcher in the Rye",
      id: "catcher",
      pageNum: "220",
      author: "J.D. Salinger",
      image: catcher,
    },
    {
      title: "The Grapes of Wrath",
      id: "grapes",
      pageNum: "320",
      author: "John Steinbeck",
      image: grapes,
    },
  ],
  Topics: [
    {
      title: "Fantasy",
      id: "fantasy",
      rating: "4.23 (12,221)",
      bookCount: 221,
      img: topics.cover1,
    },
    {
      title: "Heroic",
      id: "heroic",
      rating: "4.46 (10,210)",
      bookCount: 310,
      img: topics.cover2,
    },
    {
      title: "Novel",
      id: "novel",
      rating: "3.83 (4,210)",
      bookCount: 310,
      img: topics.cover3,
    },
    {
      title: "Horror",
      id: "hor",
      rating: "2.92 (1,210)",
      bookCount: 110,
      img: topics.cover3b,
    },
    {
      title: "Mystery",
      id: "myst",
      rating: "4.14 (9.887)",
      bookCount: 120,
      img: topics.cover1,
    },
  ],
  Authors: [
    {
      name: "J.R.R. Tolkien",
      key: "tolkien",
      bookCount: 30,
      img: tolkien,
    },
    {
      name: "J.D. Salinger",
      key: "salinger",
      bookCount: 22,
      img: salinger,
    },
    {
      name: "John Steinbeck",
      key: "steinbeck",
      bookCount: 20,
      img: steinback,
    },
  ],
};

export default Results;
