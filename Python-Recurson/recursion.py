print('Recursion - a function in Python that can call itself')

def factorial(n):
  print(n) # print to see n for myself

  # base case ---- STOP recursion Python halts at 1000 calls -recursion error
  if n == 1: return 1
  return n * factorial(n - 1)

print('result of factorial(3)', factorial(3))
print('result of factorial(4)', factorial(4))
print('result of factorial(10)', factorial(10))
