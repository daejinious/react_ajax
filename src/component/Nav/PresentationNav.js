import React from 'react'

function PresentationNav({ list }) {
  return (
    <nav>
      <ul>
        {list.map(({ id, title }) => (
          <li key={id}>
            <a href={id}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PresentationNav
