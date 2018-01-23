import Module from './Module';

describe('Module', () => {
    describe('constructor()', () => {
        it('should set the correct context', () => {
            const testElement = document.createElement('DIV');
            const Foo = new Module(testElement); 
            
            expect(Foo.context).toBe(testElement);
        });
    })

    describe('.start()', () => {
        it('should invoke the passed in method to start', () => {
            const testElement = document.createElement('DIV');            
            const testFn = jest.fn();
            const Foo = new Module(testElement);
            Foo.start(testFn);

            expect(testFn).toHaveBeenCalled();
        });
    });
});
