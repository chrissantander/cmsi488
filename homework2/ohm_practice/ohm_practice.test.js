const {
  isCanadianPostalCode,
  isLegalVisa,
  isLegalMasterCard,
  isAda95,
  isLatinNotThreeEndingInOO,
  isBinaryDivisibleBy32,
  isDecimal2Through36,
  isMLComment,
  isLatinNotForFileFindNoLookAround,
  isLatinNotForFileFindWithLookAround
} = require('./ohm_practice.js');

const fs = require('fs');
const ohm = require('ohm-js');

describe('Ohm tests', () => {

  test('isCanadianPostalCode', () => {
    const good = [
      "A1A 1A1",
      "J7V 1J9",
      "H3E 1B5"
    ];
    const bad = [
      "D6H 8J0",
      "F78 41H",
      "A1A1A1",
      "J7V      1J9",
      ""
    ];
    good.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLegalVisa', () => {
    const good = [
      "4178459843150734",
      "4094358498345",
      "4895467892178494"
    ];
    const bad = [
      "4988932",
      "9934687346897233",
      "bagel",
      "487583487534855"

    ];
    good.forEach(s => {
      expect(isLegalVisa.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalVisa.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLegalMasterCard', () => {
    const good = [
      "5394137483948295",
      "5227458934587632",
      "5543958719347834"
    ];
    const bad = [
      "5727458934587632",
      "5923894",
      "muffin",
      "3257485768754674"

    ];
    good.forEach(s => {
      expect(isLegalMasterCard.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalMasterCard.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isAda95', () => {
    const good = [
      "9",
      "1.1e7",
      "14#eD52_4_9#"
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isAda95.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isAda95.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotThreeEndingInOO', () => {
    const good = [
      "a",
      "ab",
      "abc",
      "abcdef",
      "aop",
      "apo"
    ];
    const bad = [
      "aOO",
      "aOo",
      "aoo",
      "aoO"
    ];
    good.forEach(s => {
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isBinaryDivisibleBy32', () => {
    const good = [
      '000000',
      '0000000',
      '110100000'
    ];
    const bad = [
      '1',
      '1010woof001',
      '00000000001'
    ];
    good.forEach(s => {
      expect(isBinaryDivisibleBy32.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isBinaryDivisibleBy32.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isDecimal2Through36', () => {
    const good = [
      "2",
      "10",
      "30"
    ];
    const bad = [
      "1",
      "33",
      "foooo"
    ];
    good.forEach(s => {
      expect(isDecimal2Through36.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isDecimal2Through36.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isMLComment', () => {
    const good = [
      "(**)",
      "(* *)",
      "(**999****)"
    ];
    const bad = [
      "(*)",
      "(****",
      "walrus",
      ""
    ];
    good.forEach(s => {
      expect(isMLComment.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isMLComment.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindNoLookAround', () => {
    const good = [
      "f",
      "fi",
      "fo",
      "fin",
      "fil",
      "forabcd",
      "abcdfor"
    ];
    const bad = [
      "for",
      "file",
      "find"
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindWithLookAround', () => {
    const good = [
      "f",
      "fi",
      "fo",
      "fin",
      "fil",
      "forabcd",
      "abcdfor"
    ];
    const bad = [
      "for",
      "file",
      "find"
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeFalsy();
    });
  });

});
