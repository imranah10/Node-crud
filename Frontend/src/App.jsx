import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

import { UserTable } from './table/UserTable';

export const App = () => {
  return (
    <div class="container py-4 px-3 mx-auto">
     <UserTable/>
    </div>
  )
}
