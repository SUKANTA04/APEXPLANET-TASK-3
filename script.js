const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpeg", "img6"];
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("gallery-image").src = images[currentIndex];
}


document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "c",
    q2: "b",
    q3: "a",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "a",
    q9: "b",
    q10: "b",
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("quiz-score").textContent = `You scored ${score} out of 10! 🎉`;
});


function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-display").textContent =
        `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke-display").textContent =
        "Oops! Couldn't fetch a joke right now.";
    });
}
