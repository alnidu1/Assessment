package employee;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.LinkedList;
import java.util.Scanner;

import employee.dao.EmployeeDao;

public class Main {

	public static void main(String[] args) {
		Employee a = new Employee("Sam", "CS", 30, "sam@gmail.com");
		Employee b = new Employee("Andy", "HR", 40, "Andy@gmail.com");
		Employee c = new Employee("Alex", "Rep", 50, "Alex@gmail.com");
		int cases=0;

		
		Scanner sc= new Scanner(System.in);

		ArrayList<Employee> elist=new ArrayList<Employee>();
		elist.add(a);
		elist.add(b);
		elist.add(c);

		EmployeeDao empdao= new EmployeeDao();

		do {
			try {
				System.out.println("========MENU=========");
				System.out.println("1.Add Employees\n2.Print Employees\n3.Delete\4.Exit\n\n Please Enter Menu Option");
				cases=sc.nextInt();
			}
			catch(InputMismatchException e) {
				System.out.println("Invalid Input datatype, please enter an Integer ");
				sc.nextLine();
			}
			
			switch (cases) {
			
				case 1:
					System.out.println("Enter Employee details");
					Employee temp;
					temp=empdao.create();
					if(temp!=null) {
						elist.add(temp);
					}
					break;
				case 2:
					empdao.printAll(elist);

					break;
				case 3:
					empdao.delete(elist);

					break;
					
				case 4:
					
					break;
					
				default:
					System.out.println("Invalid case");
					
				}
			}while(cases!=4);
				
			
		}

		
		
	
}
