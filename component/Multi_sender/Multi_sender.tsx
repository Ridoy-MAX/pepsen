import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import styles from "./Multi_sender.module.css"

const Multi_sender = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.Create_token}>
                    <div className="row">
                        <div className="col-md-10 m-auto">


                            <div className={styles.section_one}>
                               
                                <div className="card-body">
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Token address</label>
                                        <input type="text" className="form-control light-bg border p-3" placeholder="Exc: " />
                                    </div>
                                    
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Token address</label>
                                        <textarea  className="form-control light-bg border mt-2 p-3"
                                        rows={20}
                                        />
                                    </div>
                                    <div className="alert alert-danger">
                                        <p>
                                        Please exclude 0xD2A52F45C74b358ABE1428bC43F0ce9dDf130780 from fees, rewards, max tx amount to start sending tokens.
                                        </p>

                                    </div>
                                    <button className="btn btn-block btn-primary w-100 p-2">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Multi_sender