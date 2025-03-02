// get all movie titles
const movieTitles = document.querySelectorAll('.product h3');

// get search form and input
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');

// add event listener to search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  const searchTerm = searchInput.value.toLowerCase(); // get search term entered by user
  
  // filter movie titles
  movieTitles.forEach((title) => {
    const movieTitle = title.textContent.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
      title.parentElement.style.display = 'block';
    } else {
      title.parentElement.style.display = 'none';
    }
  });
});
