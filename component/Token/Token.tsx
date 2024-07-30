import React from 'react'
import Navbar from "@/component/navbar/navbar"
import Footer from "@/component/footer/Footer"
import styles from "./Token.module.css";

const Token = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className={styles.token}>
            <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className={styles.section_one}>
                            <table className={styles.table}>
                                <thead>
                                  <tr>
                                    <th scope="col">Token</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th>PEPE China</th>
                                    <td>19,985,450 PEPE </td>
                                    <td className="d-flex justify-content-end"> <a href="#">View</a> </td>
                                  </tr>
                                  <tr>
                                    <th>PEPE China</th>
                                    <td>19,985,450 PEPE </td>
                                    <td className="d-flex justify-content-end"> <a href="#">View</a> </td>
                                  </tr>
                                  <tr>
                                    <th>PEPE China</th>
                                    <td>19,985,450 PEPE </td>
                                    <td className="d-flex justify-content-end"> <a href="#">View</a> </td>
                                  </tr>
                                  <tr>
                                    <th>PEPE China</th>
                                    <td>19,985,450 PEPE </td>
                                    <td className="d-flex justify-content-end"> <a href="#">View</a> </td>
                                  </tr>
                                  <tr>
                                    <th>PEPE China</th>
                                    <td>19,985,450 PEPE </td>
                                    <td className="d-flex justify-content-end"> <a href="#">View</a> </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
            </div>
    			
    		</div>
        <Footer/>
    </div>
  )
}

export default Token