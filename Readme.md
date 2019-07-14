Readme


# for chrome 44:
in `ang7consumer/angular.json` add
```json
{
  "input": "src/scripts/main-es5.js"
}
```
to `projects.ang7consumer.architect.build.options.scripts`

# for newer chrome version
in `ang7consumer/angular.json` add
```json
{
  "input": "src/scripts/main-es2015.js"
}
```
to `projects.ang7consumer.architect.build.options.scripts`

