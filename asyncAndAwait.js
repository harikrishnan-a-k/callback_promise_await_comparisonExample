const awaitBtn=document.querySelector('#awaitBtn');
// we are using the same moveBtnRight() function from promise.js which returns promise here
//but instead of .then() we use await syntax
const moveBtn=async ()=>{
   await moveBtnRight(awaitBtn,300,2000);
   await moveBtnRight(awaitBtn,300,2000);
   await moveBtnRight(awaitBtn,300,2000);
   await moveBtnRight(awaitBtn,300,2000);
   await moveBtnRight(awaitBtn,300,2000);
    
}

awaitBtn.addEventListener('click',()=>{
    // adding catch() function at the time of function calling. 
    moveBtn().catch(({amount,elRight,bodyBoundary})=>{
        alert(`screen size is ${bodyBoundary}px and btn is at ${elRight}px. so we can not move ${amount}px`);
    })
});