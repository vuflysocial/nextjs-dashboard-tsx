import Head from 'next/head'
import Image from 'next/image'
import { MainNavbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { Address } from '../widgets/address'
import { ContactForm } from '../widgets/contact-form'
import { ActiveOrders } from '../widgets/active-orders'
import UserList from '../widgets/user-list'
import { GoogleMappage } from '../widgets/google-map'
import { Overview } from '../widgets/overview'
import data from "../data/profile.json";


export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Melo Inu</title>
        <meta name="description" content="Melo inu Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
        <MainNavbar />
        <Sidebar />
        <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
          <Overview />
          <div className="flex-initial max-sm:w-full w-3/5 pl-3">
            <GoogleMappage />
          </div>
          <UserList data={data} />
          <div className="coinmarketcap-currency-widget"
               data-currencyid="24299"
               data-base="USD"
               data-secondary=""
               data-ticker="true"
               data-rank="true"
               data-marketcap="true"
               data-volume="true"
               data-statsticker="true"
               data-stats="USD">     
            <div style={{ border: '2px solid #e1e5ea', borderRadius: '10px', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", minWidth: '285px' }}>      
              <div style={{ display: 'flex', padding: '12px 0px' }}>         
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: '46px', height: '46px'  }} src="https://i.postimg.cc/G3zJ7nWj/logo.png" alt= 'image' />
                </div>       
                <div style={{ width: '67%', border: 'none', textAlign: 'left', lineHeight: '1.4' }}>           
                  <span style={{ fontSize: '18px' }}>
                    <a  rel="noopener" href="https://coinmarketcap.com/currencies/melo/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=www.tokenmarketcap.org&amp;utm_content=melo" target="_blank"  style={{ textDecoration: 'none', color: 'rgb(16, 112, 224)'  }}>
                      Melo Inu (MELO)
                    </a>
                  </span>
                  <br />             
                  <span style={{ fontSize: '16px' }}>               
                    <span style={{ fontSize: '20px', fontWeight: '500' }}>$0.00000000826849</span>               
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>USD</span>                
                    <span style={{ marginLeft: '6px', fontWeight: '500' }}>
                      <span style={{ color: '#009e73' }}>(17.30%)</span>                             
                    </span>          
                  </span>
                </div>    
              </div>
              <div style={{ borderTop: '1px solid #e1e5ea', clear: 'both' }}>                
                <div style={{ textAlign: 'center', float: 'left', width: '33%', fontSize: '12px', padding: '12px 0', borderRight: '1px solid #e1e5ea', lineHeight: '1em' }}>
                  RANK<br />
                  <br />                      
                  <span style={{ fontSize: '18px' }}>4622</span>
   
                                             </div>                 
                                              <div style={{ textAlign: 'center', float: 'left', width: '33%', fontSize: '12px' , padding: '12px 0 16px 0' , borderRight: '1px solid #e1e5ea' , lineHeight: '1em' }}> 
                                                 MARKET CAP<br>
                                                 </br>                     
                                                  <span style={{ fontSize: '16px' }}>$?
                                                   <span style={{ fontSize: '12px' }}>USD</span></span> 
                                                    </div>                 
                                                     <div style={{textAlign: 'center' , float: 'left' , width: '33%' , fontSize: '12px' , padding: '12px 0 16px 0' , lineHeight: '1em' }}> VOLUME
                                                      <br>
                                                      </br>                    
                                                        <span style={{ fontSize: '16px' }}>$3.473 K <span style={{ fontSize: '12px' }}>USD</span>
                                                      </span>                  </div></div>
                                                        <div style={{ borderTop: '1px solid #e1e5ea' , textAlign: 'center' , clear: 'both' , fontSize: '12px' , fontStyle: 'italic' , padding: '8px 0' }}>   
                                                         <a  rel="noopener" href="https://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=www.tokenmarketcap.org&amp;utm_content=melo" target="_blank"
                                                          style={{ textDecoration: 'none' , color: 'rgb(16, 112, 224)' }}>Powered by Melo Inu</a>  </div>
                                                          </div>
                                                          </div>
                                                          
          
          
        </div>
      </div>
    </>
  )
}
