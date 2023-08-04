package com.snva.springboot.bootcamp.dto.model.recruitment;

import com.snva.springboot.bootcamp.model.recruitment.Remark;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.ArrayList;
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
    private int totalExp ;
    private List<Object> university= new ArrayList<>();
    private List<String> designation= new ArrayList<>();
    private List<Object> degree = new ArrayList<>();
    private List<String> skills= new ArrayList<>();
    private List<String> resumeLinks= new ArrayList<>();
    private Date dateOfContact = new Date();
    private String recruiterId;
    private Date positionReceivingDate= new Date();
    private Date submissionDate= new Date();
    private String positionTitle;
    private String candidateLocation;
    private String visaStatus;
    private float payRate;
    private String candidateEmploymentType;
    private String submissionStatus;
    private String applicantType;
    private String resumeSource;
    private boolean willingRelocation=false;
    private List<Remark> remarks = new ArrayList<>();
    private List<String> tags = new ArrayList<>();
    private String markStatus;
}