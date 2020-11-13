function validation(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;





//getting the input and displaying the error massage//
    if(fname == ""){
        document.getElementById('firstname').innerHTML = " *** Please Enter First Name";
      return false;
    }

    if(!isNaN(fname)){
      document.getElementById('firstname').innerHTML = " *** Please Enter Characters";
      return false;
    }

    if(lname == ""){
        document.getElementById('lastname').innerHTML = " *** Please Enter Last Name";
      return false;
    }

    if(!isNaN(lname)){
      document.getElementById('lastname').innerHTML = " *** Please Enter Characters";
      return false;
    }

    if(mobile == ""){
        document.getElementById('mn').innerHTML = " *** Please Enter Mobile Number";
      return false;
    }

    if(email == ""){
        document.getElementById('em').innerHTML = " *** Please Enter E-Mail ID";
      return false;
    }

    if(dob == ""){
        document.getElementById('dt').innerHTML = " *** Please Enter Date of Birt";
      return false;
    }

    if(address == ""){
        document.getElementById('add').innerHTML = " *** Please Enter Address";
      return false;
    }








    //validation for first name//
    if(!isNaN(fname)){
      document.getElementById('firstname').innerHTML = "*** Please Enter Characters"

}


//uppercase the fname//

let name = document.getElementById('fname').value;
let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

let s = document.getElementById('fname').innerHTML = nameCapitalized;



let same = document.getElementById('sam').innerHTML =  same[0].toUpperCase();

let mam = document.getElementById('sam').innerHTML = mam.charAt(0).toUpperCase() + name.slice(1)

}