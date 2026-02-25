books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]
# Task 1.1
titles = []
for i in range(len(books)):
    titles.append(books[i]['title'])
print(titles) # ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]
print('\n')

# Task 1.2
fic_books = []
for i in range(len(books)):
    if books[i]['genre']=='Fiction':
        fic_books.append(books[i]['title'])

print(fic_books)
print('\n')

#Task 1.3.1
high_rated = []
for i in range(len(books)):
    if (books[i]['rating'])>=4.7:
        high_rated.append(books[i]['title'])
# print(high_rated)#Highest rated books are Sapiens, A Brief History of Time and Clean Code 
print(f'Highest rated books are {high_rated[:-1]} , and {high_rated[-1]} ')

# Task 1.3.2
given_rate = float(input('Please provide rating: '))
rated_books = []
count = 0
for i in range(len(books)):
    if (books[i]['rating'])==given_rate:
        rated_books.append(books[i]['title'])
        count+1
if count==1:
    print(f'The book available is {rated_books[0]}')
elif count>=2:
    print(f'The books available are {rated_books} ')

