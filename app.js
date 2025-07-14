//select form and inputs
const loginForm = document.querySelector(".login-box");
const emailInput = loginForm.querySelector('input[type ="email"');
const passwordInput = loginForm.querySelector('input[type="password"');

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); //Prevents page reload

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password){
        alert("Please fill in both email and password.");
        return;
    }
    //simulate login (no real backend)
    alert(`logging in with:\nEmail: ${email}\nPassword:${password}`);
});


//Handling the create new account

const createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", function(){
    alert("Account creation feature coming soon!")

});


//Handling the Forgot Password
const forgotPass = document.querySelector(".forgot");
forgotPass.addEventListener("click", function(){
    alert("Forgot Password feature is coming soon!");
    //An email has been sent to your email with detailed instructions on how to reset your password, Please check your inbox and spam folder
});



/* //Method 2 for forgot password

const forgotPass = document.querySelector(".forgot");
forgotPass.addEventListener("click", function(e){
e.preventDefault();// Prevents the page from jumping if tis a real link
alert("Hello World!");

});
 */
