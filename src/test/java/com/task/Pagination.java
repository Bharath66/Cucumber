package com.task;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Pagination {
	static WebDriver driver;
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bharath Koye\\eclipse-workspace\\Practice\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		WebElement ele=driver.switchTo().activeElement();
		System.out.println(ele.getAttribute("name"));
		driver.findElement(By.name("q")).sendKeys("selenium",Keys.ENTER);
		goTopage("6");
		System.out.println("first");
		System.out.println(driver.switchTo().activeElement().getAttribute("name"));
	}
	private static void goTopage(String pageNew) {
		System.out.println("gotoPage");
		List<WebElement> cols=driver.findElements(By.xpath("//table[@id='nav']//td"));
		for (int i = 0; i < cols.size(); i++) {
			if (cols.get(i).getText().equals(pageNew)) {
				cols.get(i).findElement(By.tagName("a")).click();
				break;
				
			}
			
		}
		
	}

}
