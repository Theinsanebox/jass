function close1(){

  document.querySelector('.alert-close-yellow').style.display = "none";
}

function close2(){
    
    document.querySelector('.alert-close-red').style.display = "none";
}

function close3(){

    document.querySelector('.alert-close-blue').style.display = "none";
  }
  
  function close4(){
      
      document.querySelector('.alert-close-green').style.display = "none";
  }
  
  function onlamp(){
document.querySelector('.lamp-ani').src = "lon.png";
  }

  function offlamp(){
    document.querySelector('.lamp-ani').src = "loff.png";
  }




//type1 form

function tp1() {
  let x = document.querySelector('.tp1-chckbx').checked;

  if(x){
    document.querySelector('.tp1-pass').type = "text";
  }
  else{
    document.querySelector('.tp1-pass').type = "password";
  }
}


function tp2() {
  let x = document.querySelector('.tp2-chckbx').checked;

  if(x){
    document.querySelector('.tp2-pass').type = "text";
    document.querySelector('.tp2-pass2').type = "text";
  }
  else{
    document.querySelector('.tp2-pass').type = "password";
    document.querySelector('.tp2-pass2').type = "password";
  }
}

function t2reg(){

  let type_2 = document.querySelector('.tp2-pass').value;
  let type_2re = document.querySelector('.tp2-pass2').value;
  
  if(type_2!==type_2re){
    alert("Password must be match!");
  }
}


function tp3() {
  let x = document.querySelector('.tp3-chckbx').checked;

  if(x){
    document.querySelector('.tp3-pass').type = "text";
      }
  else{
    document.querySelector('.tp3-pass').type = "password";
    
  }
}

// let c1  =  document.querySelector('.tp1-pass').value;
// let c2  =  document.querySelector('.tp2-pass').value;
// let c3  =  document.querySelector('.tp3-pass').value;

// if(c1!==null && c2!==null && c3!==null){
//   document.querySelector('.tp1-form2').style.border = "3px solid green";
//   document.querySelector('.tp2-form2').style.border = "3px solid green";
//   document.querySelector('.tp3-form2').style.border = "3px solid green";
// }

function close_sb(){
  document.querySelector('.sidebar1').style.display = "none";
  document.querySelector('.showsidebar').style.display = "block";
}

function show_sb(){
  document.querySelector('.sidebar1').style.display = "block";
  document.querySelector('.showsidebar').style.display = "none";
  
}