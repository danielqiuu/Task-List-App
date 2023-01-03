package com.todo.Todo.List.repository;

import com.todo.Todo.List.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
