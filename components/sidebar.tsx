import Link from 'next/link'
import {
  Squares2X2Icon,
  TruckIcon,
  WalletIcon,
  FolderOpenIcon,
  PrinterIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white h-full transition-all duration-300 border-r z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>
          <li>
            <Link href="/https://meloai.netlify.app/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Use MeloGPT</span>
            </Link>
          </li>
          <li>
            <Link href="/https://like-melo-mint.netlify.app/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <WalletIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Like Melo NFT MINT</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
            </Link>
          </li>
          <li>
            <Link href="/https://like-melo-nft-gate.vercel.app/login" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <TruckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">NFT GATED DAPP</span>
            </Link>
          </li>
          <li>
            <Link href="/https://staking-app-melo.herokuapp.com/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">STAKING DAPP</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1</span>
            </Link>
          </li>

          <li>
            <Link href="/https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <PrinterIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Twitter</span>
            </Link>
          </li>

          <li>
            <Link href="/https://t.me/meloinuofficial" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Telegram</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1</span>
            </Link>
          </li>

          <li>
            <Link href="/https://melo-inu.gitbook.io/whitepaper/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Whitepaper V2</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1</span>
            </Link>
          </li>

          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
            </div>
          </li>
          <li>
            <Link href="/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <UserGroupIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">...</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <CogIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
            </Link>
          </li>
        </ul>



        <div className="px-3 hidden md:block">
          <div className="overflow-hidden group relative rounded-lg flex justify-center items-center">
            <Link className="block w-full relative z-10 rounded-lg bg-slate-100 sm:p-6" href="/">
              <p className="mt-2 text-slate-500 text-sm">Powered by:</p>
              <h1>MELO INU</h1>
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Melo Inu Dashboad gives you the best experience with all the features you need for
                  to access the Melo Inu ecosytem.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs text-gray-500">Copyright @2023</p>
      </div>
    </div>
  );
}
