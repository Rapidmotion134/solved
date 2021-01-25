package com.get.solved.services;

import com.get.solved.models.Issue;
import com.get.solved.repositories.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService {
    private final IssueRepository issueRepository;

    public IssueServiceImpl(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    @Override
    public Issue addIssue(Issue prob) {
        return issueRepository.save(prob);
    }

    @Override
    public Issue editIssue(Issue prob) {
        return issueRepository.save(prob);
    }

    @Override
    public Optional<Issue> getIssuesByUser(Long userId) {
        return issueRepository.findIssuesByUser(userId);
    }

    @Override
    public Issue getIssueById(Long problemId) {
        return issueRepository.findByIssueId(problemId);
    }

    @Override
    public void deleteIssue(Issue prob) {
        issueRepository.delete(prob);
    }
}
