package com.navigatorbackend.model;


import com.fasterxml.jackson.annotation.JsonAnyGetter;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import com.navigatorbackend.model.Walk;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table()
public class UserModel {
    @Id
    @SequenceGenerator(
            name = "User_sequence",
            sequenceName = "User_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "User_sequence"
    )
    private long id;
    private String username;
    private String email;
    private String password;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Walk> walks;

}
