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
