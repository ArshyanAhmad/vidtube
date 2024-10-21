import app from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";

const port = process.env.PORT || 8001;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port at ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });
