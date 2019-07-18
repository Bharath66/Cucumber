package com.task;

import java.sql.Driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.Base;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.cucumber.cucumberexpressions.GeneratedExpression;

public class Hooks {
public static WebDriver driver;
	@Before
	public void method() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\cucumber\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Before");

	}
	
	@After
	public void method1() {
		System.out.println("After");
		driver.quit();

	}

}
