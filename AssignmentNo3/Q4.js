$(document).ready(function() {
    $("#start-form").submit(function(event) {
      event.preventDefault();
      var playerName = $("#player-name").val().trim();
      if (playerName !== "") {
        $("#start-screen").hide();
        $("#game-screen").show();
        $("#game-screen h1").text("Hello, " + playerName + "! Let's play Rock Paper Scissors!");
      }
    });
  
    var choices = ["rock", "paper", "scissors"];
    var score = 0;
  
    $(".choice").click(function() {
      var userChoice = $(this).attr("id");
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      var result = getResult(userChoice, computerChoice);
      updateScore(result);
  
      $("#result").text("You chose " + userChoice + ". Computer chose " + computerChoice + ". " + result);
    });
  
    function getResult(user, computer) {
      if (user === computer) {
        return "It's a tie!";
      } else if ((user === "rock" && computer === "scissors") ||
                 (user === "paper" && computer === "rock") ||
                 (user === "scissors" && computer === "paper")) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    }
  
    function updateScore(result) {
      if (result === "You win!") {
        score++;
      } else if (result === "Computer wins!") {
        score--;
      }
      $("#score-value").text(score);
    }
  });
  