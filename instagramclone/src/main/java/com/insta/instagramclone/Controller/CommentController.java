package com.insta.instagramclone.Controller;

import com.insta.instagramclone.Entity.Comment;
import com.insta.instagramclone.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("")
    private Comment submitComment(@RequestBody Comment comment){
        return commentService.submitCommentToDataBase(comment);
    }

    @GetMapping("/{postId}")
    private ArrayList<Comment> getCommentForPost(@PathVariable("postId") String postId){
        return commentService.getAllCommentForPost(postId);
    }
}
