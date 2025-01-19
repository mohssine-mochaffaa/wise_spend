import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useMyContext } from '../../ContextPage'
import AddProjectForm from '../../Components/AddProject/AddProject';

const Dashboard = () => {
  const {user} = useMyContext();
  const [show,setShow] = useState(false);

  useEffect(()=>{
    console.log(user)
  },[user])

  useEffect(()=>{
    console.log(show)
  },[show])

  return (
    <div className='dashboard'>
      {show && (
        <div className="addProjectContainer">
          <AddProjectForm setShow={setShow}/>
        </div>
      )}
          <section className="content">
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Your Expenses Analysis</h1>
           
          </div>

          <div className='projectManagement'>
          <button onClick={()=>{setShow(true)}}>+</button>
          <select className='selectProject' name="" id="">
            <option value="">projects</option>
          </select>
          </div>

         
        </div>

        <div className="box-info">
          <li>
            <i className="fas fa-calendar-check"></i>
            <span className="text">
              <h3>620K MAD</h3>
              <p>Available To Pay Out</p>
            </span>
          </li>
          <li>
            <i className="fas fa-people-group"></i>
            <span className="text">
              <h3>8.4k MAD</h3>
              <p>Total Expenses</p>
            </span>
          </li>
          <li>
            <i className="fas fa-dollar-sign"></i>
            <span className="text">
              <h3>900k MAD</h3>
              <p></p>
            </span>
          </li>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Expenses</h3>
              <i className="fas fa-search"></i>
              <i className="fas fa-filter"></i>
            </div>

            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Order Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="profile.png" alt="" />
                    <p>User Name</p>
                  </td>
                  <td>07-05-2023</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="profile.png" alt="" />
                    <p>User Name</p>
                  </td>
                  <td>07-05-2023</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="profile.png" alt="" />
                    <p>User Name</p>
                  </td>
                  <td>07-05-2023</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="profile.png" alt="" />
                    <p>User Name</p>
                  </td>
                  <td>07-05-2023</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="profile.png" alt="" />
                    <p>User Name</p>
                  </td>
                  <td>07-05-2023</td>
                  <td><span className="status complete">Complete</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="todo">
            <div className="head">
              <h3>Highest expenses</h3>
              <i className="fas fa-plus"></i>
              <i className="fas fa-filter"></i>
            </div>
      
            <div className="transaction">
              <label htmlFor="wifi">WiFi Payment</label>
              <input type="number" id="wifi-expense" name="wifi-expense" placeholder="Enter amount in MAD" required />
            </div>
      
            <div className="transaction">
              <label htmlFor="electricity">Electricity Payment</label>
              <input type="number" id="electricity-expense" name="electricity-expense" placeholder="Enter amount in MAD" required/>
            </div>
      
            <div className="transaction">
              <label htmlFor="water">Water Payment</label>
              <input type="number" id="water-expense" name="water-expense" placeholder="Enter amount in MAD" required/>
            </div>
      
            <div className="transaction">
              <label htmlFor="salary">Employee Salaries Paid</label>
              <input type="checkbox" id="salary" />
            </div>
      
            <div className="transaction">
              <label htmlFor="security">Security Payment</label>
              <input type="checkbox" id="security" />
            </div>
            <div className="transaction">
                <label htmlFor="Cleaning">Cleaning Payment</label>
                <input type="checkbox" id="Cleaning" />
              </div>

          </div>
         </div>
      </main>
    </section>


    </div>
  )
}

export default Dashboard