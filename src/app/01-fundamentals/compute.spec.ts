import { compute } from './compute';

describe('compute', () => {
    it('if input is negative return 0', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('if input is posstive  return input+1', ()=>{
        const result = compute(3);
        expect(result).toBe(4) ;
    })
})