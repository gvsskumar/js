//const imageUrl = 'https://i.dummyjson.com/data/products/1/thumbnail.jpg';   // valid path 
//const imageUrl = 'https://i.dummyjson.com/data/products/1/thumbnail1.jpg'; //invalid path
const imageUrl = 'https://fakeimg.pl/300/';   // valid path without extension

fetch(imageUrl)
  .then(response => {
    if (response.ok) {
      console.log('Image URL is valid');
    } else {
      console.log('Image URL is invalid');
    }
  })
  .catch(error => {
    console.error('Error validating image URL:', error);
  });