const form = document.querySelector(".feedback-form");
const DATA_KEY = "feedback-form-state";
let formData = {
  email: "",
  message: "",
};

const dataFromStorage = localStorage.getItem(DATA_KEY);

if (dataFromStorage) {
  formData = JSON.parse(dataFromStorage);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener("input", (e) => {
  if (e.target.name) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(DATA_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
  } else {
    console.log("Email:", formData.email, "Message:", formData.message);
    localStorage.clear();
    formData = {
      email: "",
      message: "",
    };
    form.reset();
  }
});
