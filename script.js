// 1. Use getElementById to select the heading and change its text
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Welcome to the Updated DOM Practice Page';

// 2. Use getElementsByClassName to select all paragraphs with class 'text-content' and change their text color
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let para of textContentParagraphs) {
    para.style.color = 'blue';  // Change the color of each paragraph
}

// 3. Use querySelector to select the div with class 'container' and change its background color
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0'; // Light gray background color

// 4. Use querySelectorAll to select all paragraphs inside the container and change their text content
const containerParagraphs = document.querySelectorAll('.container p');
containerParagraphs.forEach((para) => {
    para.textContent = 'This paragraph has been updated inside the container.';
});
