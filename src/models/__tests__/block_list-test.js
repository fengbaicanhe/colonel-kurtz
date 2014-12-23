jest.dontMock('../block_list')
jest.dontMock('../../utils/uid')

describe('Models - Block List', function() {
  var BlockList = require('../block_list')

  it ('can insert a block', function() {
    var b = new BlockList({})

    b.insertBlock(0, 0)

    expect(b.all()).toEqual([ 0 ])
  })

  it ('can insert a block at a given index', function() {
    var b = new BlockList({})

    b.insertBlock(0, 1)
    b.insertBlock(1, 0)

    expect(b.all()).toEqual([ 1, 0])
  })

  it ('can remove a block', function() {
    var b = new BlockList({})

    b.insertBlock(0, 0)
    b.insertBlock(1, 1)
    b.removeBlock(1)

    expect(b.all()).toEqual([ 0 ])
  })

  it ('can move a block', function() {
    var b = new BlockList({})

    b.insertBlock(0, 0)
    b.insertBlock(1, 1)
    b.move(1, 0)

    expect(b.all()).toEqual([ 1, 0 ])
  })

})