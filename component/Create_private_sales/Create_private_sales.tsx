import React from 'react'
import styles from "./Create_private_sales.module.css";
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import  Before_start from "@/component/Create_private_sales/Before_start/Before_start"
import  Additonal from "@/component/Create_private_sales/Additonal/Additional"

const Create_private_sales = () => {
    return (
        <div>
            <Navbar />

        
            <Before_start />
            <Additonal />
       
       
     
        
              
          
            <Footer />
        </div>
    )
}

export default Create_private_sales