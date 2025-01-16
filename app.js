//local reviews
const reviews = [
    {
        id: 1,
        name: "Mark Anthony",
        img: "images/DSCN0296a.jpg" ,
        text: "You designed the best responsive web.Thanks bro.Looking foward to another project",
    },

    {
        id: 2,
        name: "Susan Smith",
        img: "images/DSCN0296a.jpg" ,
        text: "You built the best website i could get for my online shoe store,thank you",  
    },

    {
        id: 3,
        name: "Rose John",
        img: "images/DSCN0296a.jpg" ,
        text: "You designed the best responsive web.Thanks bro.Looking foward to another project",  
    },

    {
        id: 4,
        name: "Lawrence Kirui",
        img: "images/DSCN0296a.jpg" ,
        text: "You designed the best responsive web.Thanks bro.Looking foward to another project",  
    }
];

//select item

const img = document.getElementById("person-image");
const author  = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img ;
    author.textContent = item.name;
    info.textContent = item.text;
    
}

//show next person
nextBtn.addEventListener('click', function() {
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    currentItem ++;
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', function() {
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    currentItem -- ;
    showPerson();
})

//sidebar
function showSidebar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'flex'

}

function closeSidebar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'none';

}

const practice = {
    object: 1,
    home: 'oyugis',
    school: {
        highschool:'kabianga',
        primary: 'nyabondo',
        college: {
           school: 'mount kenya',
           year: 2025,
        }
    }
}
console.log('my portfolio')
alert('welcome');
