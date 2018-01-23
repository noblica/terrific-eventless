import Module from './Module';
import Sandbox from '../Sandbox/Sandbox';

describe('Module', () => {
    const testElement = document.createElement('DIV');
    describe('constructor()', () => {
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


    describe('registerSandbox()', () => {
        class FooExtend extends Module {
            constructor(element: HTMLElement) {
                super(element);
            }

            foo() {
                return 'foo';
            }

            bar() {
                return this.sandbox.registeredModules[1].bar();
            }
        }

        class BarExtend extends Module {
            constructor(element: HTMLElement) {
                super(element);
            }

            bar() {
                return 'bar';
            }
        }

        it('should invoke a function from a different module, via Sandbox', () => {
            const FooModule = new FooExtend(testElement);
            const BarModule = new BarExtend(testElement);

            const testSandbox = new Sandbox([FooModule, BarModule]);

            FooModule.registerSandbox(testSandbox);
            BarModule.registerSandbox(testSandbox);
            expect(FooModule.bar()).toBe('bar');
        });
    });
});
