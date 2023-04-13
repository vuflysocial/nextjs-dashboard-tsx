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
import Stylesheet from "../styles/Home.module.css"

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
          <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
<h1>
  please be patient while maintnence is happening to the dashboard ...
</h1>
          </div>
          </div>
          </div>
      
    </>
  )
}
