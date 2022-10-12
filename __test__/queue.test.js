const Queue =require( '../queue');


describe('Testing queue', () => {
    it('Test creating a queue', () => {
        const Q1 = new Queue();
        expect(Q1).toBeDefined();
        expect(Q1).toBeInstanceOf(Queue);
        expect(Q1.front).toBeNull();
    })
})


describe('enqueue', () => {
    it('Add an item to the queue', () => {
        const Q1 = new Queue();
        Q1.enqueue('a');
        expect(Q1.front).toEqual('a');
    });
})
describe('enqueue', () => {
    it('Add an item to the queue', () => {
        const Q1 = new Queue();
        Q1.enqueue('a');
        Q1.enqueue('b');
        Q1.enqueue('c');
        Q1.dequeue()

        expect(Q1.front).toEqual('a');
    });
})



describe('peek', () => {
    it('call the peek fun', () => {
        const Q1 = new Queue();
        Q1.enqueue('a');
      

        expect((Q1.peek().value)).toEqual('a');
    });
})

describe('is empty', () => {
    it('check empty queue', () => {
        const Q1 = new Queue();
        expect((Q1.isEmpty())).toEqual(true);
    });
    it('check empty queue', () => {
        const Q1 = new Queue();
        Q1.enqueue('a');
        expect((Q1.isEmpty())).toEqual(false);
    });
})
