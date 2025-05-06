// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("310-345-3456", () => {
  expect(isPhoneNumber("310-345-3456")).toBe(true);
}) 
test("(310) 123-3456", () => {
  expect(isPhoneNumber("(310) 123-3456")).toBe(true);
}) 
test("(310) 345-345", () => {
  expect(isPhoneNumber("(310) 345-345")).toBe(false);
}) 
test("(310) 345 3456", () => {
  expect(isPhoneNumber("(310) 345 3456")).toBe(false);
}) 

test("blah@gmail.com", () => {
  expect(isEmail("blah@gmail.com")).toBe(true);
})
test("blahblah@Gma_il.co", () => {
  expect(isEmail("blahblah@Gma_il.co")).toBe(true);
})
test("blehgmail.com", () => {
  expect(isEmail("blehgmail.com")).toBe(false);
})
test("blah@gm$ail.com", () => {
  expect(isEmail("blah@gm$ail.com")).toBe(false);
})

test("hellohello", () => {
  expect(isStrongPassword("hellohello")).toBe(true);
})
test("HelloWORLD", () => {
  expect(isStrongPassword("HelloWORLD")).toBe(true);
})
test("3hello3", () => {
  expect(isStrongPassword("3hello3")).toBe(false);
})
test("he", () => {
  expect(isStrongPassword("he")).toBe(false);
})

test("1/1/2020", () => {
  expect(isDate("1/1/2020")).toBe(true);
})
test("11/11/2020", () => {
  expect(isDate("11/11/2020")).toBe(true);
})
test("1/1/20", () => {
  expect(isDate("1/1/20")).toBe(false);
})
test("1/1|2020", () => {
  expect(isDate("1/1|2020")).toBe(false);
})

test("#d63", () => {
  expect(isHexColor("#d63")).toBe(true);
})
test("ffffff", () => {
  expect(isHexColor("ffffff")).toBe(true);
})
test("d630", () => {
  expect(isHexColor("d630")).toBe(false);
})
test("#d630d630", () => {
  expect(isHexColor("#d630d630")).toBe(false);
})