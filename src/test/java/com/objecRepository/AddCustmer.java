package com.objecRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cucumber.Base;

public class AddCustmer extends Base{
	/*public AddCustmer() {
		PageFactory.initElements(driver, this);
	}*/
	
	@FindBy(xpath="(//a[text()='Add Customer'])[1]")
	public WebElement addCust;
	@FindBy(xpath="//label[@for='done']")
	public WebElement radioDone;
	@FindBy(id="fname")
	public WebElement firstName;
	@FindBy(id="lname")
	public WebElement lastNmae;
	@FindBy(id="email")
	public WebElement email;
	@FindBy(name="addr")
	public WebElement address;
	@FindBy(name="telephoneno")
	public WebElement phNumber;
	@FindBy(xpath="//input[@type='submit']")
	public WebElement btn;
	public WebElement getAddCust() {
		return addCust;
	}
	public WebElement getRadioDone() {
		return radioDone;
	}
	public WebElement getFirstName() {
		return firstName;
	}
	public WebElement getLastNmae() {
		return lastNmae;
	}
	public WebElement getEmail() {
		return email;
	}
	public WebElement getAddress() {
		return address;
	}
	public WebElement getPhNumber() {
		return phNumber;
	}
	public WebElement getBtn() {
		return btn;
	}

}
