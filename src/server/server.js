import express from 'express';
import {Header} from "../shared/Header";
import * as ReactDOM from "react-dom/server";
import {indexTemplate} from "./indexTemplate";

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Header()))
    )
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})