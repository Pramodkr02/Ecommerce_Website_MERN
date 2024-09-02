import React, { useState } from "react";
import "../DropDown/DropDown.css";
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const DropDown = (props, data) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [slectedIndex, setslectedIndex] = useState(0);
  const [slectedItem, setslectedItem] = useState("All Categories");
  const [listData, setlistData] = useState(data);
  const [listData2, setlistData2] = useState(data);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setslectedIndex(index);
    setisOpenSelect(false);
    setslectedItem(name);
  };

  const filterlist = (e) => {
    const keyword = e.target.value;
    console.log(keyword);

    const list = listData2.filter((item) => {
      return item.tolowerCase().include(keyword);
    });
    console.log(list);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectbar">
        <span onClick={openSelect}>{slectedItem}</span>{" "}
        <IoIosArrowDown onClick={openSelect} />
        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="search here.."
                onChange={filterlist}
              />
              <ul className="searchResult">
                {props.data.map((item, index) => {
                  return (
                    <li
                      onClick={() => closeSelect(index, item)}
                      key={index}
                      className={`${slectedIndex === index ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default DropDown;
