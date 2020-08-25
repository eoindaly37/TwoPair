package com.tanzu.twopair.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "domains")
@Getter @Setter
public class Domains {

	private @Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name = "id")Long id;
	
	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "domain")
	private List<Products> product;
	
	Domains() {}

	Domains(String name) {
		this.name = name;
	}
}
