import { describe, it, mock } from "node:test";
import assert from "node:assert";
import { UserService } from "../src/userService.js";

describe("UserService", () => {
  it("liefert den Anzeigenamen", async () => {
    const user = { firstName: "Ada", lastName: "Lovelace" };
    const repo = { findById: mock.fn(async () => user) };
    const service = new UserService(repo);

    assert.equal(await service.getDisplayName(1), "Ada Lovelace");
    assert.equal(repo.findById.mock.calls.length, 1);
  });

  it("wirft einen Fehler, wenn der User fehlt", async () => {
    const repo = { findById: mock.fn(async () => null) };
    const service = new UserService(repo);

    await assert.rejects(() => service.getDisplayName(42), /nicht gefunden/);
  });
});
