//package com.get.solved.models;
//
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Data @NoArgsConstructor
//@Entity
//public class Group {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long groupId;
//    private String groupName;
//    @ManyToOne
//    private User groupOwner;
//    @ManyToMany
//    private List<User> groupMembers;
//}
