package com.get.solved.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data @NoArgsConstructor
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long issueId;
    private String name;
    private String description;
    private LocalDate creationDate;

    @Lob
    private String possibleCauses;
    @Lob
    private String possibleSolutions;
    @ManyToOne
    private User user;

    public Issue(String name, String description, String possibleCauses, String possibleSolutions, User user) {
        this.name = name;
        this.description = description;
        this.possibleCauses = possibleCauses;
        this.possibleSolutions = possibleSolutions;
        this.creationDate = LocalDate.now();
        this.user = user;
    }
}
