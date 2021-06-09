export interface CdDisks{
    title:string;
    width:number;
}

export function getStr(sayWord:string):string{
    return 'Hello world: ' + sayWord
}

export class MyClass{
    name:string = ''
    constructor(name:string = 'Vladimir'){
        this.name = name
        console.log('My name is: ', this.name)
    }
}