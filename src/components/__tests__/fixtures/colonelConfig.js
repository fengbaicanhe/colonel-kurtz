import Fixture from './testBlockType'

export default {
  el: document.createElement('div'),
  blockTypes: [Fixture],
  blocks: [
    {
      type: Fixture.id,
      content: {},
      blocks: [
        { type: Fixture.id, content: {}, blocks: [] },
        { type: Fixture.id, content: {}, blocks: [] }
      ]
    },
    {
      type: Fixture.id,
      content: {},
      blocks: [
        { type: Fixture.id, content: {}, blocks: [] },
        { type: Fixture.id, content: {}, blocks: [] }
      ]
    }
  ]
}
