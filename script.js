
var form=document.createElement('form');
var label1=document.createElement('label');
label1.setAttribute('for','fname');
label1.innerText="FirstName";

var input1=document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','firstname');
var br1=document.createElement('br');
var br2=document.createElement('br');
form.append(label1,input1,br1,br2);

var label2=document.createElement('label');
label2.setAttribute('for','mname');
label2.innerText="MiddleName";

var input2=document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','middlename');
var br1=document.createElement('br');
var br2=document.createElement('br');
form.append(label2,input2,br1,br2);

var label3=document.createElement('label');
label3.setAttribute('for','lname');
label3.innerText="LastName";

var input3=document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('id','lastname');
var br1=document.createElement('br');
var br2=document.createElement('br');
form.append(label3,input3,br1,br2);



var email=document.createElement('label');
email.setAttribute('for','mail');
email.innerText="Email";

var emailid=document.createElement('input');
emailid.setAttribute('type','email');
emailid.setAttribute('id','mailid');
var br1=document.createElement('br');
var br2=document.createElement('br');
form.append(email,emailid,br1,br2);

var btn=document.createElement('button');
btn.setAttribute('type','button');
btn.innerText="Submit";
btn.setAttribute('onclick','myFunction()');
form.append(btn);
document.body.append(form);

function myFunction(){
    let res1=document.getElementById("firstname").value;
    let res2=document.getElementById("middlename").value;
    let res3=document.getElementById("lastname").value;
    let res4=document.getElementById("mailid").value;
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);

}