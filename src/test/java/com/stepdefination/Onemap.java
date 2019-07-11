package com.stepdefination;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Onemap {
	
	@Given("The user should be telecom home page and click the add customer")
	public void the_user_should_be_telecom_home_page_and_click_the_add_customer() {
		System.out.println("Given-1");
		
		Hooks.driver.get("http://demo.guru99.com/telecom/");
		Hooks.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}
	
	
	@When("The user provide valid details")
	public void the_user_provide_valid_details(io.cucumber.datatable.DataTable cust) {
		Map<String,String> onedmap=cust.asMap(String.class, String.class);
		   System.out.println(onedmap);
		   System.out.println("When-1");
		   Hooks.driver.findElement(By.xpath("//label[@for='done']")).click();
		   Hooks.driver.findElement(By.id("fname")).sendKeys(onedmap.get("fname"));
		   Hooks.driver.findElement(By.id("lname")).sendKeys(onedmap.get("fname"));
		   Hooks.driver.findElement(By.id("email")).sendKeys(onedmap.get("fname"));
		   Hooks.driver.findElement(By.name("addr")).sendKeys(onedmap.get("fname"));
		   Hooks.driver.findElement(By.name("telephoneno")).sendKeys(onedmap.get("fname"));
		   Hooks.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	

/*
    ////////////onedmap
	@When("The user provide valid details")
	public void the_user_provide_valid_details(io.cucumber.datatable.DataTable cust) {
	   Map<String,String> onedmap=cust.asMap(String.class, String.class);
	   System.out.println(onedmap);
	   System.out.println("When-1");
	    driver.findElement(By.xpath("//label[@for='done']")).click();
	    driver.findElement(By.id("fname")).sendKeys(onedmap.get("fname"));
	    driver.findElement(By.id("lname")).sendKeys(onedmap.get("fname"));
	    driver.findElement(By.id("email")).sendKeys(onedmap.get("fname"));
	    driver.findElement(By.name("addr")).sendKeys(onedmap.get("fname"));
	    driver.findElement(By.name("telephoneno")).sendKeys(onedmap.get("fname"));
        driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

*/	
/*	
	////////////Twodementional list
	@When("The user provide valid details")
	public void the_user_provide_valid_details(io.cucumber.datatable.DataTable cust) {
		List<List<String>> Twodlist=cust.asLists(String.class);
		   System.out.println(Twodlist);
		   System.out.println("When-1");
		    driver.findElement(By.xpath("//label[@for='done']")).click();
		    driver.findElement(By.id("fname")).sendKeys(Twodlist.get(0).get(0));
		    driver.findElement(By.id("lname")).sendKeys(Twodlist.get(0).get(1));
		    driver.findElement(By.id("email")).sendKeys(Twodlist.get(0).get(2));
		    driver.findElement(By.name("addr")).sendKeys(Twodlist.get(0).get(3));
		    driver.findElement(By.name("telephoneno")).sendKeys(Twodlist.get(2).get(4));
	        driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	*/
	
/*	
	/////Twodmap
	@When("The user provide valid details")
	public void the_user_provide_valid_details(io.cucumber.datatable.DataTable cust) {
		List<Map<String, String>> Twodmap=cust.asMaps(String.class,String.class);
		   System.out.println(Twodmap);
		   System.out.println("When-1");
		   Hooks.driver.findElement(By.xpath("//label[@for='done']")).click();
		   Hooks.driver.findElement(By.id("fname")).sendKeys(Twodmap.get(0).get("fname"));
		   Hooks.driver.findElement(By.id("lname")).sendKeys(Twodmap.get(0).get("lname"));
		   Hooks.driver.findElement(By.id("email")).sendKeys(Twodmap.get(0).get("gmail"));
		   Hooks.driver.findElement(By.name("addr")).sendKeys(Twodmap.get(0).get("Address"));
		   Hooks.driver.findElement(By.name("telephoneno")).sendKeys(Twodmap.get(0).get("phone"));
		   Hooks.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	*/
	
	@Then("The user validate customer id is generated")
	public void the_user_validate_customer_id_is_generated() {
	    System.out.println("Then-1");
	    Assert.assertTrue(Hooks.driver.findElement(By.xpath("//h1[text()='Access Details to Guru99 Telecom']")).isDisplayed());
	}

}
