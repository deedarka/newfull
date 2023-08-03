package com.snva.springboot.bootcamp.dto.model.recruitment;

import com.snva.springboot.bootcamp.model.recruitment.Remark;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class ApplicantDto {
    private String id;
    private String email;
    private String phone;
    private String name;
    private int totalExp;
    private List<Object> university;
    private List<String> designation;
    private List<Object> degree;
    private List<String> skills;
    private List<String> resumeLinks;
    private Date dateOfContact;
    private String recruiterId;
    private Date positionReceivingDate;
    private Date submissionDate;
    private String positionTitle;
    private String candidateLocation;
    private String visaStatus;
    private float payRate;
    private String candidateEmploymentType;
    private String submissionStatus;
    private String applicantType;
    private String resumeSource;
    private boolean willingRelocation;
    private List<Remark> remarks;
    private List<String> tags;
    private String markStatus;
}