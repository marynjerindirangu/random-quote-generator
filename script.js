const endpoint = "https://type.fit/api/quotes";

quoteButton = document.getElementById('new-quote');

tweetButton = document.getElementById('js-tweet');

quoteButton.addEventListener('click', getQuote);

async function getQuote(){

   const response = await fetch(endpoint);
   let data = await response.json();

  console.log(displayQuote())
  displayQuote(data[Math.floor(Math.random() * 16)].text);
  tweetQuote(data[Math.floor(Math.random() * 16)].text)
}
getQuote();

function displayQuote(quote){

   let quoteText = document.getElementById('quote-text');
    quoteText.textContent =  quote;
   }
displayQuote();

 function tweetQuote (quote){

     tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
 }
 

