package com.example.controller;

import java.util.List;

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

import com.example.entity.Book;
import com.example.repository.BookRepository;


@RestController
@CrossOrigin
@RequestMapping("/api/book")
public class BookController {

	@Autowired
	BookRepository repo;
	//C
	
	 @PostMapping("/create")
	    public ResponseEntity<Book> createBook(@RequestBody Book user) {
	    	Book createdBook = repo.save(user);
		    return ResponseEntity.status(HttpStatus.CREATED).body(createdBook);
	
	 }
	 @GetMapping
	  public List<Book> readAll() {
	        return repo.findAll();
	  }
	  
	 @GetMapping("/{id}")
	  public Book readbyId(@PathVariable int id) {
	        return repo.findById(id).get();
	  }
	 

	 @PutMapping("/{id}")
	    public Book updateBook(@PathVariable int id, @RequestBody Book book) {
		 	book.setId(id);
		 	return repo.save(book);
	    }	
	 @DeleteMapping("/{id}")
	 public void delete(@PathVariable int id) {
		 repo.deleteById(id);
	 }
	
   
	 
}