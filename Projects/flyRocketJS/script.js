let myDiv = document.getElementById('my-div');

document.addEventListener('mousemove', (e)=>{
    move(e);
})

const move = (e) => {
    var x = e.pageX;
    var y = e.pageY;

    myDiv.style.left = x + 'px'; // x position of mouse pointer on the screen
    myDiv.style.top = y + 'px'; // y position of mouse pointer on the screen
    // console.log(e);
}