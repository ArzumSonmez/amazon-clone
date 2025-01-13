import { formatCurrency } from "../scripts/utils/money.js";

//describe(); is used for creating testing suites in Jasmine
describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95'); //compare one value to another one
  }); // it(); for creating tests.

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});