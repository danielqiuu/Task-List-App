package com.todo.Todo.List.model;

import jakarta.persistence.*;

@Entity
public class Item {

    @Id
    @SequenceGenerator(
            name = "item_id_sequence",
            sequenceName = "item_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_id_sequence"
    )
    private Integer id;
    private String itemTitle;
    private String itemDesc;
    private boolean isCompleted;

    public Item(int id, String itemTitle, String itemDesc, boolean isCompleted) {
        this.id = id;
        this.itemTitle = itemTitle;
        this.itemDesc = itemDesc;
        this.isCompleted = isCompleted;
    }

    public Item(){}


    public int getId() {
        return id;
    }

    public String getItemTitle() {
        return itemTitle;
    }

    public String getItemDesc() {
        return itemDesc;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setItemTitle(String itemTitle) {
        this.itemTitle = itemTitle;
    }

    public void setItemDesc(String itemDesc) {
        this.itemDesc = itemDesc;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", itemTitle='" + itemTitle + '\'' +
                ", itemDesc='" + itemDesc + '\'' +
                ", isCompleted=" + isCompleted +
                '}';
    }
}
