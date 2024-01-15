# IAFlix

Welcome to IAFlix, the Ember Movie App! This application allows users to browse for movies using an Ember.js frontend.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/get-npm)
- [Ember CLI](https://ember-cli.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:jaferdaltro/iaflix.git
    ```

2. Change into the project directory:

    ```bash
    cd iaflix 
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the App

1. Start the Ember development server:

    ```bash
    ember serve
    ```

2. Visit the app in your browser at `http://localhost:4200`.

## Features

### Movie List

- **Route:** `/movies`
- **Description:** View a list of all movies.

### Movie Details

- **Route:** `/movies/:id`
- **Path Parameter:**
  - `id`: Movie ID.
- **Description:** View details of a specific movie.

## Testing

To run tests, use the following command:

```bash
ember test
