import React from 'react'

export const Badges = ({item}) => {

  
  return (
    <>
    <div className='badgeGridItem'>
    <img alt={item.name} className='badgeImg' src={item.url}/>
    <p>
      {item.name}
    </p>
    </div>
    </>
  )
}
