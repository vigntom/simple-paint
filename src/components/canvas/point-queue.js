export function createPointQueue (number) {
  let length = number || 2
  const queue = []

  return {
    push (point) {
      queue.push(point)

      if (queue.length > length) {
        queue.shift()
      }
    },

    forEach (cb) {
      return queue.forEach(cb)
    },

    setLength (number) {
      const diff = queue.length - number
      length = number

      if (diff > 0) {
        queue.splice(0, diff)
      }
    }
  }
}
