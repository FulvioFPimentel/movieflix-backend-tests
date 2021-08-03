package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@NotBlank(message = "Campo Requerido")
	private String text;
	private Long movieId;
	private UserDTO user;
	
	public ReviewDTO() {
	}
	
	public ReviewDTO(Long id) {
		this.id = id;
	}
	
	public ReviewDTO(Review review) {
		id = review.getId();
		text = review.getText();
		movieId = review.movie.getId();
		user = new UserDTO(review.getUser().getId(), review.getUser().getName(),review.getUser().getEmail());
	}
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
		
}
