package com.dairysync.service;

import com.dairysync.model.User;
import com.dairysync.model.UserRole;
import com.dairysync.repository.UserRepository;

import jakarta.validation.Valid;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Add a new user to the database
    public User addUser(@Valid User newUser) {
        if (newUser == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        // Set default role to CLIENT if not specified
        if (newUser.getRole() == null) {
            newUser.setRole(UserRole.CLIENT);
        }
        try {
            return userRepository.save(newUser);
        } catch (ConstraintViolationException e) {
            // Handle validation errors
            throw new IllegalArgumentException("Validation error: " + e.getMessage());
        }
    }
    
    // Retrieve all users from the database
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Retrieve a user by their ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
    public User getUserByname(String name) {
        return userRepository.findByname(name)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    // Delete a user by their ID
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found");
        }
        userRepository.deleteById(id);
    }
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Update an existing user
    public User updateUser(Long id, User updatedUser) {
        User user = getUserById(id);
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            user.setPassword(updatedUser.getPassword());
        }
        user.setAddress(updatedUser.getAddress());
        // Optionally, handle mobileNo if it's being updated
        // user.setMobileNo(updatedUser.getMobileNo());
        return userRepository.save(user);
    }
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);}
    // Authenticate a user
    public User loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getPassword().equals(password)) {
                return user; // Login successful
            } else {
                throw new IllegalArgumentException("Invalid password");
            }
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
    public User activateUser(Long id) {
        User user = getUserById(id);
        user.setActive(true);
        return userRepository.save(user);
    }
    
    public User deactivateUser(Long id) {
        User user = getUserById(id);
        user.setActive(false);
        return userRepository.save(user);
    }
}
