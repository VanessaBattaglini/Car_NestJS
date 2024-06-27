import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
    
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ){}
    @Get()
    getAllCars() {
        return this.carService.findAll();
    }
    @Get(':id') 
    getById(@Param('id', ParseIntPipe) id: number) {
        console.log({id})
        return this.carService.findOneById(id);
    };
    
    @Post()
    createCar( @Body() body:any) {
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any) {
        return body;
    };

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: "Delete",
            id
        };
    }

    }

