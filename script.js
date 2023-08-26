// script.js
const imageContainer = document.getElementById('imageContainer');

const apiUrl = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            const container = document.createElement('div');
            const img = document.createElement('img');
            img.src = element.imgSrc;
            img.alt = 'Image';
            img.classList.add('image');
            container.appendChild(img)
            console.log(imageContainer)
            imageContainer.appendChild(container)
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
