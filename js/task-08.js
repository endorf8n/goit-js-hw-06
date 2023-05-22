const formEl = document.querySelector(".login-form");

const onSubmitClick = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
  }

  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitClick);
