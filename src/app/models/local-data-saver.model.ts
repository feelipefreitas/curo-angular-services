export class LocalDataSaver<T> {
    private localObjSaved: T = {} as T;

    protected hasLocalObjSaved() {
        if(Object.keys(this.localObjSaved).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    protected getLocalObjSaved(): T {
        return this.localObjSaved;
    }

    protected setLocalObj(objToSave: T) {
        this.localObjSaved = objToSave;
    }
}