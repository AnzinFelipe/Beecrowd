# Cálculo simples

produto1 = input()
produto2 = input()

lista1 = produto1.split()
lista2 = produto2.split()

total = (int(lista1[1]) * float(lista1[2])) + (int(lista2[1]) * float(lista2[2]))

print(f"VALOR A PAGAR: R$ {total:.2f}")
