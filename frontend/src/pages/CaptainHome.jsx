import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpRef=useRef(null);
  const [confirmRidePopUp,setConfirmRidePopUp]=useState(false)

  useGSAP(() => {
    gsap.to(ridePopUpPanelRef.current, {
      transform: ridePopUpPanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [ridePopUpPanel]);
  useGSAP(() => {
    gsap.to(confirmRidePopUpRef.current, {
      transform: confirmRidePopUp ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [confirmRidePopUp]);

  return (
    <div className="h-screen overflow-auto">
      <div className="fixed p-3 top-0 flex justify-evenly">
        <img src="/uber-2.svg" alt="Uber Logo" className="w-16" />
        <Link
          to="/home"
          className="ml-2 h-10 w-10 bg-white flex items-center justify-center rounded-full top-4"
        >
          <i className="text-lg ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding animation"
          className="h-full w-screen object-cover"
        />
      </div>

      {/* Bottom Information Section */}
      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>

      <div
        className="fixed z-10 bottom-0 px-3 py-8 bg-white w-screen flex flex-col pt-12 translate-y-full"
        ref={ridePopUpPanelRef}
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel}
        setConfirmRidePopUp={setConfirmRidePopUp} />
      </div>
      <div
        className="fixed z-10 bottom-0  h-screen px-3 py-8 bg-white w-screen flex flex-col pt-12 translate-y-full"
        ref={confirmRidePopUpRef}
      >
        <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp}
        setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
