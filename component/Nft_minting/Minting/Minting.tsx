import React from 'react'
import styles from "../Nft_minting.module.css";
const Minting = () => {
    return (
        <div>
            <div className="container">
                <div className="nft-wrapper pb-50 pt-50">
                    <div className={styles.nft_minting}>
                        <div className="row">
                            <div className="col-6">
                                <div className={styles.left_section}>
                                    <figure className="mb-0"><img src="item_9.jpg" alt="user" className="img-fluid rounded-4" /></figure>
                                    <div className="card w-100 p-4 mt-3 bg-white border border-light rounded-10 flex-column d-flex dark-border light-bg">
                                        <h6 className="text-gray-900 rajdhani-700 mb-3 mt-0 dark-text">Soul Searchers</h6>
                                        <p>Soul Searchers is an innovative, education based NFT community &amp; Web3 business on the Polygon Blockchain. Our mission is to accelerate Web3 adoption, enhance the knowledge of existing Web3 users, open up new avenues for developers, empower creators, provide valuable education resources for NFT communities and be the leading hub for education when it comes to the next generation of learners, artists and workers.

                                            Searchpad platform: This is an educational platform that aims to be the go-to destination for anyone looking to dive into the world of Web3, while making the process &amp; transition as seamless and accessible as possible. There’s an array of cutting-edge functionalities, ranging from the LMS dashboard to “Learn and Earn” to the educational marketplace. Each functionality has been crafted thoughtfully.</p>
                                        <p>The LMS (learning management system): The LMS dashboard will allow us to create and deliver interactive Web3 courses to our users, whilst also being able to track your progress. Each course will provide you with a proof of learning certificate, which can be utilised to build your career in Web3. As you progress, you will also earn tokens that can be used to redeem rewards in our reward shop. This feature consists of courses based on topics such as basic Web3 knowledge, navigating Web3, understanding dApps, coding, blockchain development and much more.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className={styles.right_section}>
                                    <div className="card w-100 p-4 mt-3 bg-white border border-light rounded-10 flex-column d-flex dark-border light-bg">
                                        <div className="card-header">
                                            <h6>        Mint Stages</h6>
                                    
                                        </div>
                                        <div className="card-body">
                                            <div className="border mb-2">
                                                <div className="row d-flex m-2">
                                                    <div className="col-md-6">
                                                        <p><b>OG</b></p>
                                                        <p>3 PER WALLET • Price 33.00</p>
                                                    </div>
                                                    <div className="col-md-6 d-flex justify-content-end">
                                                      <h4>   ENDED</h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="border mb-2">
                                                <div className="row d-flex m-2">
                                                    <div className="col-md-6">
                                                        <p><b>Whitelist</b></p>
                                                        <p>3 PER WALLET • Price 35.00</p>
                                                    </div>
                                                    <div className="col-md-6 d-flex justify-content-end">
                                                       <h4>  ENDED</h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="border mb-2">
                                                <div className="row d-flex m-2">
                                                    <div className="col-md-6">
                                                        <p><b>Eligible</b>, <b>Public</b></p>
                                                        <p>Price 12.00 </p>
                                                    </div>
                                                    <div className="col-md-6 d-flex justify-content-end">
                                                    <h4>     ENDED</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <label htmlFor=""> <b> <h6>Total Minted [100%(3500/3500)] </h6> </b></label>
                                                <progress id="file" value="100" max="100"> 32% </progress>
                                                <button className="btn btn-block btn-primary mt-3">Mint</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Minting