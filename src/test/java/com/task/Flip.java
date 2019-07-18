package com.task;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Flip {
	public static void main(String[] args) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\New folder\\PracticeSelenium\\Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//button[@class='_2AkmmA _29YdH8']")).click();
		WebElement men = driver.findElement(By.xpath("(//span[@class='_1QZ6fC _3Lgyp8'])[3]"));
		Actions ac = new Actions(driver);
		ac.moveToElement(men).perform();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@title='Top wear']")).click();
		driver.quit();
	}

}
