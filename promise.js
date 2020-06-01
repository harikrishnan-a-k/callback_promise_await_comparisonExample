const promiseBtn=document.querySelector('#promiseBtn');
const moveBtnRight=(element,amount,delay)=>{
    return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{

            // finding screen width
            const bodyBoundary = document.body.clientWidth;
            //finding the current position of elemnt with getBoundingClientRect()
            const elRight = element.getBoundingClientRect().right;
            const elLeft = element.getBoundingClientRect().left;
            // checking if moving amount pixels would cross window width
            if (elRight + amount > bodyBoundary) {
                //passing parameters to catch() functions so that we can tell user why btn can not be moved further.
                reject({amount,elRight,bodyBoundary});
            }
            else{
                element.style.transform = `translateX(${elLeft + amount}px)`;
                resolve();
            }

        },delay)
        
    });
}

// instead of hectic nested callbacks we use chaing if .then() functions which simple and easy to read and understand

promiseBtn.addEventListener('click',()=>{
    moveBtnRight(promiseBtn,300,2000)
    .then(()=>moveBtnRight(promiseBtn,300,2000))
    .then(()=>moveBtnRight(promiseBtn,300,2000))
    .then(()=>moveBtnRight(promiseBtn,300,2000))
    .then(()=>moveBtnRight(promiseBtn,300,2000))
    .catch(({amount,elRight,bodyBoundary})=>{
        alert(`screen size is ${bodyBoundary}px and btn is at ${elRight}px. so we can not move ${amount}px`);
    })
})
