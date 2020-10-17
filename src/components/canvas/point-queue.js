export function createPointQueue () {
  const queue = []

  return {
    push (point) {
      queue.push(point)

      if (queue.length > 2) {
        queue.shift()
      }
    },

    forEach (cb) {
      return queue.forEach(cb)
    }
  }
}
