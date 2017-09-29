import { expect } from 'chai'
import { List, Map } from 'immutable'


describe('immutability', () => {

  describe('A List', () => {

    function addMovie(currState, movie) {
      // return currState.set('movies',
      //   currState.get('movies').push(movie)
      // )
      return currState.update('movies', movies => movies.push(movie))
    }

    it('is immutable', () => {

      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      })
      let nextState = addMovie(state, 'Sunshine')

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }))
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }))

    })

  })

})
