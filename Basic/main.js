
/*Creat a new class you can call multip. times for objects(var, let)*/
class Car{
	/*Creat a constructor for your new Car Class*/
	constructor( name, model, makeYear, color, fuelType){
		this.name =  name;
		this.model =  model;
		this.makeYear= makeYear;
		this.color= color;
		this.fuelType= fuelType;
		
	} 
/*get Value of the class form constructor with get meth*/
	get fullName() {
			return this.name + " " + this.model;
		}
	get CarColor(){
		return this.color;
	}
	/*set value form color new?*/
	lastName(test){
                return this.color = test;
       }
}

var car0 = new Car("911Turbo", "Porsche", "1999", "yellow", "Diesel");
var car1 = new Car("Punto", "Fiat", "2010", "black", "Diesel");
var car2 = new Car("Golf", "VW", "1990", "green", "Diesel");
var car3 = new Car("Z4", "BMW", "2019", "red", "Benzin");
var car4 = new Car("A8", "Audi", "1980", "blue", "Diesel");

var carArr = [car0, car1, car2, car3, car4];
car4.lastName("black");


for(i=0;i<carArr.length;i++){
	console.log(carArr[i].fullName);
	console.log(carArr[i].CarColor);
}

