import { expect } from 'chai'


describe('immutability', () => {

  describe('a number', () => {

    function inc(currState) {
      return currState + 1
    }

    it('is immutable', () => {
      let state = 42
      let nextState = inc(state)

      expect(nextState).to.equal(43)
      expect(state).to.equal(42)
    })

  })

})
