const Header = (title, date, temp) => {
const div = document.createElement("div");
const span = document.createElement("span");
const mainTitle = document.createElement("h1");
const span2 = document.createElement("span");
div.appendChild(span);
div.appendChild(mainTitle);
div.appendChild(span2);


div.classList.add("header");
span.classList.add("date");
span2.classList.add("temp");

mainTitle.textContent = `${title}`;
span.textContent = `${date}`;
span2.textContent = `${temp}`;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return div;
}


function headerAppender(selector) {

  //its the header .date/timespan h1 ones def.
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // const headerDiv = Header("Welcome to Flavortown", "Feb 12", "40 Deg");
  // const headerContainer = document.querySelector(".header-container");
  // headerContainer.appendChild(headerDiv);
  // return headerDiv;

    const domEl = document.querySelector(selector)
    domEl.appendChild(Header("TITLE BOY","DATE BOY","COLD"));

    return domEl;  
}


export { Header, headerAppender }
