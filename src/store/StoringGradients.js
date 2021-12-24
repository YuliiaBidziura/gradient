import { makeAutoObservable, toJS } from 'mobx';

export default class StoringGradients {
    constructor() {
        this._gradientStore = [{id: 'd4faeaf5-fa50-4602-b1a5-8e381d2bf9809', hex1: '#a38089', hex2: '#fceee5'}, {id: 'c1fd30d2-4159-4d5d-b3a2-0a0b95235ae65', hex1: '#1f4e5a', hex2: '#30ce88'}, {id: 'c5161659-24f0-4af8-8090-44f1c8f06a241', hex1: '#ffdb6a', hex2: '#ea5f40'}, {id: '9af66b0c-50b8-44dd-9f4a-cbfa5dc0483f4', hex1: '#205374', hex2: '#7e6991'}, {id: 'ca4a5701-4f7e-400d-a0d4-a1005f328c882', hex1: '#4a3341', hex2: '#a3a4be'}]
        makeAutoObservable(this)
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