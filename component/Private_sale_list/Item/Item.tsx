import React from 'react';
import styles from '../Private_sale_list.module.css';

interface ItemProps {
    userImage: string;
    username: string;
    username1: string;
    username2: string;
    artworkImage: string;
    artworkName: string;
    artistImage: string;
    currentPrice: string;
    floorPrice: string;
    currentBid: string;
}

const Item: React.FC<ItemProps> = ({
    userImage,
    username,
    username1,
    username2,
    artworkImage,
    artworkName,
    artistImage,
    currentPrice,
    floorPrice,
    currentBid,
}) => {
    return (

        <div className="col-md-4">
            <div className={styles.item}>
                <div >


                    <div className={styles.two}>
                        <img src={artworkImage} alt="" />
                    </div>






                    <div className={styles.one}>
                        <div className='d-flex'>

                            <h5 className={`rajdhani-600 text-gray-900 h6 ${styles['dark-text']} d-flex lh-34 gap-1`}>
                                {username}
                            </h5>
                        </div>

                        <div className={styles.dot}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>



                    </div>

                    <div className={styles.one}>
                        <div className='d-flex'>
                            <figure className={`avater mb-0`}>
                                <img src={userImage} alt="user" className={`w-35 rounded-pill`} />
                            </figure>
                            <div>
                            <h6 className={`text-start ms-2 mb-0 pb-0 ${styles['dark-text']} rajdhani-600`}>
                                    <span className={`font-xss rajdhani-500 ${styles['dark-text']} text-gray-500 d-block`}>
                                        Created</span>

                                </h6>
                                <h5 className={`rajdhani-600 text-gray-900 h6 ${styles['dark-text']} d-flex lh-34 gap-1`}>
                                    {username2}
                                </h5>
                             
                            </div>



                        </div>
                        <div className='d-flex'>
                            <figure className={`avater mb-0`}>
                                <img src={userImage} alt="user" className={`w-35 rounded-pill`} />
                            </figure>
                            <div>
                            <h6 className={`text-start ms-2 mb-0 pb-0 ${styles['dark-text']} rajdhani-600`}>
                                    <span className={`font-xss rajdhani-500 ${styles['dark-text']} text-gray-500 d-block`}>
                                        Created</span>

                                </h6>
                                <h5 className={`rajdhani-600 text-gray-900 h6 ${styles['dark-text']} d-flex lh-34 gap-1`}>
                                    {username1}
                                </h5>
                             
                            </div>



                        </div>
                    





                    </div>

           


                    <div className={styles.four}>
                        <h6 className={`text-start ${styles['dark-text']} rajdhani-600`}>
                            <span className={`font-xss rajdhani-500 ${styles['dark-text']} text-gray-500 d-block`}>Current price</span>
                            {currentPrice}
                        </h6>
                        <h6 className={`text-center ${styles['dark-text']} rajdhani-600`}>
                            <span className={`font-xss rajdhani-500 text-gray-500 d-block`}>Floor price</span>
                            {floorPrice}
                        </h6>
                        <h6 className={`text-end ${styles['dark-text']} rajdhani-600`}>
                            <span className={`font-xss rajdhani-500 text-gray-500 d-block`}>Current Bid</span>
                            {currentBid}
                        </h6>
                    </div>
                    <div className={styles.five}>
                        <a href="#" className={`btn btn-lg btn-block lh-18 rajdhani-600 text-gray-900 font-sm bg-gray-200 rounded-pill`}>
                            Place a bid
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Item;
