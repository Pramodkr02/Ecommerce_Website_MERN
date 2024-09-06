import React from "react";
import Header from "../header/header";
import styles from "../ShopingSection/shopingsection.module.css";
import Footer from "../Footer/footer";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShopingSection = () => {
  return (
    <>
      <Header />
      <div className={styles.ShopingSection}>
        <div className={styles.sectionLeft}></div>
        <div className={styles.sectionRight}>
          <Link to="/productdetail">
            <div className={styles.itemContainer}>
              <div className={styles.itemUp}>
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/headphone/w/g/r/rockerz-450-boat-original-imag6cqqh49wjfy5.jpeg?q=70"
                  alt=""
                />
              </div>

              <div className={styles.itemDown}>
                <p>boAt Rokerz 450</p>
                <p className={styles.color}>Black, On the Ear</p>
                <div className={styles.rating}>
                  <span className={styles.rateBox}>
                    <span className={styles.rate}>4.5</span>
                    <span className={styles.rateIcon}>
                      <FaStar />
                    </span>
                  </span>
                  <span className={styles.rateNumber}>(17,698)</span>
                </div>
                <div className={styles.price}>
                  <span className={styles.currPrice}>$154</span>
                  <span className={styles.oldPrice}>$999</span>
                  <span className={styles.discunt}>40% off</span>
                </div>
                <p className={styles.freeDel}>Free delivery</p>
              </div>
              <div className={styles.heart}>
                <FaHeart />
              </div>
            </div>
          </Link>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/95/88/06/240_F_695880697_HXabn3K8SvQBgIL4byDfhMByneeC11jF.jpg"
                alt=""
              />
              <div className={styles.heart}>
                <FaHeart />
              </div>
            </div>
            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/05/37/45/06/240_F_537450616_KUn52zo1JpLDgg53MKHe4cwlxXUpQmSH.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/08/64/96/240_F_608649669_wn47OBx58Y6oVl7kyzhZT9t8D0V7zdiW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/79/26/83/240_F_579268372_PfY69vNw7GtTA7iWITk1MZHWs7B6ShQW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/33/69/25/240_F_533692525_TPZJNfYBOHVcmt4IVSMOqipDWHqojepA.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/95/88/06/240_F_695880697_HXabn3K8SvQBgIL4byDfhMByneeC11jF.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/05/37/45/06/240_F_537450616_KUn52zo1JpLDgg53MKHe4cwlxXUpQmSH.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/08/64/96/240_F_608649669_wn47OBx58Y6oVl7kyzhZT9t8D0V7zdiW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/79/26/83/240_F_579268372_PfY69vNw7GtTA7iWITk1MZHWs7B6ShQW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/95/88/06/240_F_695880697_HXabn3K8SvQBgIL4byDfhMByneeC11jF.jpg"
                alt=""
              />
              <div className={styles.heart}>
                <FaHeart />
              </div>
            </div>
            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/05/37/45/06/240_F_537450616_KUn52zo1JpLDgg53MKHe4cwlxXUpQmSH.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/08/64/96/240_F_608649669_wn47OBx58Y6oVl7kyzhZT9t8D0V7zdiW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/79/26/83/240_F_579268372_PfY69vNw7GtTA7iWITk1MZHWs7B6ShQW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/33/69/25/240_F_533692525_TPZJNfYBOHVcmt4IVSMOqipDWHqojepA.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/95/88/06/240_F_695880697_HXabn3K8SvQBgIL4byDfhMByneeC11jF.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/05/37/45/06/240_F_537450616_KUn52zo1JpLDgg53MKHe4cwlxXUpQmSH.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t3.ftcdn.net/jpg/06/08/64/96/240_F_608649669_wn47OBx58Y6oVl7kyzhZT9t8D0V7zdiW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/79/26/83/240_F_579268372_PfY69vNw7GtTA7iWITk1MZHWs7B6ShQW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemUp}>
              <img
                src="https://t4.ftcdn.net/jpg/05/79/26/83/240_F_579268372_PfY69vNw7GtTA7iWITk1MZHWs7B6ShQW.jpg"
                alt=""
              />
            </div>

            <div className={styles.itemDown}>
              <p>boAt Rokerz 450</p>
              <p className={styles.color}>Black, On the Ear</p>
              <div className={styles.rating}>
                <span className={styles.rateBox}>
                  <span className={styles.rate}>4.5</span>
                  <span className={styles.rateIcon}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.rateNumber}>(17,698)</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currPrice}>$154</span>
                <span className={styles.oldPrice}>$999</span>
                <span className={styles.discunt}>40% off</span>
              </div>
              <p className={styles.freeDel}>Free delivery</p>
            </div>
            <div className={styles.heart}>
              <FaHeart />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ShopingSection;
