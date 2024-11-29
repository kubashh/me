# Deploying a React App to GitHub Pages

### 1. Create an **empty** repository on GitHub

### 2. Create a React app

  ```shell
  $ npx create-react-app my-app
  $ cd my-app
  ```

### 3. Install the `gh-pages` npm package

  ```shell
  $ npm install gh-pages --save-dev
  ```

### 4. Edit `package.json` file

1. Open the `package.json` file in a text editor.

2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`

  ```diff
  {
    "name": "my-app",
    "version": "0.1.0",
  + "homepage": "https://gitname.github.io/react-gh-pages",
    "private": true,
  ```

3. Add a `predeploy` property and a `deploy` property to the `scripts` object:

  ```diff
  "scripts": {
  + "predeploy": "npm run build",
  + "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
  ```

### 5. Add a "remote" that points to the GitHub repository

  ```shell
  $ git remote add origin https://github.com/{username}/{repo-name}.git
  ```

### 6. Push the React app to the GitHub repository

  ```shell
  $ npm run deploy
  ```