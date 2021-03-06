package com.tanzu.twopair.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "users")
@Getter @Setter
public class Users {

	private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "slack")
	private String slack;

	@OneToMany(mappedBy = "lead")
	private List<Products> product;
	
	@OneToMany(mappedBy = "userid")
	private List<PairWith> pairwith;
	
	@OneToMany(mappedBy = "userid")
	private List<LookForHelp> lookforhelp;
	
	Users() {}

	Users(String name, String email, String slack) {
		this.name = name;
		this.email = email;
		this.slack = slack;
	}
	
	
}
