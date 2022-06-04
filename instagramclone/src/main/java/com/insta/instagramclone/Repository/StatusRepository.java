package com.insta.instagramclone.Repository;

import com.insta.instagramclone.Entity.Status;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface StatusRepository extends CrudRepository<Status, Integer> {

    Status save(Status status);

    ArrayList<Status> findAll();

}
