package com.tanzu.twopair.model;

import lombok.*;

import javax.persistence.*;


@Data
@Entity
@Table(name = "pairwith")
@Getter @Setter
public class PairWith {

	private @Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name = "id")Long id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "productid", referencedColumnName = "id")
	private Products productid;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "userid", referencedColumnName = "id")
	private Users userid;

	PairWith() {}

	PairWith(Products productid, Users userid) {
		this.productid = productid;
		this.userid = userid;
	}
}
