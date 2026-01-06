const inputs = document.querySelectorAll(".code");

function setFocus(index) {
  inputs.forEach(input => input.classList.remove("focused"));
  inputs[index].classList.add("focused");
  inputs[index].focus();
}

inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    input.value = input.value.slice(0, 1);

    if (input.value && index < inputs.length - 1) {
      setFocus(index + 1);
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].value = "";
        setFocus(index - 1);
      }
    }
  });

});
