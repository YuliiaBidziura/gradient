import { makeAutoObservable, toJS } from "mobx";
import { v4 as uuid } from 'uuid';

export default class StoringGradients {
    constructor() {
        this._gradientStore = [{id: uuid(), hex1: '#ffdab9', hex2: '#dc143c'}, {id: uuid(), hex1: '#da70d6', hex2: '#afeeee'}, {id: uuid(), hex1: '#00ffff', hex2: '#00ff00'}, {id: uuid(), hex1: '#0000ff', hex2: '#dda0dd'}, {id: uuid(), hex1: '#ffff00', hex2: '#0000ff'}];
        makeAutoObservable(this);
    };

    setGradientToGradientStore(gradient) {
        this._gradientStore.push(gradient);
    };
    setArrOfGradients(gradients) {
        this._gradientStore = gradients;
    };
    get gradientStore() {
        return toJS(this._gradientStore);
    };
   
};