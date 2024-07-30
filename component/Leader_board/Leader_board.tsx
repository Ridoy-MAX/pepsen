import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import styles from "./Leader_board.module.css"

const Leader_board = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className={styles.token}>
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className={styles.section_one}>
                                <table className={styles.table}>
                               
                                 
                                    <tbody>
                                        <tr>
                                            <th> 1</th>
                                            <th> 
                                            <img className="round-image-cirlce" src="https://photos.pinksale.finance/file/pinksale-logo-upload/1690947568170-9a81ebe902848cd1fc7d32ccc507de73.png" width="50px" alt="" />
                                            </th>
                                            <th> YOMPYOMP</th>
                                            <th>	2,100 BNB  Listing time: 2023.08.08 00:04</th>
                                            <th>	100% </th>
                                            <th className="d-flex justify-content-end "> <a href="#">View</a> </th>
                                        </tr>
                                        <tr>
                                            <th> 2</th>
                                            <th> 
                                            <img className="round-image-cirlce" src="https://photos.pinksale.finance/file/pinksale-logo-upload/1690947568170-9a81ebe902848cd1fc7d32ccc507de73.png" width="50px" alt="" />
                                            </th>
                                            <th> YOMPYOMP</th>
                                            <th>	2,100 BNB  Listing time: 2023.08.08 00:04</th>
                                            <th>	100% </th>
                                            <th className="d-flex justify-content-end "> <a href="#">View</a> </th>
                                        </tr>
                                        <tr>
                                            <th> 3</th>
                                            <th> 
                                            <img className="round-image-cirlce" src="https://photos.pinksale.finance/file/pinksale-logo-upload/1690947568170-9a81ebe902848cd1fc7d32ccc507de73.png" width="50px" alt="" />
                                            </th>
                                            <th> YOMPYOMP</th>
                                            <th>	2,100 BNB  Listing time: 2023.08.08 00:04</th>
                                            <th>	100% </th>
                                            <th className="d-flex justify-content-end "> <a href="#">View</a> </th>
                                        </tr>
                                        <tr>
                                            <th> 4</th>
                                            <th> 
                                            <img className="round-image-cirlce" src="https://photos.pinksale.finance/file/pinksale-logo-upload/1690947568170-9a81ebe902848cd1fc7d32ccc507de73.png" width="50px" alt="" />
                                            </th>
                                            <th> YOMPYOMP</th>
                                            <th>	2,100 BNB  Listing time: 2023.08.08 00:04</th>
                                            <th>	100% </th>
                                            <th className="d-flex justify-content-end "> <a href="#">View</a> </th>
                                        </tr>
                                     

                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Leader_board