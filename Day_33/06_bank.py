class Account:
    interest_rate = 0.02
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
    
    def apply_interest(self):
        self.balance=(self.balance * Account.interest_rate)+self.balance
        return f'Success. Applied interest rate of 2.00%. {self.display_balance()}'
    @classmethod
    def update_interest_rate(cls , update_interest):
        Account.interest_rate = update_interest/100
        return f'Success. Interest rate updated => {Account.interest_rate:.2%}'

gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)

# Task 1.5
# Interest rate 2%
# 100 + 2 = 102
print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

print(Account.update_interest_rate(4))

print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())