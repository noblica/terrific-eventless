import Sandbox from '../Sandbox/Sandbox';

export default class Module {
    public sandbox?: Sandbox

    constructor(public context: HTMLElement, public sandbox?: Sandbox) {}

    start(callback: Function) {
        return callback();
    }
    
    registerSandbox(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }
}