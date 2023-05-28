var mobile={

    name:'samsung',
    ram: '4gb',
    camera: '4PX',
    inch: 5
}

console.log(mobile);
var geValuechan= mobile.name;
console.log(geValuechan);

var geValuechan2= mobile['name'];
console.log(geValuechan2);

var getValueNext= ['name'];
var geValuechan3= mobile[getValueNext];
console.log(geValuechan3);

mobile.name='iphone';
console.log(mobile);











    var propertyMobile= Object.keys(mobile);
    console.log(propertyMobile);
    var propertyMobile= Object.values(mobile);
    console.log(propertyMobile);

