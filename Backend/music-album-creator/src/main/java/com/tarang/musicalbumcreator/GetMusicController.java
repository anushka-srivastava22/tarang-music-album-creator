package com.tarang.musicalbumcreator;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GetMusicController {

	@GetMapping("/getmusic")
    public ResponseEntity<Object> addMusic() {
		
		SongList songList = new SongList();
		Map<String, List<Map<Integer, Map<String, String>>>> response = new HashMap<>();
        response.put("music", songList.getSongs());

        return new ResponseEntity<>(response, HttpStatus.OK);
	}
}