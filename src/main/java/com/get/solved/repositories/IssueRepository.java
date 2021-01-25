package com.get.solved.repositories;

import com.get.solved.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    Optional<Issue> findIssuesByUser (Long userId);
    Issue findByIssueId (Long problemId);
//    Optional<Problem> findProblemsBy
}
