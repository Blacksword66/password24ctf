document.addEventListener("DOMContentLoaded", function() {
    // Get the dynamic text parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const dynamicText = urlParams.get('text');
  
    // Update the content on the page with the dynamic text
    const dynamicTextElement = document.getElementById("dynamic-text");
    dynamicTextElement.textContent = dynamicText || "Default text";
  });
  