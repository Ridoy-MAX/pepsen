import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../home.module.css';
import Item from "./item/Item"
const ItemSlider = () => {

    const items = {
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className={`row ${styles['mt-lg-5']} ${styles['mt-3']}`}>
                <div className="col-12">

                    <Slider {...items}>
                        <div>
                            <Item
                                userImage="artist-2.jpg"
                                username="The Poser Party"
                                artworkImage="image-1.jpg"
                                artworkName="Growverse#2"
                                artistImage="artist-2.jpg"
                                currentPrice="0.987ETH"
                                floorPrice="2.27ETH"
                                currentBid="1.73ETH"
                            />
                        </div>
                        <div>
                            <Item
                                userImage="artist-2.jpg"
                                username="@panditcoast"
                                artworkImage="image-1.jpg"
                                artworkName="Growverse#2"
                                artistImage="artist-2.jpg"
                                currentPrice="0.987ETH"
                                floorPrice="2.27ETH"
                                currentBid="1.73ETH"
                            />
                        </div>
                        <div>
                            <Item
                                userImage="artist-2.jpg"
                                username="@panditcoast"
                                artworkImage="image-1.jpg"
                                artworkName="Growverse#2"
                                artistImage="artist-2.jpg"
                                currentPrice="0.987ETH"
                                floorPrice="2.27ETH"
                                currentBid="1.73ETH"
                            />
                        </div>
                        <div>
                            <Item
                                userImage="artist-2.jpg"
                                username="@panditcoast"
                                artworkImage="image-1.jpg"
                                artworkName="Growverse#2"
                                artistImage="artist-2.jpg"
                                currentPrice="0.987ETH"
                                floorPrice="2.27ETH"
                                currentBid="1.73ETH"
                            />
                        </div>
                        <div>
                            <Item
                                userImage="artist-2.jpg"
                                username="@panditcoast"
                                artworkImage="image-1.jpg"
                                artworkName="Growverse#2"
                                artistImage="artist-2.jpg"
                                currentPrice="0.987ETH"
                                floorPrice="2.27ETH"
                                currentBid="1.73ETH"
                            />
                        </div>
                      



                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ItemSlider;
