const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(con.connection);
    });

const app = require('./app');

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
