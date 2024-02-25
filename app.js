const text = document.querySelector('.text');
const userName = document.querySelector('.author');
const userJob = document.querySelector('.job');
const userImage = document.querySelector('.img');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentReview = 0;

const data = [
    {
        id: 0,
        text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        author: "John Tarkpor",
        job: "Junior Front-end Developer",
        img: './images/image-john.jpg'
    },
    {
        id: 1,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "nika yais",
        job: "Web Designer",
        img: './images/avatar1.jpg'
    },
    {
    id: 2,
    text: " Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
    author: "misha moon",
    job: "Graphic Designer & Programmer",
    img: './images/avatar2.jpg'
    },
    {
        id: 3,
        text: "dipisicing elit. Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "micheal john",
        job: "Manager",
        img: 'images/avatar3.jpg'
    },
    {
        id: 4,
        text: "dolor sit amet consectetur adipisicing elit. Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "saniya min",
        job: "Brand Designer",
        img: './images/avatar4.jpg'
    },
    {
        id: 5,
        text: " Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "misha moon",
        job: "Graphic Designer & Programmer",
        img: './images/avatar5.jpg'
    },
    {
        id: 6,
        text: " perferendis reprehenderit qu Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "Venesa -cardi",
        job: "Seo and Graphist",
        img: './images/avatar6.jpg'
        },

    {
        id: 7,
        text: "eveniet eligendi labore quos mollitia fug Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "sona soon",
        job: "Andriod Programmer",
        img: './images/avatar7.jpg'
    },
    {
        id: 8,
        text: " ferendis reprehende eveniet eligendi labore quos mollitia fug Illum earum sequi eveniet eligendi labore quos mollitia fugiat aperiam, cumque consectetur adipisci, vel perferendis reprehenderit quis repellat itaque vitae ducimus ad!",
        author: "sona soon",
        job: "Clothe Designer",
        img: './images/avatar8.jpg'
    },
]


const showReview = (id) => {
    userImage.src = data[id].img;
    text.innerHTML = data[id].text;
    userName.innerHTML = data[id].author;
    userJob.innerHTML = data[id].job;
}

showReview(currentReview);

next.addEventListener('click', () => {
    if(currentReview < data.length - 1){
        currentReview++;
        showReview(currentReview);
    }
})

prev.addEventListener('click', () => {
    if(currentReview > 0){
        currentReview--;
        showReview(currentReview);
    }
})