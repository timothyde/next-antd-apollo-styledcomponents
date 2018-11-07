# Boilerplate for Testing with next

### Prerequisites

You need a env.js file in the root directory, e.g. like

```
const prod = process.env.NODE_ENV === 'production';

module.exports = {};
```

### Installing

Clone the repo and install dependencies via

```
npm install
```

## Tests

Run tests via

```
npm run test
```

## Run

Run a development build and start a dev server at http://localhost:3001 via

```
npm run dev
```

Create a production build and start a server at http://localhost:3001 via

```
npm run build
npm start
```

Export static HTML/CSS/JS page via

```
npm run export
```

## Deployment

No Deployment mechanics integrated yet

## Built With

- [Next.js](https://github.com/zeit/next.js) - SSR for React

## Contributing

Please feel free to add pull requests

## Authors

- **Timothy Krechel** - _Initial work_ - [timothy.de](https://www.timothy.de)

## License

This project is licensed under the MIT License.

## Special Thanks
