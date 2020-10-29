import React from 'react'
import PropTypes from 'prop-types'
import { MdInsertDriveFile } from 'react-icons/md'
import IconContext from 'react-icons'

export default class FileCustomPreview extends React.Component {
  static propTypes = {
    value: PropTypes.object
  }

  render() {
    const {value} = this.props
    if (!value) {
        return <span />
    }
    return (
      <div>
        <MdInsertDriveFile style={{fontSize:'2em', position:'relative', top:'0.1em'}} /> <a href={value.url} target="_blank" style={{position:'absolute', top:'0.5em', paddingLeft:'0.35em'}}>{value.filename}</a>
      </div>
    )
  }
}