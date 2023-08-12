import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true
        }
    },
    { timestamps: true}
)

export default mongoose.model("Categories", CategoriesSchema);
