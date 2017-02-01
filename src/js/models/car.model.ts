namespace Demo.Models {
    export class Car {
        constructor(
            public id: number,
            public make: string,
            public price: number,
            public shortDesc: string,
            public longDesc: string,
            public imgUrl: string
        ){}
    }
}