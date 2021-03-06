# This repository has all lectures and exercises from the Soft-Uni Angular course!

# Useful Notes
Below are remarks from the lector, done after the presentation.

## Transpiling
Transpiling is the process which transforms our TypeScript code to a JavaScript one. JavaScript has multiple module resolution standarts: commonjs (or the expirimental 'node12') for Node.js and large variety of the other standards for browsers (amd, umd, es2015).

### Transpiling and run command:
```bash
npx ts-node tickets.ts
```



### Transpiling Typescript for Node.js
If you want to transpile your typescript and use it in a Node.js application:


```
tsc ./day-one/typescript-demo/index.ts --module commonjs
```

### Transpiling Typescript for browsers
If you want to transpile your typescript and use it in a browser application:
``` 
tsc ./day-one/typescript-demo/index.ts --module es6
```

### Sourcemaps
Transpiled code is generated by the compiler and it is less readable then it's orignal form. If we want to debug TypeScript we should make sure that we provide `.js.map` file which are read by the browser automatically and help us debug problems inside our TypeScript code.
``` 
tsc ./day-one/typescript-demo/index.ts --module es6 --sourcemap
```

### The 'Set' keyword
Uncomment this section from `index.ts`:
```
const set = new Set<string>();
set.add('');
```

Then run this command:
```
tsc ./day-one/typescript-demo/index.ts --module es6 --sourcemap
```

You will hit the following problem:
```
day-one/typescript-demo/index.ts:144:17 - error TS2552: Cannot find name 'Set'. Did you mean 'set'?
```

Now, during the lecture the proposed fix was to up the `--target`:
```
tsc ./day-one/typescript-demo/index.ts --module es6 --sourcemap --target es6
```

However, if you use want to use in a Node.js application another solution is to do:
```
npm instal --save --save-dev @types/node
```
Source: https://stackoverflow.com/questions/60243293/how-to-fix-cannot-find-name-set


## Not using `npm install --global`
It is considered a good practise not to install any npm module globally. Especially if you want to maintain and develop projects with different library versions.

Example instead of using:
```
npm install --global @angular/cli
...
ng --version
```

You can do:
```
npm install --save --save-dev @angular/cli
...
./node_modules/.bin/ng --version
or
./node_modules/@angular/cli/bin/ng.js --version
```

## NPM package-lock.json and `npm install --legacy-peer-deps`
`package-lock.json` is a file that describes the whole dependency tree and provides determinism of which project's dependencies should be downloaded.

`npm install --legacy-peer-deps` is a command that might help you when you have a version conflict with your dependencies
More info: https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh.




<br>
<br>


#Angular Notes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## installing angular locally
```bash
npm i @angular/cli
```


```bash
npx -p @angular/cli ng new <project-name>
```


```bash
npx ng g component home
```