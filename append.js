const PlaceList= document.getElementById('place-list');
const li= document.createElement('li');
li.innerText= 'Gabtoli';

PlaceList.appendChild(li); 



const MainContainer= document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='New Section';
section.appendChild(h1);
MainContainer.appendChild(section);


const ul= document.createElement('ul');
const li1= document.createElement('li');
li1.innerText='sec 1';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText='sec 2';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText='sec 3';
ul.appendChild(li3);

section.appendChild(ul);
MainContainer.appendChild(section);


const SectionDress= document.createElement('section');
SectionDress.innerHTML=`
<h1>Dresses</h1>
<ul>
   <li>Shirt</li>
   <li>Panjabi</li>
   <li>Shoe</li>

</ul>
`
MainContainer.appendChild(SectionDress);








