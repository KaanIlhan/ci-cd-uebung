import { describe, it } from "node:test";
import assert from "node:assert";
import { add, subtract, divide, isEven, multiply } from "../src/calculator.js";

describe("calculator", () => {
  it("addiert zwei Zahlen", () => {
    assert.equal(add(2, 3), 5);
  });

  it("subtrahiert zwei Zahlen", () => {
    assert.equal(subtract(5, 3), 2);
  });

  it("multipliziert zwei Zahlen", () => {
    assert.equal(multiply(4, 3), 12);
    assert.equal(multiply(-2, 3), -6);
  });

  it("teilt zwei Zahlen", () => {
    assert.equal(divide(10, 2), 5);
  });

  it("wirft einen Fehler bei Division durch 0", () => {
    assert.throws(() => divide(1, 0), /Division durch 0/);
  });

  it("erkennt gerade Zahlen", () => {
    assert.equal(isEven(4), true);
    assert.equal(isEven(3), false);
  });
});
