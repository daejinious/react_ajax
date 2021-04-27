import { connect } from 'react-redux'
import PresentationNav from './PresentationNav'

const stateToProps = () => ({
  list: [
    {
      id: 1,
      title: 'HTML',
    },
    {
      id: 2,
      title: 'CSS',
    },
    {
      id: 3,
      title: 'JS',
    },
  ],
})

export default connect(stateToProps)(PresentationNav)
