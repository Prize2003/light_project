import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="kitchen">
        Kitchen
        {/* <button className='btn'>กด</button> */}
        <div className="form-check form-switch rmk">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manualk" htmlFor="flexSwitchCheckDefault" >Manual</h5>

            </div>
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label autok" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
      </div>
       
      <div className="room">
       <div className="kitchen">
          Bedroom
          {/* <button className='btn'>กด</button> */}
          <div className="form-check form-switch rmb">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manualb" htmlFor="flexSwitchCheckDefault" >Manual</h5>

            </div>
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label autob" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
        </div>
        <div className="kitchen">
        Lounge
        <div className="form-check form-switch rmb">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manualb" htmlFor="flexSwitchCheckDefault" >Manual</h5>

            </div>
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label autob" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
      </div>
      </div>
    </div>
  )
}

export default App

/**
 * 
 * http://localhost:5173/
*/
