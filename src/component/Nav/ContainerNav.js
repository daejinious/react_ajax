import { connect } from 'react-redux'
import axios from 'axios'
import PresentationNav from './PresentationNav'
import store from '../../store/store'

const stateToProps = (state) => ({
  list: state.list,
})

async function getData() {
  const data = await axios.get('list.json').then((res) => res.data)
  store.dispatch({ type: 'SET', list: data })
}

getData().then()

export default connect(stateToProps)(PresentationNav)

// ========================================================================================================================
//
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import PresentationNav from './PresentationNav'
// import store from '../../store/store'
//
// function ContainerNav() {
//   const [list, setList] = useState(store.getState().list)
//
//   useEffect(async () => {
//     const data = await axios.get('list.json').then((result) => result.data)
//
//     store.dispatch({ type: 'SET', list: data })
//
//     return () => {
//       store.dispatch({ type: 'SET', list: [] })
//     }
//   })
//
//   store.subscribe(() => {
//     setList(store.getState().list)
//   })
//
//   return list ? <PresentationNav list={list} /> : null
// }
//
// export default ContainerNav
