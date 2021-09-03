import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('return array contains countrys',() => {
        const countrys = getCurrencies();
        expect(countrys).toContain('USD');
        expect(countrys).toContain('EUR');
    })

    it('return array contains countrys',() => {
        const countrys = getCurrencies();
        expect(countrys).toContain('AUD');
    })
})