import MyListModel from "../models/myList.model.js";

export const addToMyListController = async (req, res) => {
  try {
    const userId = req.userId; //middleware
    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = req.body;
    const item = await MyListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return res.status(400).json({
        message: "Item already in my List",
      });
    }

    const myList = new MyListModel({
      userId,
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    });

    const save = await myList.save();

    return res.status(200).json({
      message: "The Product save in my list",
      error: false,
      success: true,
      data: myList,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const deleteToMyListController = async (req, res) => {
  try {
    const myListItem = await MyListModel.findById(req.params.id);

    if (!myListItem) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "The Item with this given id was not found",
      });
    }

    const deleteItem = await MyListModel.findByIdAndDelete(req.params.id);

    if (!deleteItem) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "The Item was not deleted",
      });
    }

    return res.status(200).json({
      message: "The Product is delete from my List",
      error: false,
      success: true,
      data: deleteItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
