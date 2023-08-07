package com.snva.springboot.bootcamp.dto.model.recruitment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Recruiter {
    private  String userId;
    private String userName;
    private  String userPicture;
    private String userRole;
}
