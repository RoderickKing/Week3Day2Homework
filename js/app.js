document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  choice=['Rock','Paper','Scissors'];
  const rand = (computerChoice) =[Math.floor((Math.random() * Math.floor(choice.length)))];
  console.log(rand);

  const buttons = document.querySelectorAll('button');
  console.dir(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      const playerParag = document.querySelector('#players-choice');
      playerParag.textContent = "Player Plays : " + choice[i];

      const computerParagC = document.querySelector('#computers-choice');
      computerParagC.textContent = "Computer Plays : " + choice[rand];
      displaywinner();

      function displaywinner()
      {

        // maop patter for easy win method
        const endresultParagC = document.querySelector('#result');

        if ( choice[i] === choice[rand]) {
          endresultParagC.textContent = "It's a draw ! " ;
          return;
        };

        const teststring = choice[i][0] + choice[rand][0];

        // map patter for easy win method. R = rock, S = string P paper.
        // player 1 can only win with these combinations
        switch (teststring) {
          case 'RS':
            endresultParagC.textContent = "Player wins :) " ;
            break;

          case 'PR':
            endresultParagC.textContent = "Player wins :) " ;

            break;

          case 'SP':
            endresultParagC.textContent = "Player wins :) " ;

            break;

          default:
            endresultParagC.textContent = "COMPUTER wins :) " ;

            break;
        }
      return;
      }
      }
  );
  };
})
