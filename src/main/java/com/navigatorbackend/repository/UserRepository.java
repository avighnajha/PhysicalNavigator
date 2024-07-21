package com.navigatorbackend.repository;

import com.navigatorbackend.model.UserModel;
import com.navigatorbackend.model.Walk;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);
}
