// Defines the HomeController controller
namespace Demo.Home {
    export class HomeController {
        private CarList: Demo.Models.Car[];

        public get cars(): Demo.Models.Car[] {
            return this.CarList;
        }

        static $inject: string[] = [
            'CarDataService'
        ];

        constructor(
            private CarDataService: Demo.Home.CarDataService
        ) {
            this.CarList = this.CarDataService.listCars();
        }

        public getCarData(): Demo.Models.Car[] {
            return this.CarList;
        }
    }

}