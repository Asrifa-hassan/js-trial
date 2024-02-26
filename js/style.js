function Validate(){
    let name= document.getElementById('Name').value;
    let pswrd= document.getElementById('password').value;
    let pswrepeat= document.getElementById('rptpasswrd').value;
    let mail= document.getElementById('email').value;
    let nmbr= document.getElementById('phnenmbr').value;
    var phoneNum = nmbr.replace(/[^\d]/g, '');
    // var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if (name=="") {
        alert("Name must be filled out");
    return false;  
    } 
    else if (pswrd.length <6) {
        alert("Password must be atleast 6 characters long.");
    return false;
    } 
    else if ( pswrd !=pswrepeat) {
        alert("Passwords did not match"); 
    return false;
    } 
    else if (mail === "" || !mail.includes('@')) {
        alert("Please enter a valid e-mail address.");
    return false;
    }  
    else if (phoneNum.length > 6 && phoneNum.length < 11) {
        return true; 
    } 
    else{
        alert("Please enter a valid phone number");
        return false;
    }
}
