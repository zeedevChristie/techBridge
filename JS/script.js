document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('resultText');
    const choicesArray = ['rock', 'paper', 'scissors'];
    let losses = 0;

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            if (losses < 5) {
                const userChoice = choice.dataset.choice;
                const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
                const result = getResult(userChoice, computerChoice);
                resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
                
                if (result === 'You lose!') {
                    losses++;
                }

                if (losses >= 5) {
                    resultText.textContent = 'Game Over. You reached 5 losses.';
                }
            }
        });
    });

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});
