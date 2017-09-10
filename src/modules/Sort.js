import React, { Component } from 'react'
import _ from 'lodash'
import './Sort.css'
import Column from './Column'
import variants from './sort-variants'

export default class Sort extends Component {
  constructor (props) {
    super(props)
    this.updateLists = this.updateLists.bind(this)
    this.changeCount = this.changeCount.bind(this)
    this.state = {
      count: 15
    }
  }

  componentWillMount () {
    this.reset()
  }

  reset () {
    const { count } = this.state

    this.setState({
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
            count: this.state.count || 15
          }}
        },
      {})
    })
  }

  updateLists (name, list, index, time) {
    const valriant = this.state.variants[name]

    this.setState({
      variants: {
        ...this.state.variants, 
        [name]: {
          ...valriant,
          time,
          list: _.compact(list),
          index
        }
      }
    })
  }

  changeCount (e) {
    this.setState({
      count: +e.target.value
    }, this.reset)
  }

  render() {
    const { variants, count } = this.state

    return (
      <div className="Sort">
        <input value={count} onChange={this.changeCount} />

        <div className="container">
          {_.map(variants, (valriant, name) => (
            <Column key={`column-${name}`} name={name} {...valriant} />
          ))}
        </div>
      </div>
    )
  }
}

