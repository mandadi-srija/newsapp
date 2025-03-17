import React from 'react'
import loading from './loading.gif';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }} >
      <img src={loading} alt="loading" />
    </div>
  )
}
