package com.stepdefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	public static WebDriver driver;
	@Before
	public void method() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\cucumber\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		System.out.println("Before");

	}
	
	@After
	public void method1() {
		System.out.println("After");
		driver.close();
		driver.quit();

	}

}
