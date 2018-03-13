const ohm = require('ohm-js');

const isCanadianPostalCode = ohm.grammar(`A {
  code = "A".."Z" digit "A".."Z" " " digit "A".."Z" digit
}`);

const isLegalVisa = ohm.grammar(`B {
  card = "4" d d d d d d d d d d d d (d d d)?
  d = digit
}`);

const isLegalMasterCard = ohm.grammar(`C {
  card = "5" ("1".."5") d d d d d d d d d d d d d d
  d = digit
}`);

const isAda95 = ohm.grammar(`D {

}`);

const isLatinNotThreeEndingInOO = ohm.grammar(`E {
  latin = exp3 | exp2 | exp1 | exp
  exp = letter
  exp1 = letter letter
  exp2 = letter validEnding
  exp3 = letter letter letter letter+
  validEnding = ("a".."n" | "p".."z" | "A".."N" | "P".."Z") ("a".."n" | "p".."z" | "A".."N" | "P".."Z") |
                letter ("a".."n" | "p".."z" | "A".."N" | "P".."Z") |
                ("a".."n" | "p".."z" | "A".."N" | "P".."Z") letter
}`);

const isBinaryDivisibleBy32 = ohm.grammar(`F {
  binary = "0" binary		--zero
    			| "1" binary	--one
          | "00000"		  --end
}`);

const isDecimal2Through36 = ohm.grammar(`G {
  firstDigit = "1" digit      --tens
              | "2" digit     --twenties
              | "3" sixBound	--thirties
              | "2".."9"      --ones
    sixBound = "0".."6"
}`);

const isMLComment = ohm.grammar(`H {

}`);

const isLatinNotForFileFindNoLookAround = ohm.grammar(`I {

}`);

const isLatinNotForFileFindWithLookAround = ohm.grammar(`J {

}`);

module.exports = {
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
}
