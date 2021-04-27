import React from 'react'

function PresentationNav({ list }) {
  return (
    <nav>
      <ul>
        {list.map((value) => (
          <li>
            <a href={value.id}>{value.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PresentationNav
