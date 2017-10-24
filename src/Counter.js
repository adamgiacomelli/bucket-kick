import { extendObservable, computed } from 'mobx'

class Counter {
  constructor () {
    extendObservable(this, {
      count: 0,
      shake: false,
      isOdd: computed(() => this.count % 2 === 1)
    })
  }

  increment () {
    this.count++
    this.shake = true
    setTimeout(() => {
      this.shake = false
    }, 600)
  }

  decrement () {
    this.count--
    this.shake = true
    setTimeout(() => {
      this.shake = false
    }, 600)
  }
}

export default Counter
