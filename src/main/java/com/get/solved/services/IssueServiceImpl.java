package com.get.solved.services;

import com.get.solved.models.Issue;
import com.get.solved.repositories.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<Issue> getIssuesByUser(Long userId) {
        return issueRepository.findIssuesByUserUserId(userId);
    }

    @Override
    public Issue getIssueById(Long issueId) {
        return issueRepository.findIssueByIssueId(issueId);
    }

    @Override
    public void deleteIssue(Issue prob) {
        issueRepository.delete(prob);
    }
}
