import React, { Component } from 'react';
import _ from 'lodash'
import './Column.css'

export default class Column extends Component {
  render() {
    const {
      list = [],
      time = 0,
      onClick = () => {},
      name = 'normal',
      count = 1,
      index = -1
    } = this.props

    return (
      <div className="Column">
        <p>{time}</p>

        <button onClick={onClick}>Sort</button>

        <ul>
          {_.map(list, (item, i) => (
            <li 
              key={`${name}-${item}`}
              className={`${i} ${+item === index ? 'touched' : ''}`}
              style={{
                width: `${100 / count * (item + 1)}%`,
                top: `calc(22 * ${i}px`
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

