package com.navigatorbackend.service;

import com.navigatorbackend.model.UserModel;
import com.navigatorbackend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Iterable<UserModel> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }

    public UserModel saveUser(UserModel userModel){
        System.out.println("In save user");
        if (userRepository.existsById(userModel.getId())){
            throw new RuntimeException("User already exists");
        }
        UserModel savedUser = userRepository.save(userModel);
        System.out.println("User saved in saveUser");
        return savedUser;
    }

    public boolean validateUser(String email, String password) {
        System.out.println("In validate user");
        Optional<UserModel> user = userRepository.findByEmail(email);
        System.out.println(user);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}
