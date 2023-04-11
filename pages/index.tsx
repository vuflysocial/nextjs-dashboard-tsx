import Head from 'next/head'
import { MainNavbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { Address } from '../widgets/address'
import { ContactForm } from '../widgets/contact-form'
import { ActiveOrders } from '../widgets/active-orders'
import  UserList from '../widgets/user-list'
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
          <div>
              <div className="flex-initial max-sm:w-full w-3/5 pl-3 ">
                <GoogleMappage />
                {/* <ChartWidget /> */}
              </div>
            </div>
          </div>


          {/* <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">    
          <SocialTraffic />
          <RecentActivities />
        </div> */}

          <UserList data={data} />

          
          
        </div>
      </div>
    </>
  )
}

