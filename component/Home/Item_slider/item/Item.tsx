import React from 'react';
import styles from '../../home.module.css';

interface ItemProps {
    userImage: string;
    username: string;
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
    artworkImage,
    artworkName,
    artistImage,
    currentPrice,
    floorPrice,
    currentBid,
}) => {
    return (
        <div className={styles.item}>
            <div >
                <div className={styles.one}>
                    <div className='d-flex'>
                        <figure className={`avater mb-0`}>
                            <img src={userImage} alt="user" className={`w-35 rounded-pill`} />
                        </figure>
                        <h5 className={`rajdhani-600 text-gray-900 h6 ${styles['dark-text']} d-flex lh-34 gap-1`}>
                            {username} <i className="fa-solid fa-circle-check"></i>
                        </h5>
                    </div>

                    <div className={styles.dot}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>



                </div>

                <div className={styles.two}>
                    <img src={artworkImage} alt="" />
                </div>

                <div className={styles.three}>
                    <h2 className={`rajdhani-600 text-gray-900 ${styles['dark-text']} h5`}>
                        {artworkName} <span className={`font-xss d-block text-gray-500 rajdhani-600`}>@panditcoast</span>
                    </h2>
                    <span className={`ms-auto d-flex justify-content-center w-40 h-40 mt-1 bg-gray-100 border rounded-pill`}>
                        <img src={artistImage} alt="img" className={`w-26 my-auto`} />
                    </span>
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
    );
};

export default Item;
