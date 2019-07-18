package com.task;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LifeSite {
	public static void main(String[] args) throws Exception {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\New folder\\PracticeSelenium\\Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.lifetime.life/");
		driver.manage().window().maximize();
		WebElement ele = driver.findElement(By.xpath("(//a[@class=' nav-link    dropdown-toggle'])[3]"));
		ele.click();
		driver.findElement(By.xpath("(//a[@class='dropdown-item '])[15]")).click();
	    
		driver.quit();
	}

}
