import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import axios from 'axios';

import Table from './Components/Table/MainTable/Table';
import LayoutDetails from './Components/Details/LayoutDetails';
import Login from './Components/Authentication/Login';
import Layout from './Components/Layout/Layout';
import Cards from './Components/Cards/Card';
import TransactionHistoryTable from './Components/Table/TransactionHistory/TransactionHistoryTable';
import TransactionHistoryDetails from './Components/Table/TransactionHistory/TransactionHistoryDetails';
import Statistics from '../src/Components/Statistics/DataStatistic';

function App() {

  useEffect( () => {
    // const savedTabsClass = localStorage.getItem('tabsClass');
    // const savedTransferClass = localStorage.getItem('transferClass');
    // const savedColsTransfer = localStorage.getItem('colsTransfer');
    // const savedColsTabs = localStorage.getItem('colsTabs');
    // const savedRecord = localStorage.getItem('record');

    // if (savedTabsClass !== null && savedTransferClass !== null && savedColsTransfer !== null && savedColsTabs !== null && savedRecord !== null) {
    //   localStorage.removeItem('record');
    //   localStorage.removeItem('tabsClass');
    //   localStorage.removeItem('transferClass');
    //   localStorage.removeItem('colsTransfer');
    //   localStorage.removeItem('colsTabs');
    // }
  })

  return (
      <Router>
        <Routes>
            <Route path='/' element={<Layout title='Login' > <Login /> </Layout>} />
            <Route path='/menu' element={<Layout title={'Menu'} > <Cards /> </Layout>} />
            <Route path='/data' element={<Layout > <Table /> </Layout>} />
            <Route path='/details' element={<Layout> <LayoutDetails /> </Layout>} />
            <Route path='/transactions' element={<Layout title={'Transakcii'} > <TransactionHistoryTable /> </Layout>} />
            <Route path='/transactionDetails' element={<Layout title={'Transakcii'} > <TransactionHistoryDetails /> </Layout>} />
            <Route path='/statistics' element={<Layout title={'Statistics'} > <Statistics /> </Layout>} />
        </Routes>
      </Router>
  );
}

export default App;
