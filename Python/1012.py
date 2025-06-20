# Áreas

nomes = ["TRIANGULO", "CIRCULO", "TRAPEZIO", "QUADRADO", "RETANGULO"]

valor = input().split()

a = float(valor[0])
b = float(valor[1])
c = float(valor[2])

triangulo = (c * a) / 2
pi = 3.14159
circulo = pi * c ** 2
trapezio = ((a + b) * c) / 2
quadrado = b ** 2
retangulo = a * b

valores = [triangulo, circulo, trapezio, quadrado, retangulo]

for i in range(5):
    print(f"{nomes[i]}: {valores[i]:.3f}")
