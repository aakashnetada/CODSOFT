let string = "";
let buttons = document.querySelectorAll(".button");
let isAddingParentheses = false;
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (
        string.endsWith("+") ||
        string.endsWith("-") ||
        string.endsWith("*") ||
        string.endsWith("/")
      ) {
        string = "Error";
      }
      // else if (string.startsWith("+") || string.startsWith("-") || string.startsWith("*") || string.startsWith("/")){
      //     string = "Error";

      // }
      else {
        string = eval(string);

        document.querySelector("input").value = string;
      }
    } else if (e.target.innerHTML == "+/-") {
      string = -string;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "()") {
      if (isAddingParentheses) {
        string += ")";
      } else {
        string += "(";
      }
      isAddingParentheses = !isAddingParentheses;
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
