function fetchSimpsonsJSON() {

  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; 
    })
    .then(function (simpson) {
     

      const simpsonsHtml = `
          <h1>${simpson[0].character}</h1>
          <img src="${simpson[0].image}"/>
          <p>${simpson[0].quote}</p>
    `;
      document.getElementById('chuck-norris').innerHTML = simpsonsHtml;
    });
}

fetchSimpsonsJSON();
