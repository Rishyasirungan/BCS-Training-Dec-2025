# Task 1.1
# Compare Two People’s Heights (Taller / Same Height)
# Hint - input
# Better - abs()
# Expected Output -
# Case 1:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 163
# Luffy is taller than Zoro by 10cm

first_name = input('Please tell me the captain name?: ')
second_name = input('Please tell me the vice captain name?: ')
first_height = input(f'Please tell me the height of {first_name}?: ')
second_height = input(f'Please tell me the height of {second_name}?: ')
differencies = float(abs(float(first_height)-float(second_height)))

if (first_height>second_height):
    print(f'{first_name} is taller than {second_name} by {differencies}cm')
elif (second_height==first_height):
    print(f'{first_name} and {second_name} are of same height')
else:
    print(f'{second_name} is taller than {first_name} by {differencies}cm')

