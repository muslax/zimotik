"use strict"
const expect = require("chai").expect
const index = require("../dist/index.js")

describe("zimotik function tests", () => {
  it("should return 18891", () => {
    const result = index.getSemuaKataBenda()
    expect(result.length).to.equal(18891)
  })

  it("should return 'aba'", () => {
    const result = index.getSemuaKataBenda()
    expect(result[0]).to.equal("aba")
  })

  it("should return 'zus'", () => {
    const result = index.getSemuaKataBenda()
    expect(result[result.length - 1]).to.equal("zus")
  })
})
