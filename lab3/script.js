// CARs
let car1 = new Object()

car1.color = "red"
car1.maxSpeed = 109
car1.driver = new Object()
car1.tuning = true
car1["number of accidents"] = 0

car1.driver.name = "Viacheslav Rudyi"
car1.driver.category = "C"
car1.driver["personal limitations"] = "No driving at night"

let car2 = {
    color: "blue",
    maxSpeed: 70,
    driver: {
        name: "Viacheslav Rudyi",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
}

car1.drive = function() {
    console.log("I am not driving at night")
}

car2.drive = function() {
    console.log("I can drive anytime")
}

car1.drive()
car2.drive()

// TRUCKs
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color
    this.weight = weight
    this.avgSpeed = avgSpeed
    this.brand = brand
    this.model = model

    this.trip = function() {
        if (!this.driver) console.log("No driver assigned")
        else {
            let message = `Driver ${this.driver.name} `
            if (this.driver.nightDriving == true) message += "drives at night"
            else message += "does not drive at night"
            message += ` and has ${this.driver.experience} years of experience`

            console.log(message)
        }
    }
}
Truck.prototype.AssignDriver = function(driverName, night, driverExperience) {
    this.driver = {
        name: driverName,
        nightDriving: night,
        experience: driverExperience
    }
}

let truck1 = new Truck("grey", 6500, 80, "Mercedes", "Atego")
let truck2 = new Truck("white", 29000, 70, "Volvo", "VM")

truck1.trip()

truck1.AssignDriver("Volodymyr", true, 20)
truck2.AssignDriver("Maksym", false, 11)

truck1.trip()
truck2.trip()

// SHAPEs
class Square {
    constructor(a) {
        this.a = a
    }

    static help() {
        let info = `Square is a cool shape
        it has 4 equally long sides (length a) and 4 90-degree angles
        Opposite sides are parallel to each other as well`

        console.log(info)
    }

    length() {
        console.log(`Length: ${this.a * 4}`)
        return this.a * 4
    }
    square() {
        console.log(`Area: ${this.a ** 2}`)
        return this.a ** 2
    }
    info() {
        let info = `Square info:
        A: ${this.a}
        Length: ${this.length()}
        Area: ${this.square()}`
        console.log(info)
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a)
        this.b = b
    }

    static help() {
        let info = `A rectangle has two sides of length A and two side sof length B
        All angles are 90 degrees`
        console.log(info)
    }
    length() {
        let result = this.a + this.a + this.b + this.b
        console.log(`Length: ${result}`)
        return result
    }
    square() {
        let area = this.a * this.b
        console.log(`Area: ${area}`)
        return area
    }
    info() {
        let info = `Rectangle info:
        A: ${this.a}
        B: ${this.b}
        length: ${this.length()}
        Area: ${this.square()}`
        console.log(info)
    }
}

const deg2rad = function(deg) {
    return deg * (Math.PI / 180)
}

class Rhombus extends Square {
    get alpha() {
        console.log("Get Rhombus alpha")
        return this._alpha
    }
    set alpha(newAlpha) {
        console.log("Set Rhombus Alpha")
        this._alpha = newAlpha
    }

    get beta() {
        console.log("Get Rhombus beta")
        return this._beta
    }
    set beta(newBeta) {
        console.log("Set Rhombus Beta")
        this._beta = newBeta
    }

    get a() {
        console.log("Get Rhombus side length")
        return this._a
    }
    set a(newA) {
        console.log("Set Rhombus side length")
        this._a = newA    
    }

    constructor(a, alpha, beta) {
        super(a)
        // this.a = a
        this.alpha = alpha
        this.beta = beta
    }
    static help() {
        let info = `Rhombus has 4 sides of equal length A
        Obtuse angles are Alpha degrees
        Acute angles are Beta degrees`
        console.log(info)
    }
    length() {
        return super.length()
        // console.log(`Rhombus length: ${a + a + a + a}`)
    }
    square() {
        let area = this.a * this.a * Math.sin(deg2rad(this.alpha))
        console.log(`Area: ${area}`)
        return area
    }
    info() {
        let info = `Rhombus info:
        A: ${this.a}
        Alpha: ${this.alpha}
        Beta: ${this.beta}
        length: ${this.length()}
        Area: ${this.square()}`

        console.log(info)
    }
}

class Parallelogram extends Rectangle{
    constructor(a, b, alpha, beta) {
        super(a, b)
        // this.a = a
        // this.b = b
        this.alpha = alpha
        this.beta = beta
    }
    static help() {
        let info = `Parallelogram has:
        two sides of length A
        two sides of length B
        Obtuse angle Alpha (in degrees)
        Acute angle Beta (in degrees)`
        console.log(info)
    }
    length() {
        return super.length()
    }
    suqare() {
        let area = a * b * sin(deg2rad(alpha))
        console.log(`Area: ${area}`)
        return area
    }
    info() {
        let info = `Parallelogram info:
        A: ${this.a}
        B: ${this.b}
        Alpha: ${this.alpha}
        Beta: ${this.beta}
        Length: ${this.length()}
        Area: ${this.square()}`
        console.log(info)
    }
}

Square.help()
Rectangle.help()
Rhombus.help()
Parallelogram.help()

let square = new Square(5)
let rectangle = new Rectangle(3, 6)
let rhombus = new Rhombus(7, 45, 135)
let parallelogram = new Parallelogram(8, 3, 30, 150)

square.info()
rectangle.info()
rhombus.info()
parallelogram.info()

let Triangular = function(a = 3, b = 4, c = 5) {
    return {
        a: a,
        b: b,
        c: c
    }
}

let tri2 = Triangular(1, 5, 7)
let tri3 = Triangular(23, 4, 60)
let tri1 = Triangular()

console.log(tri1)
console.log(tri2)
console.log(tri3)

const PiMultiplier = function(n) {
    return function() {
        return Math.PI * n
    }
}

const pi2 = PiMultiplier(2)
const pi23 = PiMultiplier(2/3)
const pi05 = PiMultiplier(0.5)

console.log(pi2())
console.log(pi23())
console.log(pi05())

const Painter = function(color) {
    return function(obj) {
        if (!obj.type) console.log("No 'type' property occurred!")
        else {
            console.log(`${color} ${obj.type}`)
        }
    }
}

const PaintBlue = Painter("Blue")
const PaintRed = Painter("Red")
const PaintYellow = Painter("Yellow")

let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
}
let obj2 = {
    type: "Truck",
    "avg speed": 90,
    "load capacity": 2400
}
let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
}

PaintBlue(obj1)
PaintRed(obj1)
PaintYellow(obj1)

PaintBlue(obj2)
PaintRed(obj2)
PaintYellow(obj2)

PaintBlue(obj3)
PaintRed(obj3)
PaintYellow(obj3)