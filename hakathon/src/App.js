import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './css/App.css';
import './css/Nav.css';
import './css/Home.css';
import './css/Form.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Usage from './components/Usage/Usage';
import Savingmethods from './components/SavingMethods/Savingmethods';
import Power from './components/PowerConsumption/Powerconsumption';
import Energycalculator from './components/EnergyCalculator/Energycalculator';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import DataState from './context/data/DataState';
import Layout from './components/Layout/Layout';
import DeviceA from './components/Devices/DeviceA';
import DevicesB from './components/Devices/DevicesB';
import DevicesC from './components/Devices/DevicesC';
import Mainline from './components/Devices/MainLine';
import UsageA from './components/DevicesConsumption/UsageA';
import UsageB from './components/DevicesConsumption/UsageB';
import UsageC from './components/DevicesConsumption/UsageC';
import MeterA from './components/Meter/MeterA';
import MeterB from './components/Meter/MeterB';
import MeterC from './components/Meter/MeterC';
import Integration from './components/Integration';

function App() {
  return (
    <div className='App'>
      <DataState>
        <Router>
          <Navbar />
          <div className='container-fluid'>
            <div className='row'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/panel' element={<Layout />}>
                  <Route path='dashboard' element={<Dashboard />}>
                    {/* Outlet will render child routes */}
                    <Route path='zone_A' element={<MeterA />} />
                    <Route path='zone_B' element={<MeterB />} />
                    <Route path='zone_C' element={<MeterC />} />
                  </Route>
                  <Route path='usage' element={<Usage />}>
                    <Route path='zone_A' element={<UsageA />} />
                    <Route path='zone_B' element={<UsageB />} />
                    <Route path='zone_C' element={<UsageC />} />
                  </Route>
                  <Route path='savingmethods' element={<Savingmethods />} />
                  <Route path='powerconsumption' element={<Power />}>
    <Route path='zone_A' element={<DeviceA />} />
    <Route path='zone_B' element={<DevicesB />} />
    <Route path='zone_C' element={<DevicesC />} />
    <Route path='main' element={<Mainline />} />
  </Route>
                  <Route path='energycalculator' element={<Energycalculator />} />
                  <Route path='Integrations' element={<Integration />} /> {/* Corrected Integrations Route */}
                </Route>
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
        {/* Uncomment ToastContainer to display toast notifications */}
        {/* <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          draggable={true}
          progress={undefined}
          theme="colored"
          type="error"
        /> */}
      </DataState>
    </div>
  );
}

export default App;
