package com.victor96man.springboot.bakend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.victor96man.springboot.bakend.apirest.models.entity.Cliente;

public interface IClienteDao  extends CrudRepository<Cliente, Long>{

}
