package com.snva.springboot.bootcamp.model.recruitment;

import com.snva.springboot.bootcamp.dto.model.recruitment.Recruiter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class Remark {
    private String userId;
    private String remark;
    private Recruiter recruiter;
    private Date dateCreated;
    private Date dateModified;
}
