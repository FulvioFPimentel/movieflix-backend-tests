package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private String user;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text) {
		this.id = id;
		this.text = text;
	}

	public ReviewDTO(Review entity, UserDTO user) {
		id = entity.getId();
		text = entity.getText();
		this.user = user.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

}
