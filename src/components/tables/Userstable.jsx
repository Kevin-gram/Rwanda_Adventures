import React, { useState, useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import { MdAddHomeWork } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { VscSignOut } from 'react-icons/vsc';
import { FaHome } from 'react-icons/fa';
import { SiPrintables } from 'react-icons/si';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const Aside = () => {
  const [usersData, setUsersData] = useState([]);
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: selected ? selected.username : '',
      password: selected ? selected.password : '',
      phone: selected ? selected.phone : '',
      email: selected ? selected.email : '',
    },
  });
  useEffect(() => {
    reset(selected);
  }, [selected]);

  const handleUpdate = async (data) => {
    try {
      const url = `http://localhost:2121/update/${selected._id}`;
      const response = await axios.put(url, data);
      console.log(response);
      alert('updated  successfully');
    } catch (error) {
      console.log('update failed');
      console.log(error);
    }
  };

  useEffect(() => {
    const handleData = async () => {
      try {
        const url = 'http://localhost:2121/users';
        const response = await axios.get(url);
        console.log(response);
        setUsersData(response.data);
      } catch (error) {
        console.log(error);
        console.log('data not got ');
      }
    };
    console.log(selected);
    handleData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:2121/delete/${id}`;
      const response = await axios.delete(url);
      console.log(response);
      confirm('Do you really want to delete this user?, ok');
      alert('user deleted');
      window.location.reload('/userstable');
      window.location.assign('/userstable');
    } catch (error) {
      alert('The user could not be deleted');
      console.log(error);
    }
  };
  return (
    <div className="flex bg-slate-100 w-full pr-5 relative">
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
          <h1 className="mx-2">Tables</h1>
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

        {/* table */}
        <table className="w-full bg-white mx-5 mt-3">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Password
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div className="text-sm leading-5 text-gray-900">
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div className="text-sm leading-5 text-gray-900">
                      {user.password}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div className="text-sm leading-5 text-gray-900">
                      {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-300 text-sm leading-5 font-medium flex justify-center">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-2xl"
                      onClick={() => {
                        setSelected(user);
                        setView(true);
                      }}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="ml-2 text-red-600 hover:text-red-900 focus:outline-none focus:underline text-2xl"
                      onClick={() => handleDelete(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/*table*/}
      </div>

      <div
        className={`${
          view ? 'absolute  w-full flex items-center justify-center' : 'hidden'
        }`}
        style={{ height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className="relative">
          {/* form */}
          <form
            className="rounded-md shadow-2xl justify-center items-center p-5 bg-blue-100"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <h1 className="text-center t-[-12px] absolute">hello world</h1>
            <div>
              <h1 className="text-center font-bold text-2xl">Edit </h1>

              <div className="flexarise">
                <div className="flexa">
                  <div>
                    <label htmlFor="username" className=" font-bold text-sm">
                      Username
                    </label>
                  </div>

                  <div>
                    <input
                      type="text"
                      className="outline-none py-1 w-72 rounded-sm px-1 out"
                      id="username"
                      {...register('username')}
                    />
                    <br />
                  </div>
                </div>

                <div className="flexa">
                  <div>
                    <label htmlFor="email" className=" font-bold text-sm">
                      Email
                    </label>
                  </div>

                  <div>
                    <input
                      type="Email"
                      className="outline-none py-1 w-72 rounded-sm px-1 out"
                      id="email"
                      {...register('email')}
                    />
                  </div>
                </div>
              </div>

              <div className="flexarise">
                <div className="flexa">
                  <div>
                    <label htmlFor="phone" className=" font-bold text-sm">
                      Phone number
                    </label>
                  </div>

                  <div>
                    <input
                      type="tel"
                      className="outline-none py-1 w-72 rounded-sm px-1 out"
                      id="phone"
                      {...register('phone')}
                    />
                    <br />
                  </div>
                </div>

                <div className="flexa">
                  <div>
                    <label htmlFor="password" className=" font-bold text-sm">
                      Password
                    </label>
                  </div>

                  <div>
                    <input
                      type="password"
                      className="outline-none py-1 w-72 rounded-sm px-1 out"
                      id="password"
                      {...register('password')}
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded fle btn flexa">
              Edit
            </button>
          </form>
          {/* form */}
        </div>
      </div>
    </div>
  );
};

export default Aside;
