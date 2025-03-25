# random_code_snippets_nodejs

This project contains random small code snippets that don't really need full
project of their own, notes, and anything that could be useful for something someday.

## Writing README stuff

[https://help.github.com/en/articles/basic-writing-and-formatting-syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

## Node stuff

- Node.js (v23.5.0) and npm [https://nodejs.org/](https://nodejs.org/)

## Initial set up

```
npm install
```

## To run

```
node src/[whatever file you want to run]
```

## Lint

```
npm run lint:fix
```

## Generating docs

```
npm run build:doc
```

- Runs both apidoc and jsdoc. Make sure they are installed before running.

### apidoc

```
npm run build:doc:apidoc
```

- outputs to docs/apidoc
- [https://www.npmjs.com/package/apidoc](https://www.npmjs.com/package/apidoc)
- [http://apidocjs.com/](http://apidocjs.com/)
  - [params](http://apidocjs.com/#params)

### jsdoc

```
npm run build:doc:jsdoc
```

- outputs to docs/jsdoc
- [https://www.npmjs.com/package/jsdoc](https://www.npmjs.com/package/jsdoc)
- [https://jsdoc.app/](https://jsdoc.app/)
  - [Getting started](https://jsdoc.app/about-getting-started.html)
  - [tags](https://jsdoc.app/tags-example.html)
  - [Namepaths](https://jsdoc.app/about-namepaths.html)
  - [Namespace](https://jsdoc.app/tags-namespace.html)
    - [memberof](https://jsdoc.app/tags-memberof.html)
  - [Module](https://jsdoc.app/tags-module.html)
    - [param](https://jsdoc.app/tags-param.html)
    - [Function](https://jsdoc.app/tags-function.html)
    - [Class](https://jsdoc.app/tags-class.html)
  - [typedef](https://jsdoc.app/tags-typedef)

## Bumping version

Use one of `release:xxx:xxx` scripts to do to update version on the `main` branch (via `npm version`). It will also create a new commit and a tag, then automatically git push-es them to the origin.

For more info:

- https://semver.org/
- https://en.wikipedia.org/wiki/Software_release_life_cycle
- https://docs.npmjs.com/cli/v11/commands/npm-version

```
# bump up release type version, and mark as beta
npm run release:beta:patch

# bump up beta/rc build number only
npm run release:beta
npm run release:rc

# bump up release type version for final release
npm run release:minor
```
