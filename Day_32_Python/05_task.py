stock1 = "vanilla"
stock2 = "green tea"
stock3 = "lemon"
stock4 = "chocolate"


# Task 1.2
# Clue - String methods
# Handle the extra space & letter case
# Case1:
# Please enter your fav 🍧?:      vaNillA
# Yes, we have vanilla in stock

# Case 2:
# Please enter your fav 🍧?:   pisTa
# Sorry, we ran out of pista
"""
flavour = (input('Please enter your fav 🍧?: ')).strip().lower()
if (flavour == stock1 or flavour == stock2 or flavour == stock3 or flavour == stock4):
    print(f'Yes, we have {flavour} in stock')
else:
    print(f'Sorry, we ran out of {flavour}')
"""

flavour = (input('Please enter your fav 🍧?: ')).strip().lower()
if flavour in [stock1 ,stock2 , stock4]:
    print(f'Yes, we have {flavour} in stock')
else:
    print(f'Sorry, we ran out of {flavour}')

# Task 1.1
# for Loop and while loop
# 🔥
# 🔥🔥
# 🔥🔥🔥
# 🔥🔥🔥🔥
# 🔥🔥🔥🔥🔥
# count = 1
for i in range (1,6,1):
    print('🔥'*i)
    
# count += 1