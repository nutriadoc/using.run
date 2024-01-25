/**
 * @jest-environment jsdom
 */

import {fetchPackage, latestVersion, loadModule} from "./index.ts";

describe("Test", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });

  it("should fetch a package.json", async () => {
    const pkg = await fetchPackage("nutria")
    expect(pkg.name).toBe("nutria")
  })

  it("should got a version", async () => {
    const pkg = await fetchPackage("nutria")
    const latest = latestVersion(pkg)
    expect(latest).toBeDefined()
  })

  it("should be loaded from cdn", async () => {
    await loadModule("nutria")
    const scripts = document.scripts
    console.debug(scripts)
  })
})