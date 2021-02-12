const Card = (article) => {
  const div = document.createElement("div");
  const divHead = document.createElement("div");
  const divAuth = document.createElement("div");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");
  div.classList.add("card");
  divHead.classList.add("headline");
  divAuth.classList.add("author");
  divImg.classList.add("img-container");
  img.setAttribute('src', article["authorPhoto"]);
  
  divHead.textContent = article["headline"];
  span.textContent = `By ${article["authorName"]}`

  div.appendChild(divHead);
  div.appendChild(divAuth);
  divAuth.appendChild(divImg);
  divImg.appendChild(img);
  divAuth.appendChild(span);

  div.addEventListener('click', event => {
    console.log(article["headline"]);
    
  })
  return div;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
      .then((res) => {
        const domEl = document.querySelector(selector);
        
        const arrj = res.data.articles.javascript;
        for(let i=0; i<arrj.length;i++){
          // newArray.push(arr[i]);
          domEl.appendChild(Card(arrj[i]));
        }
        const arrb = res.data.articles.bootstrap;
        for(let i=0; i<arrb.length;i++){
          domEl.appendChild(Card(arrb[i]));
        }
        const arrt = res.data.articles.technology;
        for(let i=0; i<arrt.length;i++){
          domEl.appendChild(Card(arrt[i]));
        }
        const arrq = res.data.articles.jquery;
        for(let i=0; i<arrq.length;i++){
          domEl.appendChild(Card(arrq[i]));
        }
        const arrn = res.data.articles.node;
        for(let i=0; i<arrn.length;i++){
          domEl.appendChild(Card(arrn[i]));
        }
        
      })
      .catch((err) => {
        console.log(err, "you real bad");
      })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
