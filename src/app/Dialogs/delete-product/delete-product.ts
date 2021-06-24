import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class deleteProduct {

    deleteProperty: deleteProductProperty = {
        cancel: () => { },
        delete: () => { },
        message: ''
    };

    setProperty(property: deleteProductProperty) {
        this.deleteProperty.message = property.message;
        this.deleteProperty.cancel = property.cancel;
        this.deleteProperty.delete = property.delete;
    }
}

export interface deleteProductProperty {
    message: string;
    cancel: Function;
    delete: Function;
}