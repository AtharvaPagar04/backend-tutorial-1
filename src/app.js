import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
// cors is used to allow cross origin requests mainly for the front end to access the backend

app.use(express.json({ limit: '14kb' }));
// express.json() is used to parse the incoming request body

app.use(express.urlencoded({ extended: true, limit: '14kb' }));
// express.urlencoded() is used to parse the incoming request body

app.use(express.static('public'));
// express.static() is used to serve the static files]

app.use(cookieParser());
// cookieParser() is used to parse the incoming request cookies ,can access or set the cookies in the request object

export { app };
