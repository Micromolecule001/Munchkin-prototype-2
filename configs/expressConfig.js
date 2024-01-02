import Express from "express";

const app = Express();

app.set('view engine', 'ejs');
app.use(Express.urlencoded({ extended: true })); // for handling data from HTML-form
app.use(Express.json()); // for JSON
app.use(Express.static('public'));

export default app;