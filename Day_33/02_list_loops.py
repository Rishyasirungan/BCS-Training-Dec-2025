flowers = ["💐", "🌷", "🌼", "🌷", "🌺"]

# Task 1.1 - Print all the flower using for loop
# Hint - range, len

for i in range(0,len(flowers)):
    print(f'Flower {i+1} - {flowers[i]}')

# Expected output
# Flower 1 - 💐
# Flower 2 - 🌷
# Flower 3 - 🌼
# Flower 4 - 🌷
# Flower 5 - 🌺

# Task 1.2: Double all the numbers
marks = [80, 90, 100, 60, 85]

for i in range(len(marks)):
    marks[i]=(marks[i]*2)

print(marks)

# Output
# print(marks) -> [160, 180, 200, 120, 170]

# Task 1.3: Double the power
powers = [2000, 3000, 4000, 1500]
doubled_powers=[]
for power in powers:
    doubled_powers.append(power*2)

print(doubled_powers)
# Output
# doubled_powers -> [4000, 6000, 8000, 3000]
# powers -> [2000, 3000, 4000, 1500]

# ## Task 1.4
# Find longer names (>= 6 letter)

characters = ["Hello kitty", "Goku", "Pikachu", "Luffy", "Yuji Itadori", "Levi"]
short_character=[]
for char in characters:
    if len(char)>=6:
        short_character.append(char)

print (short_character)
# ### Expected Output
# ['Hello kitty', 'Pikachu', 'Yuji Itadori']