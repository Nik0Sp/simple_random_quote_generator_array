<h1 align="center">Simple Quote Random Generator</h1>


<p align="center">
  <strong>A simple React application that displays random quotes.</strong>
</p>

##  Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_random_quote_generator_array.git`
2. Change directory to the project folder: `cd simple_quote_generator_array`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application consists of two components: `Quote` and `QuoteList`.

- The `Quote` component renders an individual quote with its corresponding author. It receives the quote text and author as props and displays them in the UI.
- The `QuoteList` component manages the state for the randomly generated quote. It contains a button that, when clicked, generates a random quote from a predefined list of quotes. The generated quote is then passed to the `Quote` component for rendering.

To draw a new random quote, simply click the "Draw a Quote" button.

## Components

The main component of the application is `App`, which serves as the container for the `QuoteList` component.

### Quote

The `Quote` component displays an individual quote with its author. It receives the following props:

- `text`: The text content of the quote.
- `author`: The author of the quote.

### QuoteList

The `QuoteList` component manages the state for the randomly generated quote. It contains the following functionality:

- The `generateRandomQuote` function generates a random quote by selecting a quote object from the `quotes` array.
- The `randomQuote` state variable stores the currently displayed random quote.
- When the "Draw a Quote" button is clicked, the `generateRandomQuote` function is called, and the randomly generated quote is stored in the `randomQuote` state.
- The `QuoteList` component renders the `Quote` component with the `randomQuote` as props, displaying the randomly generated quote on the screen.

## Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.