package Student;

public class Student {

	private long roll;
	private String name;
	private String address;
	private String email;
	@Override
	public String toString() {
		return "Student [roll=" + roll + ", name=" + name + ", address=" + address + ", email=" + email + "]";
	}
	public long getRoll() {
		return roll;
	}
	public void setRoll(long roll) {
		this.roll = roll;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Student(long roll, String name, String address, String email) {
		this.roll = roll;
		this.name = name;
		this.address = address;
		this.email = email;
	}
	public Student() {
		
	}
	
	
	
	
	
}
