alert("hello world");
 
function fn() {
    var a=document.getElementById('email').value;
    document.getElementById('par').innerHTML=a;

}
function sendmail() {
    var Email= document.getElementById('email').value;
    var subject= "request to connect";
    var body= "hello I would like to connect with you";
    window.location.href = "mailto:mhdfaiz0353@gmail.com"+"?subject" + encodeURIComponent(subject)+"&body=" + encodeURIComponent(body) + "&cc="+ encodeURIComponent(Email);
 }