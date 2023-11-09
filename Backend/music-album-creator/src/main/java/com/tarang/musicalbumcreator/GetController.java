package com.tarang.musicalbumcreator;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GetController {

  @GetMapping("/get")
  ResponseEntity<PostEntity> getMsg() {
	  PostEntity postEntity = new PostEntity();
	  postEntity.setName("Sarthak");
	  postEntity.setMsg("Hi");
	  return new ResponseEntity<>(postEntity, HttpStatus.OK);
  }
}