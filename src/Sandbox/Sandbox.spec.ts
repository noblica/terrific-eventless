import Module from '../Module/Module';
import Sandbox from '../Sandbox/Sandbox';

describe('Sandbox', () => {
    describe('constructor', () => {
        const testElement = document.createElement('DIV');

        it('should create a Sandbox from a module', () => {
            const FooModule = new Module(testElement);
            const FooSandbox = new Sandbox(FooModule);
            expect(FooSandbox.registeredModules).toContain(FooModule);
        });

        it('should create a Sandbox from an array of modules', () => {
            const FooModules = [new Module(testElement), new Module(testElement)];
            const FooSandbox = new Sandbox(FooModules);
            expect(FooSandbox.registeredModules[0]).toBe(FooModules[0]);
            expect(FooSandbox.registeredModules[1]).toBe(FooModules[1]);
            expect(FooSandbox.registeredModules).toEqual(expect.arrayContaining(FooModules));
        });

        it('should add an extended module to the sandbox', () => {
            class ExtendedModule extends Module {
                constructor(element: HTMLElement) {
                    super(element);
                }

                foo() {
                    return 'foo!';
                }
            }

            const FooExtended = new ExtendedModule(testElement);
            const FooSandbox = new Sandbox(FooExtended);

            expect(FooExtended instanceof Module).toBeTruthy();
            expect(FooExtended instanceof ExtendedModule).toBeTruthy();
            expect(FooSandbox.registeredModules).toContain(FooExtended);
        });
    });
});