# # Blueprint
# # self, this - context word

# # this is my book - context (book)
# # this is my pen - context (pen)
# class Car:
#     # function =  method (class function)
#     def __init__(self, wheels, engine, model, doors):
#         # instance variables
#         self.wheels = wheels
#         self.engine = engine
#         self.model = model
#         self.doors = doors

#     # instance methods - objects share them
#     def horn(self):
#         return "Vroom Vroom!!!"


# # Share

# # Object
# # self -> Object
# hindustan = Car(4, "v4", "Ambassador", 4)
# jeep = Car(4, "v6", "Wrangler", 4)


# print(hindustan)  # Car object
# print(jeep)

# # Dot syntax - Class objects
# print(jeep.model)
# print(jeep.doors)

# print(jeep.horn())
# print(hindustan.horn())

# # ## Tata
# # - Wheels - 4
# # - Engine - v4
# # - Model - Harrier
# # - Doors - 4

class Account:
    def __init__(self,name, acc_no, balance):
        self.name=name
        self.acc_no=acc_no
        self.balance=balance
    
    def display_balance(self):
        return (f'Your balance is: ₹{self.balance:,.2f}')
    
    def withdraw(self, widhrawl_amount):
        if(widhrawl_amount<0):
            return ('Invalid amount')
        elif(self.balance>=widhrawl_amount):
            self.balance=self.balance-widhrawl_amount
            return (f'Success. Your balance is: ₹{self.balance:,.2f}')
        elif(self.balance<=widhrawl_amount):
            return (f'Insufficient funds. Your balance is: ₹{self.balance:,.2f}')
        
        
    def deposit(self, deposit_amount):
        self.balance += deposit_amount
        return f'Success. {self.display_balance()}'
        
    

    

# print(f"The height is: {height:.2f}")
# print(f"The height is: {height:.0f}")  # rounds
# print(f"The height is: {height:.4f}")


rishi = Account("rishi", 123, 10_00_000)

print(rishi.acc_no)
print(rishi.display_balance())

## Task 1.2

print(rishi.withdraw(1_00_000))  # Success. Your balance is: ₹900,000.00
print(rishi.display_balance())  # Your balance is: ₹900,000.00
print(rishi.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
print(rishi.withdraw(-100))  # Invalid amount
print('\n')
print(rishi.deposit(1_00_000))  # Success. Your balance is: ₹400,000.00
print(rishi.display_balance())  # Your balance is: ₹400,000.00