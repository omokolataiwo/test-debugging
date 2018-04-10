import { expect } from 'chai';
import OX from '../utils/OX';

describe('Match the numbers of O and X to be equal', () => {
  it('should check equal numbers of o and x', () => {
    expect(OX('XO')).to.be.true;
    expect(OX('XXO')).to.be.false;
  });
  it('should match for different letter case', () => {
    expect(OX('ox')).to.be.true;
    expect(OX('Xo')).to.be.true;
    expect(OX('xO')).to.be.true;
  })

  it('should not do anything for non string', () => {
    expect(OX(123453)).to.be.true;
    expect(OX()).to.be.true;
  })

  it('should walk through string to use only x and o', () => {
    expect(OX('XoGoX')).to.be.true;
  })

});
