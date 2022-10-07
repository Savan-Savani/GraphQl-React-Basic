const express = require("express")
const { graphqlHTTP } = require('express-graphql')
const schema = require("./schema/schema")
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/gql");
mongoose.connection.once('open', () => {
    console.log("connected to database");
})

// app.use('/graphql')
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("now listening on port 4000");
})