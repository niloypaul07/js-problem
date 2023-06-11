const sections= document.querySelectorAll('section');
for( const section of sections){
  
    section.style.border= '2px solid black';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.marginLeft='5px';
    section.style.backgroundColor= 'lightgray';

}

const AddClass= document.getElementById('name');
AddClass.classList.add('yellow-bg')