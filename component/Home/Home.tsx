import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import Textscroll from "./TextScroll"
import Item_slider from "./Item_slider/Item_slider"
import Gallery_slider from "./gallery_slider/Gallery_slider"
import styles from "./home.module.css";
import GlobalCss from "../../styles/variables.module.css";

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className={styles.home_section_one}>
                    <div className="row ">
                        <div className="col-md-12">
                            <h1 className="display9-size lh-08 my-4 py-lg-2 racing-700 dark-text text-uppercase">Solution &amp; work
                            </h1>
                        </div>

                        <div className="col-md-12">
                            <hr className={styles.border} />
                        </div>


                        <div className="col-md-6">
                            <div >
                                <p >Eros donec ac odio tempor
                                    orci dapibus ultrices in iaculis. Orci phasellus egestas tellus rutrum tellus. Sem
                                    fringilla ut morbi tincidunt. Eros donec ac odio tempor orci dapibus ultrices in
                                    iaculis.</p>
                            </div>
                            <div className="d-flex flex-row gap-3">
                                <a href="#" className={styles.dark_btn}>Start
                                    Now</a>
                                <a href="#" className={styles.brand_btn}>Join
                                    as creater</a>
                            </div>
                        </div>


                        <div className="col-md-6 d-flex justify-content-between">
                            <img src="pattern-4.png" className="w-250 ms-n5 d-none d-lg-block" />
                            <div className={styles.connect_people}>
                                <h4 className="rajdhani-600 font-md lh-24 text-gray-900 dark-text">Connect with <br />more people
                                </h4>
                                <div className="d-flex justify-content-start mt-4">
                                    <figure ><img src="avater-4.png" alt="avater" className={styles.connect_people_one} /></figure>
                                    <figure ><img src="avater-3.png" alt="avater" className={styles.connect_people_two} /></figure>
                                    <figure ><img src="avater-2.png" alt="avater" className={styles.connect_people_three} /></figure>
                                    <figure ><img src="n-2.png" alt="n-2.png" className={styles.connect_people_four} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <Gallery_slider />

                <div className={styles.home_section_two}>

                    <div className="col-md-12 my-5">
                        <div className="row">
                            <div className="col-md-2 col-6 text-center"><img src="brand-1.png" alt="bannd" className="invert" /></div>
                            <div className="col-md-2 col-6 text-center"><img src="brand-2.png" alt="bannd" className="invert" /></div>
                            <div className="col-md-2 col-6 text-center"><img src="brand-3.png" alt="bannd" className="invert" /></div>
                            <div className="col-md-2 col-6 text-center"><img src="brand-4.png" alt="bannd" className="invert" /></div>
                            <div className="col-md-2 col-6 text-center"><img src="brand-1.png" alt="bannd" className="invert" /></div>
                            <div className="col-md-2 col-6 text-center"><img src="brand-2.png" alt="bannd" className="invert" /></div>
                        </div>
                    </div>

                </div>

                <div className={styles.home_section_three}>
                    <div className={styles.heading}>

                        <div className="col-12 d-flex justify-content-between">
                            <div className={styles.left}>
                                <h2>Our top collections in</h2>
                                <select className="nice-select rajdhani-600 h1 border-0 text-current bg-transparent mb-0 ps-2">
                                    <option data-display="1 day"> 7 Day's</option>
                                    <option value="2">15 Day's</option>
                                    <option value="3">30 Day's</option>
                                </select>
                            </div>
                            <div className={styles.right}>
                                <select className="form-select rounded-10 w-150 font-sm light-bg dark-border dark-text text-gray-900 rajdhani-600 bg-transparent ms-auto" aria-label="select example">
                                    <option value="">Sort by</option>
                                    <option value="1">High to Low</option>
                                    <option value="2">Low to High</option>
                                    <option value="3">Price</option>
                                </select>
                            </div>
                        </div>



                    </div>


                    <Item_slider />
                </div>



            </div>





            <div className={styles.Home_TextScroll}>
                <Textscroll />
            </div>


            <Footer />

        </div>
    )
}

export default Home