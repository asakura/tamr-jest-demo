# Install io.js and deps

    brew update
    brew install nvm
    source $(brew --prefix nvm)/nvm.sh
    # echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile
    nvm install iojs
    npm install -g npm@latest
    npm install
    

Now you're ready to run test:

    npm test
    
You must see this output:

```
> tamr-jest-demo@1.0.0 test /Users/asakura/tamr-jest-demo
> jest

Using Jest CLI v0.5.0
 PASS  src/__tests__/App-test.js (0.899s)
1 test passed (1 total)
Run time: 1.233s
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
 src/     |      100 |      100 |      100 |      100 |                |
  App.js  |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|

All reports generated
```

Check out the `output` and `coverage` folders.
