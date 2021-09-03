import {greet } from './greet'

describe('greet',() => {
    it('should add string to welcome', () => {
        expect(greet('Monster')).toContain('Monster');
    })
})