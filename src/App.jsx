import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import userData from './userData';
import { MdDeleteOutline } from "react-icons/md";
import { FaStreetView, } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import ToggleButton from 'react-bootstrap/ToggleButton';


import { Link } from 'react-router-dom';

function App() {
  const [checked, setChecked] = useState(false);
  const [Count, setCount] = useState(...userData)
  console.log('add count', Count);

  return (
    <>
      <div className="content">
        <div className='add_btn'>
          
             <Button variant="primary" >Add New</Button>
      
        </div>
        <div className='table_container'>
          <Table responsive="md">
            <thead>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><ToggleButton
                  id="toggle-check"
                  type="checkbox"
                  variant="primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                      active
                  </ToggleButton>
                  </td>
                <td className='action'>
                  <div className='view'>
                <FaStreetView />
                </div>
                <div className='edit'>
                <FaRegEdit />
               </div>
                <div className='delete'>
                <MdDeleteOutline />
                </div>
  
                  </td>

              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                <ToggleButton
                  id="toggle-check"
                  type="checkbox"
                  variant="primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                      active
                  </ToggleButton>
                </td>
                <td className='action'>
                  <div>
                <FaStreetView className='view' />
                </div>
                <div>
                <FaRegEdit className='edit' />
               </div>
                <div className='delete'>
                <MdDeleteOutline />
                </div>
  
                  </td>


              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                <ToggleButton
                  id="toggle-check"
                  type="checkbox"
                  variant="primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                      active
                  </ToggleButton>
                </td>
                <td className='action'>
                  <div className='view'>
                <FaStreetView />
                </div>
                <div className='edit'>
                <FaRegEdit />
               </div>
                <div className='delete'>
                <MdDeleteOutline />
                </div>
  
                  </td>

              </tr>
            </tbody>
          </Table>
        </div>
      </div>


    </>
  )
}

export default App
