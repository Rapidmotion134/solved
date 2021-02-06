package com.get.solved.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String firstName;
    private String lastName;

//todo
//    @ManyToMany
//    private List<Group> groups;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
//    private List<Issue> issues;

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
