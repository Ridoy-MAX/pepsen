import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import Subscribe from "@/component/Nft_minting/Subscribe/Subscribe"
import styles from "./Create_airedrop.module.css";


const Create_airdrop = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className={styles.Create_airdrop}>
                <div className="nft-wrapper pb-50 pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3 form-group">
                                    <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Token address*</label>
                                    <input type="text" className="form-control light-bg dark-border mt-2 p-2" placeholder="Exc: PinkMoon" />
                                    <div>
                                    <small>Create airdrop fee: 50 MATIC</small>
                                    </div>
                                    <div>
                                    <button className="btn btn-block btn-primary w-100 p-2">Create</button>
                                    </div>
                                   
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
          
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Create_airdrop