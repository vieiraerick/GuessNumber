# What's the number?

[Versão em Português](../README.md)

**What's the number?** is a Browser game that aims to hit a randomly drawn number. The user can configure the draw interval or just start a game without a pre-configuration, in which case the value will be between 0 and 300. The maximum value accepted by the game is 999 and negative values ​​are not allowed.

[Game Manual](./HowToPlay.md)

![GuessNumber](../assets/GameStart.png)

## Implementation

The project was developed to test skills in [HTML], [CSS] and [JavaScript]. To speed up the development, the library [ReactJS] provided by **[Facebook]** (_[open project](https://github.com/facebook/react)_) was used. The implementation was improved using the [Typescript] superset which brings improvements to the [Javascript] language. Some third-party libraries have been implemented to help with connecting APIs, stylized components, and user-friendly error messages.

## How to run

### First steps

To run the application, just clone this repository locally, and, when accessing the cloned directory, just install the node_modules packages and execute the script to start the development mode, through which it is possible to test the application.

```powershell
  git clone https://github.com/vieiraerick/GuessNumber.git

  cd GuessNumber

  npm install

  npm run start
```

or else:

```powershell
  git clone https://github.com/vieiraerick/GuessNumber.git

  cd GuessNumber

  yarn install

  yarn start
```

Or it is possible to execute a bat file that is present in the root of the directory that executes the last two steps.

```powershell
  git clone https://github.com/vieiraerick/GuessNumber.git

  cd GuessNumber

  ./start.bat
```

### Editing the code

The code can be edited with any text editor or IDE of your choice.

### Automated tests

The project was also used as a basis for the study of automated tests, so the tests present in this version are very basic because they are the beginning of the studies. To run the tests, just run the following command:

```powershell
yarn test
```

or else

```powershell
npm run test
```

You can also run tests and generate a coverage report by running the following command:

```powershell
yarn testCoverage
```

or else

```powershell
npm run testCoverage
```

### Project Scripts

### `yarn start`

Run the application in development mode. Open [http://localhost:3000](http://localhost:3000), to see the project if the application does not open automatically.

### `yarn test`

Run automated tests.

### `yarn testCoverage`

Run the tests and generate the [Coverage Report](./coverage/lcov-report/index.html).

### `yarn build`

Builds the production version of the project.

## Technologies, Libraries and Packages

- [HTML]
- [CSS]
- [Javascript]
- [Typescript]
- [ReactJS]
- [Axios](https://axios-http.com/docs/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
- [Styled Components](https://styled-components.com/)
- [Polished](https://polished.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

[facebook]: https://www.facebook.com/
[reactjs]: https://pt-br.reactjs.org/
[typescript]: https://www.typescriptlang.org/
[javascript]: https://www.javascript.com/
[html]: https://www.w3schools.com/html/
[css]: https://www.w3schools.com/css/
