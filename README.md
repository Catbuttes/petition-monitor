# Petition Monitor

[![Build Status](https://dev.azure.com/catbuttes/catbuttes/_apis/build/status/Catbuttes.petition-monitor?branchName=master)](https://dev.azure.com/catbuttes/catbuttes/_build/latest?definitionId=2&branchName=master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Catbuttes/petition-monitor.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Catbuttes/petition-monitor/alerts/)

This is a little app intended to load the stats for a parliamentary petition. It originated from the "revoke Article 50" petition overloading the petitions website. The recommended alternative still used the json data from the petitions website, but avioded pulling the rest of the assets. I didn't want to know about the geographic distribution of the signers, just the total signatures. Thus the petition monitor app was born. It will display the title, signature count and a link to the selected petition - reloading the count on a timer.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

