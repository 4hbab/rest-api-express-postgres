const express = require('express');
const dotenv = require('dotenv');
const app = express();

// custom routes
const blogRoutes = require('./routes/routes');

dotenv.config();

// request parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use('/api/blogs', blogRoutes);

// Listening on default port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})