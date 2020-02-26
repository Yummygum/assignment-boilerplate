# Next boilerplatee

This is a next boilerplate

To commit use `npm run commit`, this will open up the commitizen cli tool. We should be able to bind this to commit. However this caused the release to be in a infinite loop.

To release a new version we have to use `npm run release`. We should be able to easily automate this by integrating a CI tool to run `npm run release` & running: `git push --follow-tags origin BRANCH_NAME`
