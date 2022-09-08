// import Dropdown from 'react-bootstrap/Dropdown';
// import SplitButton from 'react-bootstrap/SplitButton';
import { useState } from 'react';
import './CustomDropdown.css';


let toggle = 'no';
function sayHello() {
  toggle = 'yes';
  { renderElement() }


  alert('You clicked me!');
}


function renderElement() {
  console.log('jjjjjj', toggle)
  if (toggle === 'yes')

    return (<div className="dd-list">
      <button className="dd-list-item"></button>
      <button className="dd-list-item"></button>
      <button className="dd-list-item"></button>
    </div>)
  //  <div>

  //    {/* <code></code>
  //  </div> ; */}
  //   return null;
}
function CustomDropdown() {
  
  const [open, setOpen] = useState('false')
  const toggleChecked = () => setOpen(open => !open)

  const data = [
    'Primary', 'Secondary', 'Success', 'Info', 'Straps', 'Clothing'
  ]

  return data.map((element, index) => {
    console.log('index', index)

    return (
      <div className="container">
        <button onClick={toggleChecked}
          type="button" class="button"
          iconCss='MdKeyboardArrowDown'>

          <ul class="ddtitle">{element}</ul>
        </button>
        {/* <p>you click {open}</p> */}

        {open == true ?
          <div class="dropdown">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
          : null}
      </div>
    )}
      // <div className="Toggle2">

      //   <div className="dd-header">
      //     <button onClick={sayHello} className="dd-header-title">{toggle =='no' ? renderElement() : 'dropUp'}</button>
      //   </div>
      //   </div>
    )

    // else {
    //   return null;
    // }

  }

export default CustomDropdown;