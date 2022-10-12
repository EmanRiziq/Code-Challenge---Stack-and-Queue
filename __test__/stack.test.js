const Stack = require('../stack');


describe('Testing stack', () => {
    it('Test creating a stack', () => {
        const S1 = new Stack();
        expect(S1).toBeDefined();
        expect(S1).toBeInstanceOf(Stack);
        expect(S1.top).toBeNull();
    })
})


describe('pushItem', () => {
    it('Add an item to the stack', () => {
        const S1 = new Stack();
        S1.pushItem('a');
        expect(S1.top).toEqual('a');
    });
})

describe('popItem', () => {
    it('delete an item from an empty stack', () => {
        const S1 = new Stack();
        S1.popItem();
        expect(S1.top).toBeNull();
    });

    it('delete an item from the stack', () => {
        const S1 = new Stack();
        S1.pushItem('a');
        S1.pushItem('b');
        S1.pushItem('c');
        S1.popItem();
        expect(S1.top.value).toEqual('b');
    })
})

describe('peek', () => {
    it('call the peek fun', () => {
        const S1 = new Stack();
        S1.pushItem('a');
        S1.pushItem('b');
        S1.pushItem('c');

        expect((S1.peek())).toEqual('c');
    });
})

describe('is empty', () => {
    it('check empty stack', () => {
        const S1 = new Stack();
        expect((S1.isEmpty())).toEqual(true);
    });
    it('check empty stack', () => {
        const S1 = new Stack();
        S1.pushItem('a');
        expect((S1.isEmpty())).toEqual(false);
    });
})
