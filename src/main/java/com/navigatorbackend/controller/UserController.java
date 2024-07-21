package com.navigatorbackend.controller;

import com.navigatorbackend.model.UserModel;
import com.navigatorbackend.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.Optional;

@RestController()
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUserById(@PathVariable Long id) {
        Optional<UserModel> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/signup")
    public ResponseEntity<UserModel> addUser(@RequestBody UserModel userModel) {
        UserModel savedUser = userService.saveUser(userModel);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login/")
    public ResponseEntity<?> loginUser(@RequestBody UserModel user) {
        System.out.println(user.getEmail());
        boolean isValidUser = userService.validateUser(user.getEmail(), user.getPassword());
        if (isValidUser) {
            return ResponseEntity.ok("Login Succesful");
        } else {
            return ResponseEntity.status(400).body("Invalid email or password");
        }
    }
}
