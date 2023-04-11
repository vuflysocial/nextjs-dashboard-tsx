import { Fragment, useEffect, useState } from 'react';
import { ChevronDownIcon, RefreshIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';

interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  from: string;
  to: string;
  value: string;
}

async function getLatestTransactions(): Promise<Transaction[]> {
  const apiKey = "VGVRHXFSIDVP3W9SSJ9H81ZBS3WZ1S3SW8";
  const tokenAddress = "0x5c12C812794B874fe4Fdea9A4960df599C89b8E5";
  const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${tokenAddress}&sort=desc&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

function LatestTransactions() {
  const [latestTransactions, setLatestTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLatestTransactions().then((data) => {
      setLoading(false);
      setLatestTransactions(data);
    });
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    getLatestTransactions().then((data) => {
      setLoading(false);
      setLatestTransactions(data);
    });
  };

  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden rounded-lg">
        {/* Body */}
        <div className="overflow-x-auto relative">
          <div className="flex flex-wrap items-center px-4 py-2 bg-white">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-base text-gray-900">Latest Transactions</h3>
                <button className="text-gray-600 hover:text-gray-900" onClick={handleRefresh}>
            
                </button>
              </div>
              <div className="flex flex-col">
                {latestTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8 rounded-full" src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 leading-none">{transaction.from}</p>
                      <p className="text-gray-600 text-sm">{transaction.to}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Pagination end */}
      </div>
    </div>
  );
}

export default function UserList(props: { data: any[] }) {
  return <LatestTransactions />;
}
