import React from 'react'
import { useLocation } from 'react-router-dom'
import { history } from '../../helpers'
import './menu.css'

export function Menu({ children, data, idCustom = 'id', labelCustom = 'label' }) {
  const location = useLocation()
  const isActive = address => location.pathname === address
  return (
    <div className='menu'>
      {data && data.length
        ? data.map(item => {
            return (
              <button
                key={item[idCustom]}
                className={isActive(item.go) ? 'active' : ''}
                onClick={() => history.push(item.go)}
              >
                {item[labelCustom]}
              </button>
            )
          })
        : null}

      {children}
    </div>
  )
}
