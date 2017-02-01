namespace Demo.Home {
    export class CarDataService {
        private CarDataResource: ng.resource.IResourceClass<Demo.Models.Car>;

        public listCars(): ng.resource.IResourceArray<Demo.Models.Car> {
            return this.CarDataResource.query();
        }

        // public save(car: Demo.Home.Car) {
        //     return this.CarDataResource.save(car).$promise;
        // }

        // public getCar(id: number) {
        //     return this.CarDataResource.get({ id: id });
        // }

        // public deleteCar(id: number) {
        //     return this.CarDataResource.delete({ id: id }).$promise;
        // }

        static $inject: string[] = [
            '$resource'
        ];

        constructor(
            $resource: ng.resource.IResourceService
        ) {
            this.CarDataResource = $resource<Demo.Models.Car>('/data/cars.data.json');
        }
    }
}
