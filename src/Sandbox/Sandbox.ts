import Module from '../Module/Module';
export default class Sandbox {
    public registeredModules: Module[];

    constructor(modulesToRegister: Module[] | Module) {
        this.registeredModules = [].concat(modulesToRegister);
    }

    addModule(modulesToAdd: Module[] | Module, shouldStart?: boolean) {
        this.registeredModules = this.registeredModules.concat(modulesToAdd);
    }
}