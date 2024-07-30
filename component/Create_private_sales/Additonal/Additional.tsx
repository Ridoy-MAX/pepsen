import React from 'react'
import styles from "../Create_private_sales.module.css";

const Additional = () => {
    return (
        <div>

            <div className="nft-wrapper pb-50 pt-50">
                <div className="container">
                    <div className={styles.Additonal}>
                    <div className="row">
                        <div className="col-md-10 m-auto">





                            <br />
                            <br />
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Add Additional Info</label>
                            <p>Let people know who you are</p>
                            <hr />

                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Logo URL*</label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                                <small>URL must end with a supported image extension png, jpg, jpeg or gif. You can upload your image at</small>
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Website*</label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Facebook </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Twitter </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Github </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Telegram </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Instagram </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Discord </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Reddit </label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Youtube Video</label>
                                <input type="text" className="form-control light-bg dark-border mt-2" />
                                <small>Input your youtube URL, or youtube video ID.</small>
                            </div>
                            <div className="mb-3 form-group">
                                <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Youtube Video</label>
                                <textarea className="form-control light-bg dark-border mt-2"> </textarea>
                            </div>
                            <br />
                            <br />
                            <button className="btn btn-block btn-primary w-100"><a >Submit</a></button>



                        </div>
                    </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Additional