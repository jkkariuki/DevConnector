const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mongoURI');


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useFindAndModify:false,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log("Connected MongoDB...")
    } catch(err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }

}

module.exports = connectDB