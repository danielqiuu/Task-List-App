package com.todo.Todo.List.controller;

import com.todo.Todo.List.model.Item;
import com.todo.Todo.List.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/add")
    public String add(@RequestBody Item i){
        itemService.saveItem(i);
        return "Item added!";
    }

    @GetMapping("/getAll")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @DeleteMapping("/delete/{itemId}")
    public String deleteItem(@PathVariable("itemId") Integer id){
        Item i = itemService.getItemById(id).orElse(null);
        if(i != null){
            itemService.deleteItem(id);

            return "Item " + i + " was deleted";
        }
        else{
            return "Item does not exist";
        }

    }

    @GetMapping("/getItem/{itemId}")
    public Optional<Item> getItemById(@PathVariable("itemId") Integer id){
        return itemService.getItemById(id);
    }


    @PutMapping("/complete/{itemId}")
    public String toggleCompleted(@PathVariable("itemId") Integer id){
        if(itemService.toggleComplete(id) == true){
            return "True";
        }
        else{
            return "False";
        }
    }

    @PutMapping("/edit/{itemId}")
    public String editItem(@PathVariable("itemId") Integer id, @RequestBody Item request){
        return itemService.editItem(id, request).toString();
    }

}
