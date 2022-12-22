function addElement() {
  const pub = document.createTextNode(books[0].publisher);
  document.body.insertBefore(pub, document.getElementById(bookshelf));
}

let books = [
  {
    id: 2,
    publisher: "АСТ",
    writer: "Сергей Лукьяненко",
    title: "Семь дней до Мегиддо"
  },
  {
    id: 3,
    publisher: "АСТ",
    writer: "Сергей Лукьяненко",
    title: "Три дня Индиго"
  },
  {
    id: 4,
    publisher: "АСТ",
    writer: "Сергей Лукьяненко",
    title: "Месяц за Рубиконом"
  },
  {
    id: 5,
    publisher: "АСТ",
    writer: "Сергей Лукьяненко",
    title: "Лето волонтёра"
  },
  {
    id: 1,
    publisher: "АСТ",
    writer: "Герберт Уэллс",
    title: "Война миров"
  }
];


const splitByValue = (array, key) => array.reduce((arr, i) => {
    if (!arr[i[key]]) arr[i[key]] = [];
    arr[i[key]].push(i);
    return arr;
    console.log(arr)
}, {});
splitByValue(books, "writer");

const ido = document.getElementById("WOTW");
const ids = document.getElementById("SDTM");
const idt = document.getElementById("TDOI");
const idf = document.getElementById("MBTR");
const idfi = document.getElementById("VS");

const newContent = document.createTextNode(books[0].publisher);
