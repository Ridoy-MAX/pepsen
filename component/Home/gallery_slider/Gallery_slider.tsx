import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../home.module.css';

const Gallery_slider = () => {


    const one = {
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        easing:'linear',
        slidesToScroll: 1,
    };
    const two = {
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const three = {
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const four = {
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const five = {
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div className={styles.gallery_slider}>
                <div className="col-md-12 mt-5">
                    <div className="row">
                        <div className="col-10 gx-0">
                            <div className="row ">

                                <div className=" col-9  position-relativ end-0">
                                    <div className={styles.Slider_one}>
                                    <Slider {...one}>
                                        <div className="item">
                                            <img src="c-1.png" className='w-100 rounded-4'/>
                                        </div>
                                        <div className="item">
                                            <img src="d-1.png"  className='w-100 rounded-4'/>
                                        </div>
                                    </Slider>
                                    </div>
                                    
                                </div>


                                <div className="col-3 gx-0 d-flex align-items-end">
                                    <div className="owl-carousel owl-theme ovh nft-flip w-100">
                                        <Slider {...two}>
                                            <div className="item">
                                                <img src="c-3.png" className='w-100 rounded-4' />
                                            </div>
                                            <div className="item">
                                                <img src="d-3.png"  className='w-100 rounded-4'/>
                                            </div>

                                        </Slider>
                                        {/* <div className="item"><img src="images/d-3.png" alt="banner"
                                            className="w-100 rounded-15" /></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 ">
                                    <div className="owl-carousel owl-theme ovh nft-flip ms-1 w-100">
                                        <Slider {...three}>
                                            <div className="item">
                                                <img src="c-2.png" alt="banner"
                                                    className="w-100 rounded-4" />
                                            </div>
                                            <div className="item">
                                                <img src="d-2.png" alt="banner"
                                                    className="w-100 rounded-4" />
                                            </div>

                                        </Slider>
                                        {/* <div className="item"><img src="images/d-2.png" alt="banner"
                                            className="w-100 rounded-15" /></div> */}
                                    </div>
                                </div>
                                <div className="col-6 gx-0">
                                    <div className="owl-carousel owl-theme ovh nft-flip w-100">
                                        <Slider {...four}>

                                            <div className="item"><img src="c-4.png" alt="banner"
                                                className="w-100 rounded-4" /></div>
                                            <div className="item"><img src="d-4.png" alt="banner"
                                                className="w-100 rounded-4" /></div>

                                        </Slider>
                                        {/* <div className="item"><img src="images/d-4.png" alt="banner"
                                            className="w-100 rounded-15" /></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 ">
                            <div className="row">
                            
                                    <div className="owl-carousel owl-theme ovh nft-flip w-100 ms-2">
                                        <Slider {...five}>
                                            <div className="item"><img src="c-5.png" alt="banner"
                                                className="w-100 rounded-4" /></div>
                                            <div className="item"><img src="d-5.png" alt="banner"
                                                className="w-100 rounded-4" /></div>

                                        </Slider>
                                        {/* <div className="item"><img src="images/d-5.png" alt="banner"
                                            className="w-100 rounded-15" /></div> */}
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery_slider