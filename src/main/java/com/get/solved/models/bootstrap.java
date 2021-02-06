package com.get.solved.models;

import com.get.solved.repositories.IssueRepository;
import com.get.solved.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class bootstrap {
    User user = new User("Bilbo", "Baggins");
    Issue issue = new Issue("Issue with Adding student",
            "name is null",
            "controller Add method",
            "add @Requestbody",
            user);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, IssueRepository issueRepository) {
        return args -> {
            log.info("Preloading " + userRepository.save(user));
            log.info("Preloading " + issueRepository.save(issue));
        };
    }
}
