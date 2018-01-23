import Module from './Module';

describe('Module', () => {
    describe('constructor()', () => {
        const testElement = document.createElement('DIV');        
        it('should set the correct context', () => {
            const Foo = new Module(testElement); 
            
            expect(Foo.context).toBe(testElement);
        });

        it('should create an instance of the extended module', () => {
            class ExtendedModule extends Module {
                constructor(element: HTMLElement) {
                    super(element);
                }

                foo() {
                    return 'foo!';
                }
            }

            const FooExtended = new ExtendedModule(testElement);
            
            expect(FooExtended instanceof Module).toBeTruthy();
            expect(FooExtended instanceof ExtendedModule).toBeTruthy();
            expect(FooExtended.context).toBe(testElement);
            expect(FooExtended.foo()).toBe('foo!');
        })
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
