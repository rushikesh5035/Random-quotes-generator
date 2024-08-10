let btn = document.querySelector("button");
let p = document.querySelector("p");
let authorName = document.querySelector(".author_name");

let url = "https://dummyjson.com/quotes/random";

btn.addEventListener("click", async () => {
  let quotes = await getQuotes();
  p.innerText = quotes.quote;
  authorName.innerText = quotes.author;
});

async function getQuotes() {
  let res = await axios.get(url);
  // console.log(res.data);
  return res.data;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// --Another Way

// async function getAuthor() {
//   let author = await axios.get(url);
//   console.log(author.data.author);
//   return author.data.author;
// }

// const quoteText = document.querySelector(".quote");
// let authorName = document.querySelector(".author_name");
// let quotebtn = document.querySelector("button");

// quotebtn.addEventListener("click", randomQuote);

// //random quote function
// function randomQuote() {
//   // fetching random quotes/ data from the API and parsing it into js object
//   fetch("https://dummyjson.com/quotes/random")
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result.quote);
//       console.log(result.author);
//       quoteText.innerText = result.quote;
//       authorName.innerText = result.author;
//     });
// }
