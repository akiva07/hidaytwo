'use client';
import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <button onClick={() => console.log('scope')}>Abutton</button>
    </div>
  )
}

export default ProductCard
