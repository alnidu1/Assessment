package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.entity.Book;
import com.example.repository.BookRepository;

@SpringBootApplication
public class BookBackendApplication  {

	@Autowired
	BookRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(BookBackendApplication.class, args);
	}

	

}
