package com.get.solved.repositories;

import com.get.solved.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    List<Issue> findIssuesByUserUserId(Long userId);
    Issue findIssueByIssueId(Long issueId);
//    Optional<Problem> findProblemsBy
}
