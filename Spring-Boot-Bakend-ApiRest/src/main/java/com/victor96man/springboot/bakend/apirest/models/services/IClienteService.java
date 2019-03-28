package com.victor96man.springboot.bakend.apirest.models.services;

import java.util.List;

import com.victor96man.springboot.bakend.apirest.models.entity.Cliente;

public interface IClienteService {
	
	public List<Cliente> findAll();

}
