const btn = document.querySelector('#callbackBtn');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
        // finding screen width
        const bodyBoundary = document.body.clientWidth;
        //finding the current position of elemnt with getBoundingClientRect()
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		}
		else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};

// LOOK AT THIS UGLY MESS!
btn.addEventListener('click',()=>{
    moveX(
        btn,
        300,
        2000,
        () => {
            //success callback
            moveX(
                btn,
                300,
                2000,
                () => {
                    //success callback
                    moveX(
                        btn,
                        300,
                        2000,
                        () => {
                            //success callback
                            moveX(
                                btn,
                                300,
                                2000,
                                () => {
                                    //success callback
                                    moveX(
                                        btn,
                                        300,
                                        2000,
                                        () => {
                                            //success callback
                                            alert('YOU HAVE A WIDE SCREEN!');
                                        },
                                        () => {
                                            //failure callback
                                            alert('CANNOT MOVE FURTHER!');
                                        }
                                    );
                                },
                                () => {
                                    //failure callback
                                    alert('CANNOT MOVE FURTHER!');
                                }
                            );
                        },
                        () => {
                            //failure callback
                            alert('CANNOT MOVE FURTHER!');
                        }
                    );
                },
                () => {
                    //failure callback
                    alert('CANNOT MOVE FURTHER!');
                }
            );
        },
        () => {
            //failure callback
            alert('CANNOT MOVE FURTHER!');
        }
    );
})

