# Deploying a Nextjs + Bun app to GitHub Pages

## 1. Create an **empty** repository on GitHub

## 2. Create Next app with bun

```sh
$ bun create next-app .
```

## 3. Add files:

1. `git.sh`
2. `.github/workflows/deploy.yml`

## 4. Edit `package.json` file

1. Add a `basePath` property `next.config.ts` file

```typescript
const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: false,
  output: `export`,
  distDir: `dist`,
  basePath: `/replace with REPO_NAME`,
}
```

## 5. deploy

```sh
sh git.sh
```
