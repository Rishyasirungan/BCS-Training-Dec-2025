secret_message = "   Programming in Python is not only powerful but also fun!   "

# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"

print((f'{secret_message[18:24]}-{secret_message[37:45]}').upper())

# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"

# Expected Output
# "python 🗡️ powerful 🌸"

print((f'{flipped_message[-1:-7:-1]} 🗡️   {flipped_message[-13:-21:-1]} 🌸').lower())

# Task 1.3 (Home Assignment)

# After the 🔑
message = "    🚨🔍📱🔑secret_code✌️"
# Clue: find

# Output
# SECRET_CODE✌️