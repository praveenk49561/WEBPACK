import add from './add';
import img from '../public/assets/img1.jpg?loadAsBase64';
import texts from  '../public/assets/Last Checked.txt?loadAsBase64';


const rootElement = document.getElementById('root');
let newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello World (Index.js) + hotChunkCheck' + ' Add#' + add(3,5);
console.log(window);
// console.log(texts.split(' ').filter((e) => e.includes('ECS')).length);
console.log(texts);

let newImgTag = document.createElement('img');
newImgTag.src = img;

window.appLib.default(newImgTag, rootElement);
window.appLib.default(newDiv, rootElement);