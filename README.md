# Coopers Todo App

This is the frontend client for Coopers Todo App, a dynamic web application designed for managing todos efficiently.

## Installation

Clone the repository and install dependencies:

npm install

## Running the Application

### Development

To run the application in development mode:

npm start

This will start the app using CRACO, allowing for custom configuration settings without ejecting from Create React App. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The app will automatically reload if you make any changes to the code.

### Production Build

To create a production build:

npm run build

This command compiles the application into static files for production in the `build` folder. It ensures the build is optimized for performance, including minification and efficient loading of resources.

## Deployment

Deploy the production build to GitHub Pages:

npm run deploy

This script pushes the contents of the `build` folder to the `gh-pages` branch of your repository, making the site publicly accessible via GitHub Pages.

## Dependencies

- **@craco/craco**: Enables custom configurations for Create React App without needing to eject.
- **@testing-library**: Tools for testing the application components in an environment similar to how a user would interact with the app.
- **autoprefixer**: Automatically adds vendor prefixes to CSS rules for cross-browser compatibility.
- **axios**: Facilitates HTTP requests to external services or APIs.
- **gh-pages**: Simplifies the deployment of the app to GitHub Pages.
- **react**, **react-dom**: Core React libraries.
- **react-beautiful-dnd**: Adds drag-and-drop functionality within React components.
- **react-router-dom**: Manages routing for the app.
- **react-scripts**: Configuration and scripts for Create React App.
- **sass**: Allows using Sass for styling, enhancing CSS with features like variables and nested rules.
- **web-vitals**: Helps measure and analyze the performance of the app.

## License

This project is licensed under the ISC License.
