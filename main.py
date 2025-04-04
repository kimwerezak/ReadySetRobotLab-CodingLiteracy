#DO NOT USE ALL CODE!
#The following is created as a learning tool
#for the RSRL program for Telus Spark Science Centre

###############################################################

#Outputs
print("Hello, World!")
basic.show_string("Hello, MicroBit")

################################################################

#Variables, Strings, Integers, Floats
Make = "Ford"
Model = " Escape"
Horsepower = 210
Zeroto60 = 4.3

#Show outputs of variables input
print(Make + Model)
basic.show_number(Horsepower)

#################################################################

#Boolean Variables
Front_WD = True
All_WD = False
Rear_WD = False
Four_WD = False

Conditional Statement 1
if Front_WD:
    basic.show_string("FWD")
else:
    basic.show_string("AWD")

#################################################################

#Conditional Statement 2, Boolean Variables are needed
if Front_WD:
    basic.show_string("FWD Only")
elif Rear_WD:
    basic.show_string("RWD Only")
elif All_WD:
    if Four_WD:
        basic.show_string("FWD & 4WD")
else:
    basic.show_string("AWD")

#################################################################

#Loops1, Finite Loop
odometer = 0
for i in range (0, 1000000):
    odometer = odometer + 1
    basic.show_number(odometer) 

##################################################################

#Loops2, Forever Loop
speed = 0
while True:
    if input.button_is_pressed(Button.A):
        speed += 1
        basic.show_number(speed)
    
    if input.button_is_pressed(Button.B):
        speed-= 1
        if speed < 0:
            speed = 0
        basic.show_number(speed)

###################################################################

#Loops3, Conditional Loop
speed = 0
tank = 10

while (tank>0):
    if input.button_is_pressed(Button.A):
        speed += 1
        tank -= 1
        basic.show_number(speed)
    if input.button_is_pressed(Button.B):
        speed -= 1
        if speed<0:
            speed = 0
        basic.show_number(speed)
basic.show_string("Oh no, your tank is empty!")

###################################################################

#Functions
def head_lights():
    if input.light_level()<100:
        basic.show_leds("""
            .....
            .....
            ##.##
            #...#
            .....
            """)
    else:
        basic.clear_screen()

while True:
    head_lights()

###################################################################


#Events
def HL_on():
    basic.show_leds("""
                .....
                .....
                ##.##
                #...#
                .....
                """)
def HL_off():
    basic.clear_screen()

input.on_logo_event(TouchButtonEvent.PRESSED, HL_on)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, HL_off)
