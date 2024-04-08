import Modal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';


const VendorModal = () => {
  // Add your component logic here
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [vendor, setVendors] = useState([]);
    const [serviceDescription, setServiceDescription] = useState('');
    const [specialties, setSpecialties] = useState([]);

    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const vendorModalOpen = () => {
      axios.get('http://localhost:3000/vendors', {
        params: {
          category: 'Personal Chef'
        }
      })
      .then((response) => {
        setModalIsOpen(true);
        setVendors(response.data[0]);
        setServiceDescription(capitalize(response.data[0].serviceDescription));
        setSpecialties(Object.values(response.data[0].specialties[0]).filter((specialty) => !/d/.test(specialty)).map((specialty) => capitalize(specialty)));
      })
      .catch((error) => {
        console.log(error);
      })
    }



    const getListOfSpecialties = () => {
      specialties.slice(0, 4)
      return specialties.map((specialty, index) => {
        return <li key={index}>{specialty}</li>
      })
    }


    return (
      // Add your JSX code here
      <div>
      <button onClick={vendorModalOpen}>Vendor Modal Stub</button>

          <Modal isOpen={modalIsOpen} className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <view className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
                <div className="w-full h-full border border-mmsand flex">
                <button onClick={() => setModalIsOpen(false)} className="absolute top-9 right-9 bg-mmcream p-1 rounded text-mmblue">X</button>
                  <div className="w-2/5 flex flex-col justify-center pl-10">
                    <h1 className="text-4xl">{vendor.name}</h1>
                    <h2 className="text-2xl mb-2">{vendor.category}</h2>
                    <img src={vendor.photo} alt="Vendor Logo" className="w-4/5 h-3/5 mb-4" />
                  </div>
                  <div className="w-3/5 flex flex-col justify-center mb-10">
                    <h2 className="text-2xl mb-2">{serviceDescription}</h2>
                    <h2 className="text-2xl mb-2">Specialties:</h2>
                    <ul className="list-disc list-inside">
                      {getListOfSpecialties()}
                    </ul>
                  </div>
                </div>
              </view>
          </Modal>
      </div>
    );
  };

export default VendorModal;