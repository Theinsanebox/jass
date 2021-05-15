function copy1(){
    let x = document.querySelector('#copy-btn1');
    x.style.background = "rgb(217, 255, 217)";
    x.style.border = "1px solid green";
    x.style.color = "green";
    x.style.width = "80px";
    x.innerHTML = "Copied";

    const the = document.querySelector('#forcpy1');
    the.select();
    the.setSelectionRange(0,300);
    document.execCommand("copy");
   

}
function copy2(){
    let x = document.querySelector('#copy-btn2');
    x.style.background = "rgb(217, 255, 217)";
    x.style.border = "1px solid green";
    x.style.color = "green";
    x.style.width = "80px";
    x.innerHTML = "Copied";

    const the = document.querySelector('#forcpy2');
    the.select();
    the.setSelectionRange(0,300);
    document.execCommand("copy");
   

}

function showcont(){
     document.querySelector('.main-const-list-out').style.display = "block";
     document.querySelector('#cont1').style.display = "none";
     document.querySelector('#cont2').style.display = "block";

   
}

function showcont2(){
    document.querySelector('.main-const-list-out').style.display = "none";
    document.querySelector('#cont1').style.display = "block";
    document.querySelector('#cont2').style.display = "none";
  
}



function darkness(){
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.querySelector('.main-head-dark').style.display = "none";
    document.querySelector('.main-head-light').style.display = "block";
    
}

function Light(){
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.querySelector('.main-head-dark').style.display = "block";
    document.querySelector('.main-head-light').style.display = "none";
    
}
