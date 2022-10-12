'use strict';

const Node = require('../node');

describe('Testing Node class', () => {
  it('Test creating a new Node', () => {
    const val = ['wlla'];
    const node = new Node(val);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(['wlla']);
    expect(node.next).toBeNull();
  })
})
