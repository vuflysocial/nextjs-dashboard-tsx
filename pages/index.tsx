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
          <div>
          <iframe width="450" height="540" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=dark&padding=16&chainId=56&inputAddress=0x5c12c812794b874fe4fdea9a4960df599c89b8e5">

          </iframe>
          </div>
          <div className="flex-initial max-sm:w-full w-3/5 pl-3">
            
            <GoogleMappage />
          </div>
          <UserList data={data} />
          

          <div>
          <iframe width="100%" height="1000" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/bnb-0x5c12c812794b874fe4fdea9a4960df599c89b8e5?theme=light&padding=16&chart=1&trades=1"></iframe>
          </div>
          </div>
      </div>
    </>
  )
}
