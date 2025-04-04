// DO NOT USE ALL CODE!
// The following is created as a learning tool
// for the RSRL program for Telus Spark Science Centre
// ##############################################################
// Outputs
console.log("Hello, World!")
basic.showString("Hello, MicroBit")
// ###############################################################
// Variables, Strings, Integers, Floats
let Make = "Ford"
let Model = " Escape"
let Horsepower = 210
let Zeroto60 = 4.3
// Show outputs of variables input
console.log(Make + Model)
basic.showNumber(Horsepower)
// ################################################################
// Boolean Variables
let Front_WD = true
let All_WD = false
let Rear_WD = false
let Four_WD = false
// Conditional Statement 1
if (Front_WD) {
    basic.showString("FWD")
} else {
    basic.showString("AWD")
}

// ################################################################
// Conditional Statement 2, Boolean Variables are needed
if (Front_WD) {
    basic.showString("FWD Only")
} else if (Rear_WD) {
    basic.showString("RWD Only")
} else if (All_WD) {
    if (Four_WD) {
        basic.showString("FWD & 4WD")
    }
    
} else {
    basic.showString("AWD")
}

// ################################################################
// Loops1, Finite Loop
let odometer = 0
for (let i = 0; i < 1000000; i++) {
    odometer = odometer + 1
    basic.showNumber(odometer)
}
// #################################################################
// Loops2, Forever Loop
let speed = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        speed += 1
        basic.showNumber(speed)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        speed -= 1
        if (speed < 0) {
            speed = 0
        }
        
        basic.showNumber(speed)
    }
    
}
// ##################################################################
// Loops3, Conditional Loop
speed = 0
let tank = 10
while (tank > 0) {
    if (input.buttonIsPressed(Button.A)) {
        speed += 1
        tank -= 1
        basic.showNumber(speed)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        speed -= 1
        if (speed < 0) {
            speed = 0
        }
        
        basic.showNumber(speed)
    }
    
}
basic.showString("Oh no, your tank is empty!")
// ##################################################################
// Functions
function head_lights() {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            .....
            .....
            ##.##
            #...#
            .....
            `)
    } else {
        basic.clearScreen()
    }
    
}

while (true) {
    head_lights()
}
// ##################################################################
// Events
input.onLogoEvent(TouchButtonEvent.Pressed, function HL_on() {
    basic.showLeds(`
                .....
                .....
                ##.##
                #...#
                .....
                `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function HL_off() {
    basic.clearScreen()
})
