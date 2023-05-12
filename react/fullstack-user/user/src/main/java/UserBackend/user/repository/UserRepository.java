package UserBackend.user.repository;

import org.springframework.stereotype.Repository;

import UserBackend.user.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


@Repository
public interface UserRepository extends JpaRepository<User, Integer > {

	@Query("SELECT u FROM User u WHERE u.firstname LIKE %:searchTerm% OR u.lastname LIKE %:searchTerm%")
	List<User> searchUsers(@Param("searchTerm") String searchTerm);

	
}
