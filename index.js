
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  male = id('male'),
  female = id("female"),
  errorMsg = classes("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    takeId(username, 0, "Username cannot be blank");
    takeId(email, 1, "Email cannot be blank");
    takeId(password, 2, "Password cannot be blank");
    takeId(male, 3, "Gender is required")
   
  });
  
  let takeId = (id, serialNo, message) => {
    console.log(id)

   

    if (id.value === "" || (!male.checked && !female.checked)) {
        
        errorMsg[serialNo].innerHTML = message;
        id.style.border = "2px solid red";

      } 
      
      else{
        errorMsg[serialNo].innerHTML = "";
        id.style.border = "2px solid green";

      }
  }