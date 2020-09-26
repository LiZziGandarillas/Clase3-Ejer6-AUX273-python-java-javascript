cad=input().split()
resp=""
for i in range(len(cad)):
	if i%2==0:
		palabra=""
		aux=cad[i]
		for j in range(len(aux)):
			palabra=aux[j]+palabra
		cad[i]=palabra
for i in range(len(cad)-1):
	resp=resp+cad[i]+" "
resp=resp+cad[len(cad)-1]
print(resp)
