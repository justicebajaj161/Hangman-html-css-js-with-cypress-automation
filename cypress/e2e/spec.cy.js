const webpageUrl = `index.html`;

describe('hangman game', () => {
  function rgbToColorName(rgb) {
    const colorMap = {
      'rgb(255, 0, 0)': 'red',
      'rgb(0, 128, 0)': 'green'
      // Add other color mappings as needed
    };

    return colorMap[rgb] || rgb;
  }

  beforeEach(() => {
    cy.visit(webpageUrl, {
      onBeforeLoad: (win) => {
        // Mock the words array to only contain "javascript"
        win.words = ['javascript'];
        // Override the random function to always return 0
        cy.stub(win.Math, 'random').returns(0);
      }
    });
  });

  it('starts with a word to guess represented by underscores', () => {
    cy.get('#wordDisplay').contains(/_/i);
  });

  it('reveals the letter when the user guesses correctly', () => {
    cy.get('#guessInput').type('j');
    cy.get('#guessButton').click();
    cy.get('#wordDisplay').should('contain.text', 'j');
  });
  it('shows part of the hangman when the user guesses incorrectly', () => {
    cy.get('#guessInput').type('z');
    cy.get('#guessButton').click();
    cy.get('.head').should('be.visible');
  });

  it('displays a victory message ', () => {
    const correctGuesses = 'javascript'.split('');
    correctGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('#wordDisplay').should('have.text', 'Congratulations! You won!');
    
  
  });

  it('turns the background green when the user wins',()=>{
    const correctGuesses = 'javascript'.split('');
    correctGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('body').each(($el) => {
      const bgcolor = $el.css('background-color');
      expect(rgbToColorName(bgcolor)).to.equal('green');
    });
  })

  it('displays a loss message ', () => {
    const wrongGuesses = ['z', 'x', 'w', 'q', 'k', 'l'];  // Assuming these letters aren't in the word
    wrongGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('#wordDisplay').should('have.text', 'Game over! You lost.');
  

  
  });

  it('turns the background red when the user loses',()=>{
    const wrongGuesses = ['z', 'x', 'w', 'q', 'k', 'l'];  // Assuming these letters aren't in the word
    wrongGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('body').each(($el) => {
      const bgcolor = $el.css('background-color');
      expect(rgbToColorName(bgcolor)).to.equal('red');
    });
  })
  it('allows user to guess using the Enter key', () => {
    cy.get('#guessInput').type('j{enter}');
    cy.get('#wordDisplay').should('contain.text', 'j');
  });
  it('disables input and button after loss', () => {
    const wrongGuesses = ['z', 'x', 'w', 'q', 'k', 'l'];
    wrongGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('#guessInput').should('be.disabled');
    cy.get('#guessButton').should('be.disabled');
  });
  it('disables input and button after win', () => {
    const correctGuesses = 'javascript'.split('');
    correctGuesses.forEach(letter => {
      cy.get('#guessInput').type(letter);
      cy.get('#guessButton').click();
    });
    cy.get('#guessInput').should('be.disabled');
    cy.get('#guessButton').should('be.disabled');
  });

});
