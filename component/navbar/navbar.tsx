import Link from "next/link";

import styles from "./navbar.module.css";
import Image from 'next/image'
import logo from '../../public/logo-dark.png'
import { useState, useEffect } from 'react';
const NavBar = () => {

  

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <div >
        <header className={styles.header}>
          <i
            className={`fa-solid fa-bars ${styles.menuToggle}`}
            onClick={handleMenuToggle}
          ></i>
          <Link href="/" className={styles.header__logo}>
            <div className={styles.logo}>
              <img src="logo.svg" alt="" />
            </div>
          </Link>

          <i className={`fa-regular fa-user ${styles.menuser}`}></i>





          <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
            <div className="sm_none">

              <div className="container-fluid">
                <div className="row">

                  <div className="col-md-11 m-auto">
                    <div className={styles.menu}>

                      <a className={styles.close}>
                        <i
                          className={`fa-solid fa-xmark ${styles.menuToggle}`}
                          onClick={handleMenuToggle}
                        ></i>
                      </a>



                      <div className={styles.nav_item}>
                        <ul className={styles.list}>
                          <li>
                            <Link href="/">HOME</Link>
                          </li>
                          <li>
                            <Link href="/Nft_minting">NFT MINTING LIVE</Link>
                          </li>
                          <li className={styles.menu_item_has_children}>
                            <Link href="">PRIVATE SALES</Link>
                            <i className="fa-solid fa-sort-down"></i>

                            <ul className={styles.sub_menu}>
                              <li className={styles.menu_item}><Link href="/Create_private_sales">Create Private
                                Sales</Link></li>
                              <li className={styles.menu_item}><Link href="/Private_sale_list">Private Sales
                                List</Link></li>
                            </ul>
                          </li>
                          <li className={styles.menu_item_has_children}>
                            <Link href="">AIRDROP</Link>
                            <i className="fa-solid fa-sort-down"></i>

                            <ul className={styles.sub_menu}>
                              <li className={styles.menu_item}>
                                <Link href="/Create_airdrop">Create  Airdrop
                                </Link>
                              </li>
                              <li className={styles.menu_item}>
                                <Link href="/Airdrop_list">Airdrop
                                  List</Link>
                              </li>
                            </ul>
                          </li>


                        </ul>
                      </div>




                      <div className="d-flex justify-content-center">
                        <Link href="/">

                          <Image
                            src={logo}
                            alt="Picture of the author"
                            width={200}

                          />

                        </Link>
                      </div>

                      <div className={styles.nav_item}>
                        <ul className={styles.list}>

                          <li className={styles.menu_item_has_children}>
                            <Link href="">    TOKEN LOCKING</Link>
                            <i className="fa-solid fa-sort-down"></i>

                            <ul className={styles.sub_menu}>
                              <li className={styles.menu_item}>
                                <Link href="/Create_token">Create   Token
                              </Link>
                              </li>
                              <li className={styles.menu_item}><Link href="/Token">Token</Link></li>
                              <li className={styles.menu_item}><Link href="/Token">Liquidity</Link></li>
                            </ul>
                          </li>

                          <li>
                            <Link href="/Multi_sender">
                              MULTI-SENDER
                            </Link>
                          </li>
                          <li>
                            <Link href="/Leader_board">
                              LEADERBOARDS
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="" className={styles.them} onClick={() => setDarkMode(!darkMode)}>
                              <i className="fa-regular fa-sun"></i>
                       
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </nav>
        </header>
      </div>


    </>
  );
};

export default NavBar;
