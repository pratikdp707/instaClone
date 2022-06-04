package com.insta.instagramclone.Repository;

import com.insta.instagramclone.Entity.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    Comment save(Comment comment);
    ArrayList<Comment> findAllByPostId(String postId);
}
