package employee;

public class Employee {

	private static int lastId=0;
	private long id;
	private String name;
	private String department;
	private int age;
	private String email;
	public long getId() {
		return id;
	}
	
	
	public static int getLastId() {
		return ++lastId;
	}
	
	public void setId() {
		 this.id=getLastId();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Employee(String name, String department, int age, String email) {
		this.id=++lastId;
		this.name = name;
		this.department = department;
		this.age = age;
		this.email = email;
	}



	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", department=" + department + ", age=" + age + ", email="
				+ email + "]";
	}



	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
}
