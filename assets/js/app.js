// Random password generator
// select input box
const passwordBox = document.getElementById("password");
// initial length hobe 12 porjonto
const length = 12;


// some important variables for creating a strong random password
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = uppercase + lowercase + number + symbol;


// create random password
function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];

  password += lowercase[Math.floor(Math.random() * lowercase.length)];

  password += number[Math.floor(Math.random() * number.length)];

  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password +=allChars[Math.floor(Math.random() * allChars.length)]
  }

  passwordBox.value = password;
}

// copy Password
function copyPassword() {
  passwordBox.select();
  document.execCommand('copy')
}



// click about btn then h1 background automatic change
const heading = document.getElementById('heading')
const aboutBtn = document.getElementById("about-btn");
// console.log(aboutBtn)

aboutBtn.addEventListener('click', () => {
  heading.classList.toggle("addClass");
})

// array method different method

const toggleBtn = document.querySelector('.toggle')
const ul = document.querySelector('.nav-lists')

toggleBtn.addEventListener('click', () => {
  ul.classList.toggle('extra')

})


