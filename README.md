# Casual Foundry Technical Test

This is my delivery on the technical test send by Casual Foundry. I would like to thank once again for their interest in my profile. This project has been developed in an afternoon of time, in around 6 to 8h.

In order to run the project please make sure to install all needed dependencies first by running the following command:

```sh
npm install
```

or if you use `Yarn` :

```sh
yarn install
```

You will also need a `.env` file on the root directory of the project. Here are the variables you will need:

```
REACT_APP_WEATHER_API_KEY=6754ff41aa3675c36ca15e542b83922b
REACT_APP_WEATHER_API_URL=//api.openweathermap.org/data/2.5/weather
```

Once all the environment is set, simply run one of the following commands depending on your package manager:

```ph
npm run start

yarn start
```

You can check the `package.json` file for additional scripts in case you need them.

## Things missing worth mentioning

Due to a severe time constraint, there are several missing things I already acknowledged but could not find the time to work on. Some of them are:

- `More and better unit testing`. There are some components and services I did not add unit testing since their specific cases required some more complex mock environment I simply did not have the time to set up.

- `A more comprehensive class system`. I had some ideas to make the filterers and sorters as mantainable as possible while keeping them coherent and simple, and also avoiding to violate the SOLID principles. While the finished result seem to work, it did not have the exact view I had for it, and some more time to plan would have helped to get a better approach.

- `Better UI responsiveness`. Even though I tried to keep a clean SCSS structure (while following some `BEM` architecture), I know I could not keep the design as pixel-perfect from the Figma one as I hoped for. Some more time would have helped me get that precission.

- `Dumber components`. Right now some components carry more responsabilities that I would like to.

- `Performance potential problems`. In order to make the filters work asynchronously, I fetched all necessary data at the beginning. This implied the usage of several for/loops that had async functions. In a large scope this could have performance issues which might cause to approach this fetch differently.
