function func1(){
    document.querySelector('.active1').style.opacity="1";
    document.querySelector('.active2').style.opacity="0";
    document.querySelector('.active3').style.opacity="0";
}
function func2(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=1;
    document.querySelector('.active3').style.opacity=0;
}
function func3(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=0;
    document.querySelector('.active3').style.opacity=1;
}


let button1=document.querySelector('.mobile-menu-button');
button1.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.mobile-div-lang').style.opacity=1;
        const element = document.querySelector('.mobile-div-lang');
        if (element) {
            element.style.pointerEvents = 'all'; // Ensures pointer events are enabled
        }
});
    


document.body.addEventListener('click', (event) => {
    const element = document.querySelector('.mobile-div-lang');
    
    if (element) {
        // Apply opacity and disable pointer events whenever a click happens
        element.style.opacity = 0;
        element.style.pointerEvents = 'none';
    }
});
