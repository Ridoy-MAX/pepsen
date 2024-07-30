import React from 'react'
import styles from "../Create_private_sales.module.css";

const Before_start = () => {
    return (
        <div>
            <div className="container">
                <div className="col-md-10 m-auto">
                <div className={styles.Before_start}>
                    <div className="row">
                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Before you start</label>
                        <p>Input your awesome title and choose the currency</p>
                        <hr />

                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Title*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" placeholder="Exc: this is my private sales" />
                            <small>Pool creation fee: 100 MATIC</small>
                        </div>
                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Currency *</label>
                        <div className="form-check mt-2 mb-2 d-flex gap-2">
                            <input type="radio" className="form-check-input" name="customCheckb18754" id="customCheckb18754" />
                            <label className="form-check-label size-sm font-sm text-gray-800 dark-text lh-26 rajdhani-600 d-flex w-100" htmlFor="customCheckb18754"> MATIC </label>
                        </div>
                        <div className="form-check mt-2 mb-2 d-flex gap-2">
                            <input type="radio" className="form-check-input" name="customCheckb18754" id="customCheckb18754" />
                            <label className="form-check-label size-sm font-sm text-gray-800 dark-text lh-26 rajdhani-600 d-flex w-100" htmlFor="customCheckb18754"> USDT </label>
                        </div>
                        <div className="form-check mt-2 mb-2 d-flex gap-2">
                            <input type="radio" className="form-check-input" name="customCheckb18754" id="customCheckb18754" />
                            <label className="form-check-label size-sm font-sm text-gray-800 dark-text lh-26 rajdhani-600 d-flex w-100" htmlFor="customCheckb18754"> USDC </label>
                        </div>
                        <small>Users will pay with MATIC for your token</small>
                        <br />
                        <br />





                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Private Sale</label>
                        <p>Enter the launchpad information that you want to raise , that should be enter all details about your presale</p>
                        <hr />
                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Whitelist *</label>
                        <div className="form-check mt-2 mb-2 d-flex gap-2">
                            <input type="radio" className="form-check-input" name="whitelested" id="customCheckb18754" />
                            <label className="form-check-label size-sm font-sm text-gray-800 dark-text lh-26 rajdhani-600 d-flex w-100" htmlFor="customCheckb18754"> Disabled </label>
                        </div>
                        <div className="form-check mt-2 mb-2 d-flex gap-2">
                            <input type="radio" className="form-check-input" name="whitelested" id="customCheckb18754" />
                            <label className="form-check-label size-sm font-sm text-gray-800 dark-text lh-26 rajdhani-600 d-flex w-100" htmlFor="customCheckb18754"> Enabled </label>
                        </div>
                        <small>You can enable/disable whitelist anytime</small>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Softcap (USDT)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />
                            <small>Softcap must be &gt;= 50% of Hardcap!</small>
                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">HardCap (USDT)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Minimum buy (USDT)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Maximum buy (USDT)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>
                        <br />
                        <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Select start time &amp; end time (UTC)*</label>

                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Start time (UTC)*</label>
                            <input type="date" className="form-control light-bg dark-border mt-2" />

                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">End time (UTC)*</label>
                            <input type="date" className="form-control light-bg dark-border mt-2" />

                        </div>

                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">First Fund Release For Project (%)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Fund Vesting Period Each Cycle (days)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>
                        <div className="mb-3 form-group">
                            <label className="form-label font-md rajdhani-700 text-gray-900 dark-text lh-18">Fund Release Each Cycle (percent)*</label>
                            <input type="text" className="form-control light-bg dark-border mt-2" value="0" />

                        </div>

                    </div>
                </div>

                </div>

              
            </div>
        </div>
    )
}

export default Before_start