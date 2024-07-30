import React from 'react'
import styles from "../Airdrop_list.module.css";
const Item = () => {
  return (

        
        <div className=" col-md-4">
                            <div className={styles.item}>
                                <div className="">

                                    <div className={styles.one}>
                                        <div className="d-flex flex-row w-50 gap-2">
                                            <figure className="avater mb-0"><img src="https://photos.pinksale.finance/file/pinksale-logo-upload/1686951876246-c9c2bce82b74978a3e87079f2ce6e52b.png " alt="user" className="w-35 rounded-pill" /></figure>
                                            <span className="bg-teal rounded-pill px-3 rajdhani-600 text-gray-900 font-xs py-1">Live</span>
                                        </div>
                                    </div>
                                    <div className={styles.two}>
                                        <div className="d-flex mt-2 p-1">
                                            <h2 className="rajdhani-600 text-gray-900 dark-text h5">BitMan Token Marketing Phase Airdrop </h2>
                                        </div>
                                    </div>
                                    <div className={styles.three}>
                                        <li className="">Token :  <span>BTN</span></li>
                                        <li className="">Total Token : :  <span>89,000,000,000,000,000</span></li>
                                        <li className="">Participants :  <span>0</span></li>
                                  
                                 
                                    </div>
                                    <div className={styles.four}>
                                        <div className="d-flex p-1 w-100">
                                            <a href="#" className="btn btn-lg btn-block lh-18 rajdhani-600 text-gray-900 font-sm bg-gray-200 rounded-pill">View Airdrop</a>
                                        </div>
                                    </div>





                                </div>
                            </div>

                        </div>
 
  )
}

export default Item