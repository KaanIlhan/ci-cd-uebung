import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { ShoppingCart } from "../src/shoppingCart.js";

describe("ShoppingCart", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart(); // Arrange: vor jedem Test ein leerer Warenkorb
  });

  it("ist am Anfang leer", () => {
    assert.equal(cart.getTotal(), 0);
  });

  it("berechnet die Summe", () => {
    cart.addItem("Apfel", 0.5, 4);
    cart.addItem("Brot", 2);
    assert.equal(cart.getTotal(), 4);
  });

  it("entfernt Artikel", () => {
    cart.addItem("Apfel", 1);
    cart.removeItem("Apfel");
    assert.deepEqual(cart.items, []);
  });

  it("lehnt negative Preise ab", () => {
    assert.throws(() => cart.addItem("Fehler", -1), /negativ/);
  });

  it("gibt Rabatt", () => {
    cart.addItem("Schuhe", 100);
    assert.equal(cart.applyDiscount(20), 80);
  });

  it("lehnt Rabatt über 100 % ab", () => {
    cart.addItem("Schuhe", 100);
    assert.throws(() => cart.applyDiscount(150), /zwischen 0 und 100/);
  });
});
