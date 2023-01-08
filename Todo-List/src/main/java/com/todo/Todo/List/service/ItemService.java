package com.todo.Todo.List.service;

import com.todo.Todo.List.model.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    public Item saveItem(Item i);

    public List<Item> getAllItems();

    public void deleteItem(Integer id);

    public Optional<Item> getItemById(Integer id);

    public boolean toggleComplete(Integer id);

    public Item editItem(Integer id, Item i);

}
