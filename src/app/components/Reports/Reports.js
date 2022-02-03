import React, { useEffect, useState } from 'react';
import '../../../_assets/css/emp.css';
import '../../../_assets/css/reports.css';
// import axios from 'axios'
import ReportTable from './ReportTable';
import REPORTS from './REPORTS.json';

function Reports() {

  // const [APIData, setAPIData] = useState([])
  const report_data = REPORTS

  // useEffect(() => {
  //   axios.get('https://61ef8dfe732d93001778e454.mockapi.io/reports')
  //     .then((response) => {
  //       setAPIData(response.data)
  //     })
  // }, [])

  return (
    <div className='details'>
      <div className='emp'></div>
      <div className='emp-content'>
        <div className='emp-details'>
          <div className='emp-user-details'>
            ER Call Tracking Reports - 2022
          </div>
          <div className='border-top'>
          </div>
          <div className='table-responsive report-table'>
            <ReportTable data={report_data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports;
