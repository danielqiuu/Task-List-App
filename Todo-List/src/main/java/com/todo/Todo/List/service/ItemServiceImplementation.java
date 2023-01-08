package com.todo.Todo.List.service;


import com.todo.Todo.List.model.Item;
import com.todo.Todo.List.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImplementation implements ItemService{

    @Autowired
    private ItemRepository itemRepo;

    @Override
    public Item saveItem(Item i){
        return itemRepo.save(i);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepo.findAll();
    }

    @Override
    public void deleteItem(Integer id) {
        itemRepo.deleteById(id);
    }

    @Override
    public Optional<Item> getItemById(Integer id) {
        return itemRepo.findById(id);
    }

    @Override
    public boolean toggleComplete(Integer id) {
        Item item = itemRepo.findById(id).orElse(null);
        item.setCompleted(!item.isCompleted());
        itemRepo.save(item);
        return item.isCompleted();
    }

    @Override
    public Item editItem(Integer id, Item newItem) {
        Item item = itemRepo.findById(id).orElse(null);
        item.setItemTitle(newItem.getItemTitle());
        item.setItemDesc(newItem.getItemDesc());
        itemRepo.save(item);
        return item;
    }


}
