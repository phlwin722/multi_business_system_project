import React from 'react'
import BreadCrumps from '../../components/BreadCrumps'

const Dashboard = () => {
  return (
    <>
      <div className='px-3 py-2 shadow-md rounded-md'>
        <BreadCrumps breadNumber={1}/>
      </div>
    </>
  )
}

export default Dashboard
