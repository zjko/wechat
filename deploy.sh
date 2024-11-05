git add .
git commit -m "release commit"
git push origin develop
npm run build
cd dist
git init 
git remote add origin git@github.com:zjko/LLM-Playground.git
git add .
git commit -m "release"
git push origin master
