package com.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Add {
	static WebDriver driver;
	@Given("The user should be telecom home page and click the add customer")
	public void the_user_should_be_telecom_home_page_and_click_the_add_customer() {
		System.out.println("Given-1");
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\cucumber\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}
	

}
