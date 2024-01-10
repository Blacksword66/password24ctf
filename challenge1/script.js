document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const showHintBtn = document.getElementById("show-hint-btn");
    const hintElement = document.getElementById("hint");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
  
    let attempts = 0;
  
    loginBtn.addEventListener("click", function() {
      const username = usernameField.value;
      const password = passwordField.value;
  
      // For simplicity, let's assume the correct username and password are 'user' and 'pass'
      if (username === "SyntaxSorcerer" && password === "C0d3F0rc3sR0ck!") {
        // Redirect to the second page with a dynamic text variable
        const dynamicText = "This text is dynamically set!";
        window.location.href = `second_page.html?text=${encodeURIComponent(dynamicText)}`;
      } else {
        attempts++;
  
        if (attempts === 1) {
          showHintBtn.classList.remove("hidden");
          hintElement.classList.add("hidden");
        } else {
          hintElement.classList.remove("hidden");
        }
  
        // Display error message and reset text fields
        displayErrorMessage();
        resetFields();
      }
    });
  
    showHintBtn.addEventListener("click", function() {
      hintElement.classList.remove("hidden");
    });
  
    function displayErrorMessage() {
      const errorElement = document.createElement("p");
      errorElement.textContent = "Incorrect username or password";
      errorElement.style.color = "#ff0000";
      errorElement.id = "error-message";
  
      // Insert error message above the login form
      const loginForm = document.getElementById("login-form");
      loginForm.insertAdjacentElement("beforebegin", errorElement);
  
      // Remove error message after a short delay (3000 milliseconds)
      setTimeout(() => {
        errorElement.remove();
      }, 3000);
    }
  
    function resetFields() {
      usernameField.value = "";
      passwordField.value = "";
    }
  });
  