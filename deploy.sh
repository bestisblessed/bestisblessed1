#!/bin/bash

### Vercel CLI Method ###
#vercel --prod

### GitHub Method ###
npm run build
git add package.json
git add package-lock.json
git add gatsby-config.js
git add gatsby-node.js
git add src/*
git commit -m "DEPLOY new version"
git push