package com.snva.springboot.bootcamp.model.bootcamp.livecode;

import com.snva.springboot.bootcamp.model.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
public class Comment {
    @DBRef
    private User user;
    String comment;
}
