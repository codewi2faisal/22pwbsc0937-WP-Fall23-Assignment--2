// Fetch books data from books.json
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    // Use data to dynamically generate content on your pages
    console.log(data);
  })
  .catch(error => console.error('Error fetching books data:', error));
