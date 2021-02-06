package com.get.solved.services;

import com.get.solved.models.Issue;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue addIssue (Issue prob);
    Issue editIssue (Issue prob);
    List<Issue> getIssuesByUser(Long userId);
    Issue getIssueById(Long problemId);
    void deleteIssue (Issue prob);
}
