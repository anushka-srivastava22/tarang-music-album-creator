package com.tarang.musicalbumcreator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MusicAlbumCreatorApplication {

	public static void main(String[] args) {
		SongList songList = new SongList();
		songList.initialAddSong();
		SpringApplication.run(MusicAlbumCreatorApplication.class, args);
	}

}
