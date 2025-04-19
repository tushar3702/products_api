const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB();
        // Optional: Clear the collection first
        await Product.deleteMany();  
        // Insert the new data
        await Product.create(ProductJson);
        console.log("Data seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.log("Error seeding data:", error.message);
        process.exit(1);
    }
};

start();
