## Create files

### npm create vite

### npm i

### .github/workflows/deploy.yml

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```

### package.json

```
{
  "prettier": {
    "semi": false
  }
}
```

### vite.config.js

```
export default defineConfig({
  base: "/NAME/"
})
```

### git.sh

## github.com

Settings > Actions > General
Workflow permissions
Read and write permissions
Save

Settings > Pages >
Build and deployment
Branch
gh-pages

## Terminal

```
sh git.sh 3
```

https://www.vd-developer.online/blog/vite-react-deploy-github
