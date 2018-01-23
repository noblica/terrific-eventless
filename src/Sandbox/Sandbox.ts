import Module from '../Module/Module';
export default class Sandbox {
    public registeredModules: Module[];

    constructor(modulesToRegister: Module[] | Module) {
        this.registeredModules = [].concat(modulesToRegister);
    }

    addModule(modulesToAdd: Module[] | Module, shouldStart?: boolean) {
        this.registeredModules = this.registeredModules.concat(modulesToAdd);
    }

    getModule(moduleName: string): Module | null {
        let requiredModule = null;

        this.registeredModules.some(currentModule => {
            const currentModuleName = currentModule.constructor.name;
            if(currentModuleName === moduleName) {
                requiredModule = currentModule;
                return true;
            };
        });

        return requiredModule;
    }
}