export default class Module {
    constructor(public context: HTMLElement) {}

    start(callback: Function) {
        return callback();
    }
}