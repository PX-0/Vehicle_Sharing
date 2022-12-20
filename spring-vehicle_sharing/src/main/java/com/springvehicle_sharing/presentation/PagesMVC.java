package com.springvehicle_sharing.presentation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("other")
public class PagesMVC {
    
    @GetMapping("/help")
    public String help() {
     
        return "help"; 
    }

    @GetMapping("/workwithus")
    public String work() {
     
        return "work-with-us"; 
    }

    @GetMapping("/aboutus")
    public String about() {
     
        return "about-us"; 
    }

    @GetMapping("/novità")
    public String novità() {
     
        return "novità"; 
    }
}
