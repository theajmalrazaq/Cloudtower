let btn_1 = document.getElementById('button_one');
let btn_2 = document.getElementById('button_two');
let btn_3 = document.getElementById('button_three');
let con_1 = document.getElementById('con_one');
let con_2 = document.getElementById('con_two');
let con_3 = document.getElementById('con_three');
function change1(){
        btn_2.classList.remove('active');
        btn_3.classList.remove('active');
        con_1.style.display ="";
        con_2.style.display ="none";
        con_3.style.display="none";
        btn_1.classList.add('active');

    }
    function change2(){
        btn_1.classList.remove('active');
        btn_3.classList.remove('active');
        con_1.style.display ="none";
        con_2.style.display ="";
        con_3.style.display="none";
        btn_2.classList.add('active');
    }
    function change3(){
        btn_2.classList.remove('active');
        btn_1.classList.remove('active');
        con_1.style.display ="none";
        con_2.style.display ="none";
        con_3.style.display="";
        btn_3.classList.add('active');
    }
function subscribe(){
    let email = document.getElementById('email').value;
    if(email == ""){
        alert("Please enter your email");
    }
    else{
        alert("Thank you for subscribing");
    }
}