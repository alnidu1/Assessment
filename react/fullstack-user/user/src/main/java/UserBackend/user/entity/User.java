package UserBackend.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="user")
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstname;
	private String lastname;
	private String email;
	private String image_src;
	
	
	public User() {
		super();
	}


	public User(String firstname, String lastname, String email, String image_src) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.image_src = image_src;
	}
	
	
}
