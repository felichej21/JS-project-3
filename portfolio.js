//profile AJAX fetching
const GITHUB_URL = "https://api.github.com/users/felichej21";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });


if(document.querySelector('.about')) {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const placeToGo = document.querySelectorAll('.place');
  
  let currentSelected = 0;

  prevBtn.addEventListener('click' ,function () {
    nextBtn.disabled = false;
    placeToGo[currentSelected].classList.remove("active");
    currentSelected--;
    placeToGo[currentSelected].classList.add("active");
  
    if (currentSelected === 0) {
      prevBtn.disabled = true;
    }
  })

  nextBtn.addEventListener('click' , function () {
    prevBtn.disabled = false;
    placeToGo[currentSelected].classList.remove("active");
    currentSelected++;
    placeToGo[currentSelected].classList.add("active");
    
    if (placeToGo.length === currentSelected + 1) {
      nextBtn.disabled = true;
    }
  })
}


if(window.location.href) {
  const submit = document.getElementById('submit');
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const email = document.getElementById('email');
  const selection = document.getElementById('selection');
  const comments = document.getElementById('comments');

  document.addEventListener('input', function () {
    if (firstName.value.length > 0 
        && email.value.length > 0
        && comments.value.length > 0
        && selection.value.length > 0
        ) {
      submit.disabled = false;
      console.log('form is valid. submit is disabled:' , submit.disabled)
    } else {
      submit.disabled = true;
      console.log('form is not valid. submit is disabled:' , submit.disabled)}
  });
  
  submit.addEventListener('click', function(event) {
    alert(`First Name : ${firstName.value}, Last Name: ${lastName.value}, Email: ${email.value}, Comment: ${comments.value}, To which degree do you enjoy this website? "${selection.value}". `);
  }) 

}
