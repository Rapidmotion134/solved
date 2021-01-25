package com.get.solved.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data @NoArgsConstructor
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String issueId;
    private String name;
    private String description;

    @Lob
    private String possibleCauses;
    @Lob
    private String possibleSolutions;
    @ManyToOne
    private User user;

    public Issue(String name, String description, String possibleCauses, String possibleSolutions) {
        this.name = name;
        this.description = description;
        this.possibleCauses = possibleCauses;
        this.possibleSolutions = possibleSolutions;

    }
}
