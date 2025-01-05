import React, { useRef, useState, useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from '../components/VechilePanel';
import Confirmedride from '../components/Confirmedride';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmridePanelRef=useRef(null);
  const vehicleFoundRef=useRef(null);
  const waitingForDriverRef=useRef(null);
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)
  const [vehicleFound,setvehicleFound]=useState(false)
  const [waitForDriver,setWaitforDriver]=useState(false);

  
  const submitHandler = (e) => {
    e.preventDefault();
   
  };

  // Panel animation
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [panelOpen]);

  // Vehicle panel animation
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanelOpen ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [vehiclePanelOpen]);

  // confirm ride panel animation
  useGSAP(() => {
    gsap.to(confirmridePanelRef.current, {
      transform:confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [confirmRidePanel]);

  // looking for the driver panel
  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform:vehicleFound ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [vehicleFound]);

  //waiting for driver panel
  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform:waitForDriver? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [waitForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img src="/uber-2.svg" alt="Uber Logo" className="w-16 absolute left-5 top-5" />
      <div className="h-screen w-screen">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute h-screen top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-3 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="cursor-pointer opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col space-y-3 mt-5"
          >
            <div className="line absolute h-16 w-1 top-[52%] bg-gray-900 rounded-full left-10"></div>
            <input
              type="text"
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg"
            />
            <input
              type="text"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[70%] bg-white opacity-0">
          <LocationPanel vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} 
           panelOpen={panelOpen} setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 px-3 py-8 bg-white w-screen flex flex-col pt-12"
      >
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} 
        setConfirmRidePanel={setConfirmRidePanel}
        />
       
      </div>
      <div
        ref={confirmridePanelRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-screen flex flex-col pt-12"
      >
        <Confirmedride setConfirmRidePanel={setConfirmRidePanel}
        setvehicleFound={setvehicleFound}
        />
       
      </div>
      <div
       ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-screen flex flex-col pt-12"
      >
        <LookingForDriver setvehicleFound={setvehicleFound}/>
       
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-screen flex flex-col pt-12"
      >
        <WaitForDriver setWaitforDriver={setWaitforDriver}/>
       
      </div>




    </div>
  );
};

export default Home;
