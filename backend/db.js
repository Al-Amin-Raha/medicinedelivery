const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://raha:19301028@cluster0.eohpjty.mongodb.net/mediexpress?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const mediItemsCollection = mongoose.connection.db.collection("medi_items");
        const data = await mediItemsCollection.find({}).toArray();

        const mediitemCategory = mongoose.connection.db.collection("medi_items_Category");
        const catData = await mediitemCategory.find({}).toArray();

        global.medi_items = data;
        global.medi_items_Category = catData;

    } catch (err) {
        console.error("Error:", err);
    }
};

module.exports = mongoDB;
