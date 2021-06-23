function validater(){
    var fname=document.getElementById('fname');
    var sname= document.getElementById('lname')
    var mail= document.getElementById('mail');
    var phone = document.getElementById('phone');
    var message = document.getElementById('mes');

    if(fname.value==''){
        alert('Dear User, enter your first name')
        fname.focus();
        return false;
    }
    if(sname.value==''){
        alert('Dear '+fname.value+' KIndly input your second name');
        sname.focus();
        return false;

    }
    if(mail==''){
        alert('Dear '+fname.value+' input your email addres');
        mail.focus;
        return false;
    }
    if (phone ==''){
        alert('Dear '+fname.value+'  Input your phone number');
        phone.focus();
        return false;
    }
    if (message.value==''){
        alert('Dear '+fname.value+'  Input your message');
        mail.focus();
        return false;
    }
    alert('Thank you '+fname.value+ ' for leaving us your message \n we shall get back soon  ')
}