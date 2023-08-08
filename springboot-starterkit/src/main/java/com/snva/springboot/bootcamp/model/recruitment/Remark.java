package com.snva.springboot.bootcamp.model.recruitment;

import com.snva.springboot.bootcamp.dto.model.recruitment.Recruiter;
import com.snva.springboot.bootcamp.model.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Embedded;
import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class Remark {
    private String remark;
    @Embedded
    private User user;
    private Date dateCreated;
    private Date dateModified;
}
