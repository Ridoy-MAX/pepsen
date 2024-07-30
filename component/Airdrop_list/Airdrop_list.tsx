import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import Item from "@/component/Airdrop_list/Item/Item"
import styles from "./Airdrop_list.module.css";
import Link from 'next/link';

const Airdrop_list = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.Airdrop_list_section_one}>
                    <div className={styles.heading}>

                        <div className={styles.heading_one}>
                            <div className="row">
                            <div className="card-body p-0 border-0 shadown-none d-flex flex-row border-light border-bottom dark-border">
                                <h5 className="text-gray-900 font-xl rajdhani-600 my-2 lh-24 dark-text">Private Sales</h5>
                                <div className="d-flex flex-row gap-2 ms-auto">
                                    <ul className="list-group d-flex flex-row border-light dark-border border rounded-6 ovh">
                                        <li className="list-group-item border-0 dark-border border-end border-light border-2">
                                        <i className="fa-solid fa-bars"></i>
                                         </li>
                                        <li className="list-group-item">
                                        <i className="fa-solid fa-grip"></i>
                                            
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>

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


                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>


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

export default Airdrop_list