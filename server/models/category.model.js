import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
      },
    ],
    parantCatName: {
      type: String,
    },
    parentId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("category", categorySchema);

export default CategoryModel;
