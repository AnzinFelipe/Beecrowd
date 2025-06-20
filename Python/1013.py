# O maior

valor = input().split()

a = int(valor[0])
b = int(valor[1])
c = int(valor[2])

maiorAB = (a + b + abs(a - b)) / 2
maiorABC = (maiorAB + c + abs(maiorAB - c)) / 2

print(f"{int(maiorABC)} eh o maior")
