import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between',backgroundColor: "slateblue", height: 40, alignItems: 'center', padding: 10, color: 'white'}}> 
        <h3>Modern Store</h3>
        <ul style={{display:'flex', justifyContent:'space-between',gap: 10, listStyle: 'none'}}>
            <li>Product Name</li>
            <li>
                Price
            </li>
            <li>
               Descriprion
            </li>
        </ul>
        </div>
  
    </div>
  )
}

export default Navbar