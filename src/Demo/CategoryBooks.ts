import { ImageSourcePropType } from "react-native";
import * as covers from "../../assets/topics";

const CategoryBooks = [
  {
    name: "Popular",
    content: [
      {
        id: 1,
        title: "The Design of EveryDay Things",
        bookDescription:
          "Don Norman shows how to make everyday objects, objects that people make every day, work better and more efficiently.",
        pageCount: 172,
        rating: "4.2",
        author: "Don Norman",
        img: covers.cover1,
      },
      {
        id: 2,
        title: "The Most Human Human",
        bookDescription:
          "A collection of essays exploring what it means to be human and why it matters.",
        pageCount: 648,
        rating: "4.5",
        author: "Brian Christian",
        img: covers.cover2,
      },
      {
        id: 3,
        title: "The Lord of the Rings",
        bookDescription:
          "The Lord of the Rings is a fantasy novel written by English author J. R. R. Tolkien.",
        pageCount: 1216,
        rating: "4.3",
        author: "J. R. R. Tolkien",
        img: covers.cover3,
      },
      {
        id: 4,
        title: "The Hobbit",
        bookDescription:
          "The Hobbit is a fantasy novel by English author J. R. R. Tolkien.",
        pageCount: 304,
        rating: "4.5",
        author: "J. R. R. Tolkien",
        img: covers.cover3b,
      },
      {
        id: 5,
        title: "Harry Potter",
        bookDescription:
          "Harry Potter is a fantasy novel by British author J. K. Rowling.",
        pageCount: 616,
        rating: "4.5",
        author: "J. K. Rowling",
        img: covers.cover1,
      },
      {
        id: 6,
        title: "The Hunger Games",
        bookDescription:
          "The Hunger Games is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover2,
      },
      {
        id: 7,
        title: "Catching Fire",
        bookDescription:
          "Catching Fire is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3,
      },
      {
        id: 8,
        title: "Mockingjay",
        bookDescription:
          "Mockingjay is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3b,
      },
    ],
  },
  {
    name: "New",
    content: [
      {
        id: 1,
        title: "The Design of EveryDay Things",
        bookDescription:
          "Don Norman shows how to make everyday objects, objects that people make every day, work better and more efficiently.",
        pageCount: 172,
        rating: "4.2",
        author: "Don Norman",
        img: covers.cover1,
      },
      {
        id: 2,
        title: "The Most Human Human",
        bookDescription:
          "A collection of essays exploring what it means to be human and why it matters.",
        pageCount: 648,
        rating: "4.5",
        author: "Brian Christian",
        img: covers.cover2,
      },
      {
        id: 3,
        title: "The Lord of the Rings",
        bookDescription:
          "The Lord of the Rings is a fantasy novel written by English author J. R. R. Tolkien.",
        pageCount: 1216,
        rating: "4.3",
        author: "J. R. R. Tolkien",
        img: covers.cover3,
      },
      {
        id: 4,
        title: "The Hobbit",
        bookDescription:
          "The Hobbit is a fantasy novel by English author J. R. R. Tolkien.",
        pageCount: 304,
        rating: "4.5",
        author: "J. R. R. Tolkien",
        img: covers.cover3b,
      },
      {
        id: 5,
        title: "Harry Potter",
        bookDescription:
          "Harry Potter is a fantasy novel by British author J. K. Rowling.",
        pageCount: 616,
        rating: "4.5",
        author: "J. K. Rowling",
        img: covers.cover1,
      },
      {
        id: 6,
        title: "The Hunger Games",
        bookDescription:
          "The Hunger Games is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover2,
      },
      {
        id: 7,
        title: "Catching Fire",
        bookDescription:
          "Catching Fire is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3,
      },
      {
        id: 8,
        title: "Mockingjay",
        bookDescription:
          "Mockingjay is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3b,
      },
    ],
  },
  {
    name: "Authors",
    content: [
      {
        id: 1,
        title: "The Design of EveryDay Things",
        bookDescription:
          "Don Norman shows how to make everyday objects, objects that people make every day, work better and more efficiently.",
        pageCount: 172,
        rating: "4.2",
        author: "Don Norman",
        img: covers.cover1,
      },
      {
        id: 2,
        title: "The Most Human Human",
        bookDescription:
          "A collection of essays exploring what it means to be human and why it matters.",
        pageCount: 648,
        rating: "4.5",
        author: "Brian Christian",
        img: covers.cover2,
      },
      {
        id: 3,
        title: "The Lord of the Rings",
        bookDescription:
          "The Lord of the Rings is a fantasy novel written by English author J. R. R. Tolkien.",
        pageCount: 1216,
        rating: "4.3",
        author: "J. R. R. Tolkien",
        img: covers.cover3,
      },
      {
        id: 4,
        title: "The Hobbit",
        bookDescription:
          "The Hobbit is a fantasy novel by English author J. R. R. Tolkien.",
        pageCount: 304,
        rating: "4.5",
        author: "J. R. R. Tolkien",
        img: covers.cover3b,
      },
      {
        id: 5,
        title: "Harry Potter",
        bookDescription:
          "Harry Potter is a fantasy novel by British author J. K. Rowling.",
        pageCount: 616,
        rating: "4.5",
        author: "J. K. Rowling",
        img: covers.cover1,
      },
      {
        id: 6,
        title: "The Hunger Games",
        bookDescription:
          "The Hunger Games is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover2,
      },
      {
        id: 7,
        title: "Catching Fire",
        bookDescription:
          "Catching Fire is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3,
      },
      {
        id: 8,
        title: "Mockingjay",
        bookDescription:
          "Mockingjay is a science fiction novel written by Suzanne Collins.",
        pageCount: 384,
        rating: "4.5",
        author: "Suzanne Collins",
        img: covers.cover3b,
      },
    ],
  },
];
export default CategoryBooks;
