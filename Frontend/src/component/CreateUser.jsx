import React from 'react'


export const CreateUser = () => {
  return (
    <>
        <div className='gradient-bg rounded d-flex justify-content-between align-items-center px-2'>
            <h1 className='text-white'>Manage <span className='fw-bold'>Employees</span> </h1>
            <button className='btn px-2 my-2 btn-success text-white fs-4'><i className="bi bi-plus-circle fs-3"></i> Add new employee </button>
        </div>
    </>
  )
}
