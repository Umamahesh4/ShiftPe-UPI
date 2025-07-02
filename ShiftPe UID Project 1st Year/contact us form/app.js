const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




const scriptURL = 'https://script.google.com/macros/s/AKfycbxx7nRbbgJytuAQTjxwdh7VglRG4XovbqIzTIjyWjLGktItCN6rNs6r30bJI2uxOq-t/exec'
        const form = document.forms['google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("You have successfully submitted."))
            .catch(error => console.error('Error!', error.message))
        })

