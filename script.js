const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    // allow only one digit
    input.value = input.value.slice(0, 1);

    // move forward
    if (input.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });

});
