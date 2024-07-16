package com.navigatorbackend.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import com.navigatorbackend.model.Walk;

@Entity
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
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Walk> walks;

}
