import React from "react";
import "../../styles/login.css";

export const Login = ({ onSubmit, user, password, onChange }) => {
  return (
    <div className="font-sans upeu-tara">
      <div className="sm:relative min-h-screen sm:flex sm:flex-col sm:justify-center items-center w-80 mx-auto sm:w-auto">
        <div className="relative sm:max-w-sm w-full top-52 sm:top-auto">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor="login"
              className="block mt-3 text-gray-700 text-center font-semibold text-xl"
            >
              Login
            </label>
            <form onSubmit={onSubmit} className="mt-10">
              <div>
                <input
                  name="user"
                  type="text"
                  placeholder="Usuario"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  value={user}
                  onChange={onChange}
                />
              </div>

              <div className="mt-7">
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className="mt-7">
                <button className="bg-red-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
