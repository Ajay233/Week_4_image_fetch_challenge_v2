# Image fetch challenge (including setting up a React project from scratch) V1

The aim of this project was to create an app to fetch images and display them neatly on the page.  The MVP was as follows:
- Allow the user to search for images
- Implement an API call to facilitate the search
- Save the results in the app state
- Allow the user to perform subsequent network requests
- Add the subsequent results below the original request

## Reference material used

- This app makes requests to the Unsplash API (https://unsplash.com/) to search and retrieve images.  Here is a link to their documentation if you are interested in using the API https://unsplash.com/documentation.

- The guide used to set up the app from scratch can be found at: https://www.codementor.io/@rajjeet/step-by-step-create-a-react-project-from-scratch-11s9skvnxv

<b>N.B</b> - this does not include the webpack-dev-server config as I added that separately; however this will work without it and will run on the default port of `localhost:8080`


##  Running the app

- Clone this repository
- Run `npm install`
- Run `npm run start` to get webpack to bundle the the files required for the app and to start webpack-dev-server on port 9000
- Open your browser and go to `http://localhost:9000/`

<b>N.B</b> - to make network requests using the app, you will need to set up a free Unsplash account to get an API key (see https://unsplash.com/documentation#creating-a-developer-account).  Then follow the steps below:

- Create a folder called `properties` in the `src` folder
- Create a file called `properties.js` in properties folder
- Add the following code to the file:

```
export const baseUrl = 'https://api.unsplash.com'

export const unsplashKey = YOUR UNSPLASH API KEY
```


## Creating the React app from scratch

A secondary (optional) task to this challenge was to set up the react app from scratch, not using `create-react-app`.  For this version of the app I created the base app using the following steps:


### 1 - Initialise a new project by creating a package.json file

- Run `npm init`
- You can then personlise your app by running through the questions.  If you want to skip a question and go with the default just press `enter`.

<b>N.B</b> - if you want to go with the defaults for all attributes, you can just run `npm init -y` to generate a package.json with all default values.


### 2 - Install the following dependencies

- react
- react-dom


### 3 - Install the following dev dependencies

- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/preset-env
- @babel/preset-react
- babel-loader
- css-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server


### 4 - Set up the folder structure of the app

```
|- dist
|- public
    |-index.html
|- src
    |-app.js
    |-index.js

```


### 5 - Setup the webpack config

- Create a file, in the root of your app, called `webpack.config.js`
- Add the following config to the file:

```
module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  // add a custom index.html as the template
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
};
```


### 6 - Set up the npm scripts

- Add the lines below to the scripts object in your package.json file.

```
"start": "webpack serve --mode development --open --hot",
"build": "webpack"
```
