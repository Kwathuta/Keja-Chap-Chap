function validate () {
    var fname=document.getElementById ('fname');
    var lname=document.getElementById ("lname");
    var Email=document.getElementById ("mail");
    var phone=document.getElementById ("phone");
    var subject=document.getElementById ("sub");
    var message=document.getElementById ("mes");
    var submit=document.getElementById ("submit");

    if (fname.value == '') {
        alert ("Name cannot be blank");
        fname.focus ();
        return false;
    }
    if (lname.value == '') {
        alert ("Name cannot be blank");
        fname.focus ();
        return false;
    }
    if (Email.value=='') {
        alert ("E-mail address cannot be blank")
        
    }