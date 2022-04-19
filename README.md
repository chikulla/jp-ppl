# jp-ppl

Population chart by each prefecture in Japan

based on [the requirement](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d).

using [RESAS API](https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html).

## TODO

* [ ] responsiveness: dynamic window size change
* [ ] api error handling
* [ ] unit testing
* [ ] styling
* [ ] handle `rate` on the response

## Available Scripts

In the project directory, you can run:

### `REACT_APP_RESAS_APIKEY=<your_api_key> npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `REACT_APP_RESAS_APIKEY=<your_api_key> npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

