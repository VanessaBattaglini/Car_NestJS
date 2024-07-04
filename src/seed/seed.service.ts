import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carServices: CarsService,
    private readonly brandServices: BrandsService,
  ){}
  populateDB() {
    // CARS_SEED;
    // BRANDS_SEED;

    this.carServices.fillCarsWithSeedData(CARS_SEED);
    this.brandServices.fillCarsWithSeedData(BRANDS_SEED);
  }
  
}
