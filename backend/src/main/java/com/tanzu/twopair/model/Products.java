package com.tanzu.twopair.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "products")
@Getter @Setter
public class Products {

	private @Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name = "id")Long id;
	
	@Column(name = "name")
	private String name;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(referencedColumnName = "id")
	private Users lead;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(referencedColumnName = "id")
	private Domains domain;
	
	@OneToMany(mappedBy = "productid")
	private List<Subcomponents> subcomponent;
	
	@OneToMany(mappedBy = "productid")
	private List<PairWith> pairwith;
	
	@OneToMany(mappedBy = "productid")
	private List<LookForHelp> lookforhelp;
	
	Products() {}

	Products(String name, Users lead, Domains domain) {
		this.name = name;
		this.domain = domain;
	}
}
