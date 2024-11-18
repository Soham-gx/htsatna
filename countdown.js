// Set the date we're counting down to

// Update the countdown every 1 second
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result


  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "We're live!";
  }
}, 1000);
