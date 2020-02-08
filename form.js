/*
The Registration Form must meet the following parameter;-password must be between 8 and 16;
-confirm password must be between 8 and 16;
-password and confirm password must match
*/ 


function calc()
{
    var username=document.getElementById('uname');
    var name=document.getElementById('na');
    var email=document.getElementById('em');
    var password=document.getElementById('pass1');
    var confirmpassword=document.getElementById('confirmpass');

    if(password.value.length >7 && password.value.length <17)
    {
        alert('Password Format ok!');
            console.log(`Your UserName is ${username}`);
            console.log(`Your Name is ${name}`);
            console.log(`Your Email-Address is ${email}`);
            console.log(`Your Password is ${password}`);
            console.log(`Your Confirm Password is ${confirmpassword}`);
    }

    else{
        alert('Your password must be between 8 and 16!!')
    }

    if(confirmpassword.value.length >7 && confirmpassword.value.length <17)
    {
        alert('Confirm Password Format ok!')
            console.log('username');
            console.log(`Your Name is ${name}`);
            console.log(`Your Email-Address is ${email}`);
            console.log(`Your Password is ${password}`);
            console.log(`Your Confirm Password is ${confirmpassword}`);
    }

    else{
        alert('Your Confirm Password must be between 8 and 16!!')
    }

    if(password != confirmpassword)
    {
        alert('Your Passwords dont match!!')
    }
}
/*

function calc()
{
    let username;
    let name;
    let email;
    let password1;
    let password2;

    username=document.getElementById('uname');
    name=document.getElementById('na');
    email=document.getElementById('em');
    password1=document.getElementById('pass1');
    password2=document.getElementById('confirmpass');
    

    if(password1 && password2<7 && password1 && password2 >16)
    

    if(password1==password2)

        {
            console.log(`Your UserName is ${username}`);
            console.log(`Your Name is ${name}`);
            console.log(`Your Email-Address is ${email}`);
            console.log(`Your Password is ${password1}`);
            console.log(`Your Confirm Password is ${Password2}`);
            
            alert('You have been registered successfully!!');
        }
        
            alert('The Password should be greater than 8 and less than 17!')
            alert('The Confirm Password should be greater than 8 and less than 17!')
    
            if(password1!=password2)
            {
                alert('Your passwords dont match!')
            }
        }
     */