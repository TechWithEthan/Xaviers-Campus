// Function to create snowflakes dynamically
function createSnowflakes() {
  let snowflakeCount = 50; // Number of snowflakes
  for (let i = 0; i < snowflakeCount; i++) {
      let snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = "❄"; // Snowflake character
      
      // Set random position, size, and animation speed for each snowflake
      let size = Math.random() * 20 + 10; // Random size between 10px to 30px
      let left = Math.random() * window.innerWidth; // Random horizontal position
      let animationDuration = Math.random() * 5 + 5; // Random animation duration between 5s and 10s

      snowflake.style.fontSize = `${size}px`;
      snowflake.style.left = `${left}px`;
      snowflake.style.animationDuration = `${animationDuration}s`;

      document.body.appendChild(snowflake);
  }
}

// Call the createSnowflakes function
createSnowflakes();