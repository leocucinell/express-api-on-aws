const mongoose = require("mongoose");
const connectionString = process.env.DBURI || "mongodb://localhost:27017/SampleAPI"

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//listeners
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${connectionString}`)
});

mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connected error: ${err}`)
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});