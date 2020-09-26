import java.util.Scanner;

public class Ejer6 {

	public static void main(String[] args) {
		Scanner leer = new Scanner(System.in);
		String cad [] = leer.nextLine().split(" ");
		String resp="";
		for (int i = 0; i < cad.length; i++) {
			if(i%2==0)
			{
				String palabra="";
				for (int j = cad[i].length()-1; j >=0; j--) {
					palabra=palabra+cad[i].charAt(j);					
				}
				cad[i]=palabra;
			}
		}
		for (int i = 0; i < cad.length-1; i++) {
			resp=resp+cad[i]+" ";
		}
		resp=resp+cad[cad.length-1];
		System.out.println(resp);

	}

}
