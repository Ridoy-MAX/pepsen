import React from 'react'
import styles from "./Nft_minting.module.css";
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import Minting from "@/component/Nft_minting/Minting/Minting"
import Subscribe from "@/component/Nft_minting/Subscribe/Subscribe"
const Nft_minting = () => {
    return (
        <div>
            <Navbar />
            <Minting />
            <Subscribe />






       
            <Footer />
        </div>
    )
}

export default Nft_minting