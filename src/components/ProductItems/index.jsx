import "../ProductItems/styles.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/navigation";

import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

const ProductItem = () => {
  const [isOPenProductMOdel, setIsOPenProductMOdel] = useState(false);

  const viewPoductDetails = (id) => {
    setIsOPenProductMOdel(true);
  };

  const closeProductModel = () => {
    setIsOPenProductMOdel(false);
  };
  return (
    <>
      <div className="productItem">
        <div className="imagWrapper">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/q/q/-original-imagfh9vbxgghxy4-bb.jpeg?q=70"
            alt=""
          />
          <span className="badge">29%</span>

          <div className="actions">
            <Button onClick={() => viewPoductDetails()}>
              <AiOutlineFullscreen />
            </Button>

            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
      </div>
      {/* {isOPenProductMOdel == true && (
        <ProductModel closeProductModel={closeProductModel} />
      )} */}
    </>
  );
};

export default ProductItem;
