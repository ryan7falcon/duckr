import React, { PropTypes} from 'react'
import {container, title, slogan} from './styles.css'
import { Link } from 'react-router'

export default function Home (props) {
  return (
    props.isFetching === true
    ? <h1 className={header}>{'Fetching'}</h1>
    : <div className={container}>
      <p className={title}> {'Duckr'} </p>
      <p className={slogan}> {'The real time cloud based modular scalable social platform'} </p>
      <Link  to='/feed'>{'Feed'}</Link>
    </div>

  )
}
