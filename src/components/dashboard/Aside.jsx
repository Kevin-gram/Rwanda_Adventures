import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { MdAddHomeWork } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { VscSignOut } from 'react-icons/vsc';
import { FaHome } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { TbTournament } from 'react-icons/tb';
import { SiPrintables } from "react-icons/si";
import { Link } from 'react-router-dom';
const Aside = () => {
  return (
    <div className="flex bg-slate-100">
      <div
        className="bg-gray-600 mt-5 mb-5 ml-5 w-48 rounded-l-lg p-2 text-white "
        style={{ height: '90vh' }}
      >
        <div>
          <h1 className="text-1xl">Rwanda Ventures</h1>
        </div>

        <hr />

        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <MdDashboard />
          </h1>
          <h1 className="mx-2">Dashboard</h1>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
          <SiPrintables />
          </h1>
         <Link to="/tables"><h1 className="mx-2">Tables</h1></Link>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <MdAddHomeWork />
          </h1>
          <h1 className="mx-2 font-sans">Activities</h1>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <FaUsers />
          </h1>
          <h1 className="mx-2">Users</h1>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <FcCollaboration />
          </h1>
          <h1 className="mx-2">Partners</h1>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <VscSignOut />
          </h1>
          <h1 className="mx-2">Logout</h1>
        </div>
        <div className="flex items-center text-1xl mt-5 mx-5">
          <h1>
            <MdDashboard />
          </h1>
          <h1 className="mx-2">Dashboard</h1>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* navbarb */}
        <div className="bg-white w-full ml-5 mt-5 h-16 mr-4 px-2 flex items-center">
          <div>
            <div className="flex items-center">
              <FaHome /> / <h1 className="text-sm">Dashboard</h1>
            </div>
            <h1 className="text-2xl text-bold ml-4">Dashboard</h1>
          </div>
        </div>

        {/* end of navbar */}

        {/* cards */}

        <div className="cards flex mt-10 mx-12">
          <div className="bg-white w-48 h-32 shadow-2xl relative rounded flex flex-col mx-3">
            <h1 className="text-6xl absolute top-[-30px] mx-5 text-blue-400 flex">
              <FaBookReader />
              <span className="text-black text-sm absolute mt-10 ml-24 font-bold">
                Bookings
              </span>
            </h1>
            <h2 className="absolute mt-16 ml-24 text-3xl">32</h2>
          </div>
          <div className="bg-white w-48 h-32 shadow-2xl relative rounded flex flex-col mx-3">
            <h1 className="text-6xl absolute top-[-30px] mx-5 text-blue-400 flex">
              <FcCollaboration />
              <span className="text-black text-sm absolute mt-10 ml-24 font-bold">
                Team
              </span>
            </h1>
            <h2 className="absolute mt-16 ml-24 text-3xl">32</h2>
          </div>
          <div className="bg-white w-48 h-32 shadow-2xl relative rounded flex flex-col mx-3">
            <h1 className="text-6xl absolute top-[-30px] mx-5 text-blue-400 flex">
              <FaUsers />
              <span className="text-black text-sm absolute mt-10 ml-24 font-bold">
                users
              </span>
            </h1>
            <h2 className="absolute mt-16 ml-24 text-3xl">32</h2>
          </div>
          <div className="bg-white w-48 h-32 shadow-2xl relative rounded flex flex-col mx-3">
            <h1 className="text-6xl absolute top-[-30px] mx-5 text-blue-400 flex">
              <TbTournament />
              <span className="text-black text-sm absolute mt-10 ml-24 font-bold">
                Active Tours
              </span>
            </h1>
            <h2 className="absolute mt-16 ml-24 text-3xl">32</h2>
          </div>
        </div>

        {/* cards */}
      </div>
    </div>
  );
};

export default Aside;
