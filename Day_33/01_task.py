# Task  1.1 - With function

# emoji(2, "🍓")
# emoji(6, "🍍")
# emoji(4, "🥕")
# emoji(3)

def emoji(count, fruit='🔥'):
     for i in range (1,count+1):
        print(f'{fruit}'*i)

emoji(2, "🍓")
emoji(6, "🍍")
emoji(4, "🥕")
emoji(3)


# 🍓
# 🍓🍓
# 🍍
# 🍍🍍
# 🍍🍍🍍
# 🍍🍍🍍🍍
# 🍍🍍🍍🍍🍍
# 🍍🍍🍍🍍🍍🍍
# 🥕
# 🥕🥕
# 🥕🥕🥕
# 🥕🥕🥕🥕
# 🔥
# 🔥🔥
# 🔥🔥🔥