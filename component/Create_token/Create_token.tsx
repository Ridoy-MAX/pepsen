import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import styles from "./Create_token.module.css";
const Create_token = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.Create_token}>
                    <div className="row">
                        <div className="col-md-10 m-auto">


                            <div className={styles.section_one}>
                                <div className="card-header">
                                    <h1>
                                    Create your lock
                                    </h1>
                                 
                                </div>
                                <div className="card-body">
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Token or LP Token address*</label>
                                        <input type="text" className="form-control light-bg border p-3" placeholder="Exc: this is my private sales" />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Title</label>
                                        <input type="text" className="form-control light-bg border mt-2 p-3" placeholder="Exc: this is my private sales" />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Amount*</label>
                                        <input type="text" className="form-control light-bg border mt-2 p-3" placeholder="Exc: this is my private sales" />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Lock until (UTC time)*</label>
                                        <input type="text" className="form-control light-bg border mt-2 p-3" placeholder="Exc: this is my private sales" />
                                    </div>
                                    <div className="alert alert-danger">
                                        <p>
                                            Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx amount to start locking tokens.
                                            We don't support rebase tokens.
                                        </p>

                                    </div>
                                    <button className="btn btn-block btn-primary w-100 p-3"><b>Lock</b></button>
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

export default Create_token