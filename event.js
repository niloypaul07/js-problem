console.log('separate');
const MakeYellow = document.getElementById('make-yellow');

MakeYellow.onclick = MakeYellows;

function MakeYellows() {

    document.body.style.backgroundColor = 'yellow';

}

function MakeBlue() {

    document.body.style.backgroundColor = 'blue';

}


const MakePurple = document.getElementById('make-purple');

MakePurple.onclick = function MakePurples() {

    document.body.style.backgroundColor = 'purple';

}

document.getElementById('make-golden').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';

})
