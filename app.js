'usestrict';

const persons = [
  {
    id: 1,
    photo: './img/1.jpg',
    author: 'ali yasin emir',
    job: 'web developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim nostrum nesciunt iure quaerat maxime amet quibusdam suscipit expedita aliquam. orem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet tenetur reiciendis quia accusantium error, ipsum consectetur doloremque ipsa est.',
  },
  {
    id: 2,
    photo: './img/2.jpg',
    author: 'ali özen',
    job: 'full stack developer',
    description:
      'I have been working professionally since 2017. During this time, I have worked very often with php (especially Laravel), mysql, html&css, linux, docker, redis, git, api. I have worked with frontend frameworks such as Vue.js and react-native at a basic level. I have always adopted SOLID principles while working.',
  },
  {
    id: 3,
    photo: './img/3.jpg',
    author: 'münevver özen',
    job: 'cook',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim nostrum nesciunt iure quaerat maxime amet quibusdam suscipit expedita aliquam. orem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet tenetur reiciendis quia accusantium error, ipsum consectetur doloremque ipsa est.',
  },
  {
    id: 4,
    photo: './img/4.jpg',
    author: 'luna',
    job: 'hamsi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim nostrum nesciunt iure quaerat maxime amet quibusdam suscipit expedita aliquam. orem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet tenetur reiciendis quia accusantium error, ipsum consectetur doloremque ipsa est.',
  },
  {
    id: 5,
    photo: './img/5.jpg',
    author: 'melisa',
    job: 'social media manager',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim nostrum nesciunt iure quaerat maxime amet quibusdam suscipit expedita aliquam. orem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet tenetur reiciendis quia accusantium error, ipsum consectetur doloremque ipsa est.',
  },
  {
    id: 6,
    photo: './img/6.jpg',
    author: 'zehra',
    job: 'teacher',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim nostrum nesciunt iure quaerat maxime amet quibusdam suscipit expedita aliquam. orem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet tenetur reiciendis quia accusantium error, ipsum consectetur doloremque ipsa est.',
  },
];

const photo = document.querySelector('.photo');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const description = document.querySelector('.description');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const btnSuprise = document.querySelector('.btn');
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
  author.style.textTransform = 'capitalize';
  job.style.textTransform = 'capitalize';
});

function showPerson(person) {
  const item = persons[person];
  photo.src = item.photo;
  author.textContent = item.author;
  job.textContent = item.job;
  description.textContent = item.description;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > persons.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = persons.length - 1;
  }
  showPerson(currentItem);
});

btnSuprise.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * persons.length);
  showPerson(currentItem);
});

// Kendime ders

/*

Olay bu

let currentItem = 0; ----- > function showPerson(person){} ----> function showPerson(person){ const item = persons[person];  photo.src = item.photo; } 
----> window.addEventListener('DOMContentLoaded', function () { showPerson(currentItem); }

////////

1) ekranda ilk yüklenen verinin görüntülenmesi için DOMContentLoaded eventini kullan.
2) initial value ver. Atıyorum sürekli değişen bir şeyler olucaksa butonla o zaman ilk önce 0 ver sonra o değişken üzerinde oyna.
3) dom elementlerinin özelliklerini değiştirirken img elementinin src'sine ulaş imgnin mesela class'ı photo ise photo.src  olarak ayarla.
Sonra arrayli objeli ifadene dönüştür
4) eğer işlevsel bir şey yapıcaksan, bu işlevi her zaman fonksiyon tanımlayıp içinde belirt. 
Örneğin kişilerin yüklenmesini istiyorsan  ------------> window.addEventListener('DOMContentLoaded', function () {}
Örneğin farklı farklı kişilerin görüntülenmesini istiyorsan  ------------>  function showPerson(person) {}
5) 


*/
