import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./home.scss"

const Home = () => {
  return (
    <>
    <div className='home'>
        <Navbar />
        <div className='container'>
            <div>CREATE</div>
            <div>
                <select>
                    <option className='option' value="">INVOICE</option>
                    <option className='option' value="">Sales Invoice</option>
                    <option className='option' value="">Delivery Chellan</option>
                    <option className='option' value="">Credit Note(Sales Return)</option>
                    <option className='option' value="">Purchase Invoice</option>
                    <option className='option' value="">Debit Note(Purchase Return)</option>
                </select>
            </div>
            <div>ESTIMATES</div>
            <div>INCOME</div>
            <div>VOUCHERS</div>
            <div>CASHBACK</div>
            <div>PAYROLL</div>
            <div>REPORT</div>
            <div>FINALAC</div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home