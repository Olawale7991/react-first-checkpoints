import React from 'react'
import Description from './Description'
import Image from './Image'

const Product = () => {
    const product = {
        name: 'Nike',
        price: 300,
        desc: 'Nike Airforce 1',
        img: 'shoe3.jpg'
    }
    return (
    <div>
     <div style={{display: 'flex', gap: 10}}>
        <Description image='shoe2.jpg' title= 'Adidas' price= '$80'/>
        <Description image='shoe3.jpg' title= 'Puma' price= '$100'/>
        <Image />

        </div>

    </div>
  )
}

export default Product