// Adding Event listener to links

const shortBtn = document.querySelector('.short-btn')
let api = 'https://api.shrtco.de/v2/shorten?url='
const navbar = document.getElementById('navbar');
// Toggle Navbar

// $('.menu-btn').click(function(){
//     $('.navbar .menu').toggleClass('active');
//     $('.menu-btn i').toggleClass('active');
// });
const burger = document.querySelector('.menu-btn')
burger.addEventListener('click', () =>{
    navbar.classList.toggle('active')
    document.querySelector('.hero').classList.toggle('drop')
});
// Search function
function search (){
    const searchBox = document.querySelector('.search-box');
    const resultBox = document.querySelector('.page');
    let web = document.getElementById('search-box');
    const copied = document.getElementById('copy-btn');

    let link = 'https://github.com/zenorocha/clipboard.js.git'
    shortBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(searchBox.value == ''){
           searchBox.style.border = "1px solid red"
        }
        else{
            webpage = web.value;
            fetch(api + webpage)
            .then(response => response.json())
            .then(data => {
                resultBox.innerHTML += `
                <div class="results">
            <div class="cards-body">
              <p>${data.result.original_link}</p>
              <span id="foo" >${data.result.short_link}</span>
              <button class='short-btn' id='copy-btn' data-clipboard-target="#foo">Copy</button>
            </div >
    
          </div>
                `
                console.log(data)
                console.log(webpage)

            })
        }
    })
}
// Change copied text button
const copied = document.getElementById('copy-btn');
function changeText (){
    copied.innerHTML = 'Copied!'
}

// Copy to clipboard
new ClipboardJS('.short-btn');
// 
search();