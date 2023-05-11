package UserBackend.user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import UserBackend.user.entity.User;
import UserBackend.user.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	UserRepository repo;
	//C
	
	 @PostMapping("/create")
	    public ResponseEntity<User> createUser(@RequestBody User user) {
	    	User createdUser = repo.save(user);
		    return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
	
	 }
	 @GetMapping
	  public List<User> readAll() {
	        return repo.findAll();
	  }
	  
	 @GetMapping("/{id}")
	  public User readbyId(@PathVariable int id) {
	        return repo.findById(id).get();
	  }
	 

	 @PutMapping("/{id}")
	    public User updateUser(@PathVariable int id, @RequestBody User user) {
		 	user.setId(id);
		 	return repo.save(user);
	    }	
	 @DeleteMapping("/{id}")
	 public void delete(@PathVariable int id) {
		 repo.deleteById(id);
	 }
   
	 
}
