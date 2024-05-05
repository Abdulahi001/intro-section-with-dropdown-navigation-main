let features = document.getElementById('more-features');
let comanyInfo = document.getElementById('company-info')
let up1 = document.getElementById('up-1');
let up2 = document.getElementById('up-2');
let down1 = document.getElementById('down-1');
let down2 = document.getElementById('down-2');
const feature = document.querySelector('.feature')
const company = document.querySelector('.company')


features.style.display = 'none';
comanyInfo.style.display = 'none';
up1.style.display = 'none';
up2.style.display = 'none';

feature.addEventListener('click', function (){
    if(features.style.display == 'none') {
        features.style.display = 'block';
        up1.style.display = 'block';
        down1.style.display = 'none'
}else{
    features.style.display = 'none';
    up1.style.display = 'none';
    down1.style.display = 'block'
}
   
})
company.addEventListener('click', function (){
    if(comanyInfo.style.display == 'none') {
        comanyInfo.style.display = 'block';
        up2.style.display = 'block';
        down2.style.display = 'none'
    } else{
        comanyInfo.style.display = 'none';
        up2.style.display = 'none';
        down2.style.display = 'block'
    }
   
})


let menu = document.getElementById('menu')

let closeMenu = document.getElementById('close');
let right = document.querySelector('.right');
let shadowDiv = document.querySelector('.shadow')




menu.addEventListener('click', function () {
    right.style.display = 'block';
    shadowDiv.style.display = 'block';
    menu.style.display = 'none'
})
closeMenu.addEventListener('click',function () {
    right.style.display = 'none';
    shadowDiv.style.display = 'none';
    menu.style.display = 'block'
})