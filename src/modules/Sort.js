import React, { Component } from 'react'
import _ from 'lodash'
import './Sort.css'
import Column from './Column'
import variants from './sort-variants'

const count = 15

export default class Sort extends Component {
  constructor (props) {
    super(props)

    this.updateLists = this.updateLists.bind(this)

    this.state = {
      queue: [0],
      variants: _.reduce(variants, (result, sortFunc, name) => {
        const list = _.shuffle(_.times(count))

        return {
          ...result,
          [name]: {
            time: 0,
            list,
            onClick: sortFunc.bind(this, list, (list, index, time) => {
              setTimeout(() => {
                this.updateLists(name, list, index, time)
              }, 200 * time)
            }),
            index: -1,
            count
          }}
        },
      {})
    }
  }

  updateLists (name, list, index, time) {
    const valriant = this.state.variants[name]
    this.setState({ variants: { ...this.state.variants, [name]: { ...valriant, time, list, index } } })
  }

  render() {
    const { variants } = this.state

    return (
      <div className="Sort">
        {_.map(variants, (valriant, name) => (
          <Column key={`column-${name}`} name={name} {...valriant} />
        ))}
      </div>
    );
  }
}

