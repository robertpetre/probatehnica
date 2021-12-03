document.querySelector("#show-login").addEventListener("click",function(){
        
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".page-mask").classList.add("active");
 });
 document.querySelector(".popup .close-btn").addEventListener("click",function(){
   
   
   document.querySelector(".popup").classList.remove("active");
   document.querySelector(".page-mask").classList.remove("active");
 });
 
 document.querySelector("#show-register").addEventListener("click",function(){
      
      
    document.querySelector(".register").classList.add("active");
    document.querySelector(".page-mask").classList.add("active");
 });
 document.querySelector(".register .close-btn").addEventListener("click",function(){
   
   
   document.querySelector(".register").classList.remove("active");
   document.querySelector(".page-mask").classList.remove("active");
 });

 document.querySelector("#predau").addEventListener("click",function(){
      
      
    document.querySelector(".register").classList.add("active");
    document.querySelector(".page-mask").classList.add("active");
 });
 document.querySelector(".register .close-btn").addEventListener("click",function(){
   
   
   document.querySelector(".register").classList.remove("active");
   document.querySelector(".page-mask").classList.remove("active");
 });
 document.querySelector("#invat").addEventListener("click",function(){
      
      
    document.querySelector(".register").classList.add("active");
    document.querySelector(".page-mask").classList.add("active");
 });
 document.querySelector(".register .close-btn").addEventListener("click",function(){
   
   
   document.querySelector(".register").classList.remove("active");
   document.querySelector(".page-mask").classList.remove("active");
 });
 document.querySelector("#to-register").addEventListener("click",function(){
      
      
    document.querySelector(".register").classList.add("active");
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".page-mask").classList.add("active");
 });

 $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<img src='sageata.png' class='next'>","<img src='sageata.png' class='prev'>"],
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

function handleResponse(responseData) {
    console.log(responseData);

    // if(responseData.statusCode != 200 && responseData.statusCode != 201) {
    //     document.getElementById("error").innerHTML = responseData.error ?
    //     responseData.error : responseData.message;
    // }
}

function handleSubmitLogin(e) {
    const data = {
        "email" : document.getElementById("email").value,
        "password" : document.getElementById("password").value
    };

    const token = localStorage.getItem("token");
    const bobocToken = "8f3d13b8-a02e-4b28-bcec-71b7b91c60d5";
    const url = "https://proba2021.lsacbucuresti.ro/auth/login";

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'boboc-token': bobocToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(handleResponse);
}
function handleSubmitRegister(e) {
    const data = {
        "email": document.getElementById("remail").value,
        "firstname": document.getElementById("rprenume").value,
        "lastname": document.getElementById("rnume").value,
        "password": document.getElementById("rpassword").value,
        "confirmation_password": document.getElementById("cpassword").value,
        "role": document.getElementById("optiuni").value
    };

    const token = localStorage.getItem("token");
    const bobocToken = "8f3d13b8-a02e-4b28-bcec-71b7b91c60d5";
    const url = "https://proba2021.lsacbucuresti.ro/auth/register"

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'boboc-token': bobocToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(handleResponse);
}
function handleSubmitContact(e) {
    const data = {
        "name": document.getElementById("numecontact").value ,
        "email": document.getElementById("emailcontact").value ,
        "message": document.getElementById("mesaj").value
    };

    const token = localStorage.getItem("token");
    const bobocToken = "8f3d13b8-a02e-4b28-bcec-71b7b91c60d5";
    const url = "https://proba2021.lsacbucuresti.ro/contact-requests"

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'boboc-token': bobocToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(handleResponse);
}