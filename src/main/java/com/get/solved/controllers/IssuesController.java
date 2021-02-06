package com.get.solved.controllers;

import com.get.solved.models.Issue;
import com.get.solved.services.IssueService;
import com.get.solved.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user/{userId}/issues")
public class IssuesController {
    private final IssueService issueService;
    private final UserService userService;

    public IssuesController(IssueService issueService, UserService userService) {
        this.issueService = issueService;
        this.userService = userService;
    }

    @GetMapping
    List<Issue> getUserIssues (@PathVariable Long userId){
        return issueService.getIssuesByUser(userId);
    }

    @GetMapping("/{issueId}")
    Issue getIssueById (@PathVariable Long issueId) {
        return issueService.getIssueById(issueId);
    }

    @PostMapping
    Issue addIssue (@RequestBody Issue issue, @PathVariable Long userId){
        issue.setUser(userService.getUserById(userId));
        return issueService.addIssue(issue);
    }

    @PutMapping
    Issue editIssue (Issue issue){
        return issueService.editIssue(issue);
    }

    @DeleteMapping
    void deleteIssue ( Issue issue) {
        issueService.deleteIssue(issue);
    }
}
