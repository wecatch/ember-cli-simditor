git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
ember build -prod
git rm -rf app config tests
git rm -rf bower.json package.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
mv dist/* .
rm -rf dist
git add .
git commit -m "Publishing to github pages"
git push origin gh-pages
git checkout master