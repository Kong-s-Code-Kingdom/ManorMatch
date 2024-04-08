/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

const Vendors = ({ setSelectedVendor, goToNextPage }) => {

  // populate vendors
  // give each an onclick func
  // update state with selected vendor

  const [vendors, setVendors] = useState([]);
  const [category, setCategory] = useState('Personal Chef');

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
    goToNextPage();
  }

  useEffect(() => {
    axios.get('http://localhost:3000/vendors', {
      params: {
        category: 'Personal Chef'
      }
    })
    .then((response) => {
    // setModalIsOpen(true);
    setVendors(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  // on hover of photo set border

  return (
    <div>
      <div className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto">
        <view className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto overflow-auto">
          <h1 className="text-4xl">Select a {category}</h1>
          <div className="grid grid-cols-3 gap-4 overflow-auto">
            {vendors.map((vendor, index) => {
              return (
                <div key={index} onClick={() => handleVendorClick(vendor)} className="flex-none w-64">
                  <img src={vendor.photo} alt="Vendor Logo" className="hover:scale-110 transition duration-200"/>
                  <h1>{vendor.name}</h1>
                  <h2>{vendor.serviceDescription}</h2>
                </div>
              )
            })}
          </div>
        </view>
      </div>
    </div>
  )
}

export default Vendors;