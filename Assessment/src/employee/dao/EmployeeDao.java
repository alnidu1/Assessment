package employee.dao;


import java.util.ArrayList;
import java.util.Collections;
import java.util.InputMismatchException;
import java.util.Scanner;

import employee.Employee;


public class EmployeeDao {
	Scanner sc=new Scanner(System.in);

	
	
	public Employee create() {
		
		Employee emp= new Employee();
		try {
			emp.setId();
			System.out.println("Please enter Employee name");
			emp.setName(sc.next());
			System.out.println("Please enter Employee Department");
			emp.setDepartment(sc.next());
			System.out.println("Please enter Employee email");
			emp.setEmail(sc.next());
			System.out.println("Please enter Employee Age");
			emp.setAge(sc.nextInt());
			
			
		}
		catch(InputMismatchException e) {
			System.out.println("Invalid type, try again");
			sc.nextLine();
			return null;
		}
		
		return emp;
		
	}
	public void printAll(ArrayList<Employee> EmployeePojos ) {
		if(EmployeePojos.isEmpty()) {
			System.out.println("List is empty");

			return;
		}
		System.out.println("Employee Details\n");
		for(Employee emp:EmployeePojos) {
			if(emp==null) {
				continue;
			}
			System.out.println("Employee ID:" +emp.getId()+ 
					" Employee Name:" + emp.getName()+ " Department: " +emp.getDepartment()+" Email "+emp.getEmail()+" EmployeeAge:" + emp.getAge());
		}
		System.out.println("\n");

		
		
	}

	
	public void delete(ArrayList<Employee> EmployeePojos) {
		if(EmployeePojos.isEmpty()) {
			
			System.out.println("List is empty");
			return;
		}
		printAll(EmployeePojos);
		
		System.out.println("Please enter Employee Id you wish to delete");
		int uid=0;
		try {
			 uid= sc.nextInt();
		}
		catch(InputMismatchException e) {
			System.out.println("Invalid Input datatype, please enter an Integer ");
			sc.nextLine();
		}
		
		Employee btemp=null;
		
		for(Employee emp: EmployeePojos) {
			if(emp.getId()==uid) {
				btemp=emp;
			}
			
		}
		if(btemp!=null) {
			EmployeePojos.remove(btemp);
			System.out.println("Deleting");
		}
	}
	
	
}
