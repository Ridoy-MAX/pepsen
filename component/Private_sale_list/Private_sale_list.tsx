import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import Item from "@/component/Private_sale_list/Item/Item"
import styles from "./Private_sale_list.module.css";
// import variablesStyles from '../../styles/variables.module.css';
import Link from 'next/link';

const Private_sale_list = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.private_section_one}>
                    <div className={styles.heading}>

                        <div className="col-12 d-flex justify-content-between">
                            <div className='d-flex justify-content-between '>

                                <div className={styles.right}>
                                    <select className="form-select rounded-10 w-150 font-sm light-bg dark-border dark-text text-gray-900 rajdhani-600 bg-transparent ms-auto" aria-label="select example">
                                        <option value="">Relavence</option>
                                        <option value="1">High to Low</option>
                                        <option value="2">Low to High</option>
                                        <option value="3">Price</option>
                                    </select>
                                </div>

                                <div className={styles.right}>
                                    <select className="form-select rounded-10 w-150 font-sm light-bg dark-border dark-text text-gray-900 rajdhani-600 bg-transparent ms-auto" aria-label="select example">
                                        <option value="">Cateogry</option>
                                        <option value="1">High to Low</option>
                                        <option value="2">Low to High</option>
                                        <option value="3">Price</option>
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

                                <div className={styles.right}>
                                    <select className="form-select rounded-10 w-150 font-sm light-bg dark-border dark-text text-gray-900 rajdhani-600 bg-transparent ms-auto" aria-label="select example">
                                        <option value="">On sale</option>
                                        <option value="1">High to Low</option>
                                        <option value="2">Low to High</option>
                                        <option value="3">Price</option>
                                    </select>
                                </div>
                            </div>



                            <div className={styles.right}>
                                <div className={styles.filter} >
                                    <h4 >Filter</h4>
                                    <i className="fa-solid fa-filter"></i>

                                </div>
                            </div>

                        </div>



                    </div>


                    <div className="row">
                        <Item
                            userImage="artist-2.jpg"
                            username="The Poser Party"
                            username1="@moonbird"
                            username2="@panditcas"
                            artworkImage="image-1.jpg"
                            artworkName="Growverse#2"
                            artistImage="artist-2.jpg"
                            currentPrice="0.987ETH"
                            floorPrice="2.27ETH"
                            currentBid="1.73ETH"
                        />

<Item
                            userImage="artist-2.jpg"
                            username="The Poser Party"
                            username1="@moonbird"
                            username2="@panditcas"
                            artworkImage="image-1.jpg"
                            artworkName="Growverse#2"
                            artistImage="artist-2.jpg"
                            currentPrice="0.987ETH"
                            floorPrice="2.27ETH"
                            currentBid="1.73ETH"
                        />

<Item
                            userImage="artist-2.jpg"
                            username="The Poser Party"
                            username1="@moonbird"
                            username2="@panditcas"
                            artworkImage="image-1.jpg"
                            artworkName="Growverse#2"
                            artistImage="artist-2.jpg"
                            currentPrice="0.987ETH"
                            floorPrice="2.27ETH"
                            currentBid="1.73ETH"
                        />

<Item
                            userImage="artist-2.jpg"
                            username="The Poser Party"
                            username1="@moonbird"
                            username2="@panditcas"
                            artworkImage="image-1.jpg"
                            artworkName="Growverse#2"
                            artistImage="artist-2.jpg"
                            currentPrice="0.987ETH"
                            floorPrice="2.27ETH"
                            currentBid="1.73ETH"
                        />

<Item
                            userImage="artist-2.jpg"
                            username="The Poser Party"
                            username1="@moonbird"
                            username2="@panditcas"
                            artworkImage="image-1.jpg"
                            artworkName="Growverse#2"
                            artistImage="artist-2.jpg"
                            currentPrice="0.987ETH"
                            floorPrice="2.27ETH"
                            currentBid="1.73ETH"
                        />
                    </div>

                    <div className='row'>
                        <div className={styles.pagination}>
                            <div className={styles.dot}>
                                <Link href="">
                                    Prev
                                </Link>
                            </div>
                            <div className={`${styles.dot} ${styles.active} `}>
                                <Link href="">
                                    1
                                </Link>
                            </div>
                            <div className={styles.dot}>
                                <Link href="">
                                    2
                                </Link>
                            </div>
                            <div className={styles.dot}>
                                <Link href="">
                                    3
                                </Link>
                            </div>
                            <div className={styles.dot}>
                                <Link href="">
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Private_sale_list