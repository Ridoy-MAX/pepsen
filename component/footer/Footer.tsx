import React from 'react'
import styles from "./footer.module.css";
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/logo-dark.png'
export const Footer = () => {
  return (
    <div>
      <div className={styles.footer_wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-10 col-12 mt-0">
              <a className="navbar-brand" >
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={200}

                />
              </a>
              <p className="mt-3 mb-4 pe-4 ">Do not hesitate to contact us
                to say hello.Looking for your next project? Do not hesitate to contact us to say hello.</p>
              <ul className="list-group flex-row gap-3 social-icon ">
                <li className="list-group-item p-0 bg-transparent border-0"><a href="#" className="btn-icon bg-transparent rounded-0 btn btn-md btn-icon border-dark border-1">
                <i className="fa-brands fa-twitch"></i>
                  </a></li>
                <li className="list-group-item p-0 bg-transparent border-0"><a href="#" className="btn-icon bg-transparent rounded-0 btn btn-md btn-icon border-dark border-1">
                <i className="fa-brands fa-linkedin"></i>
                  </a></li>
                <li className="list-group-item p-0 bg-transparent border-0"><a href="#" className="btn-icon bg-transparent rounded-0 btn btn-md btn-icon border-dark border-1">
                <i className="fa-brands fa-twitter"></i>
                  </a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 lg-mt-3 ms-auto">
              <h4 >Products</h4>
              <ul className="list-group gap-2">
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Crypto API</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Crypto Indices</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Doodles</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 lg-mt-3 ">
              <h4 className="">Company</h4>
              <ul className="list-group gap-2">
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">About us</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Careers</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Terms of use</a></li>
                <li className="list-group-item bg-transparent border-0 p-0"><a href="#" className="rajdhani-600 text-gray-100 font-sm">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 col-12 lg-mt-3 ms-auto ">
              <h4 className="">Subscribe</h4>
              <form action="#" className="rounded-6 ovh">
                <div className=" d-flex">
                  <div className={styles.footer_input}><input type="text" placeholder="Enter your email address" /></div>
                  <div><button className={styles.submit}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.footer_end}>
              <div className="col-12 mt-50">
                <p className="py-4 text-center rajdhani-600 text-gray-100 font-sm mb-0">© 2022 starapp copyright.
                  All images are for demo purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer