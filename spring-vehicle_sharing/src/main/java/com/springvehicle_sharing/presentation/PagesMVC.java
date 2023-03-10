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

    @GetMapping("/apidocumention")
    public String work() {
     
        return "api-documention"; 
    }

    @GetMapping("/aboutus")
    public String about() {
     
        return "about-us"; 
    }

    @GetMapping("/novita")
    public String novità() {
     
        return "novita"; 
    }
    
    @GetMapping("/Privacy")
    public String privacy() {
    	
    	return "privacy"; 
    }
    
    @GetMapping("/Cookie")
    public String cookie() {
    	
    	return "cookie"; 
    }

    @GetMapping("/feisbuk")
    public String feisbuk() {
     
        return "feisbuk"; 
    }
}
