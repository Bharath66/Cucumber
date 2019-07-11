package com.objecRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddTariff {
	
	@FindBy(xpath="//a[text()='Add Tariff Plan']")
	public WebElement addTariff;
	@FindBy(id="//input[@id='rental1']")
	public WebElement mRental;
	@FindBy(id="local_minutes")
	public WebElement locMint;
	@FindBy(id="inter_minutes")
	public WebElement interMint;
	@FindBy(id="sms_pack")
	public WebElement smsPack;
	@FindBy(id="minutes_charges")
	public WebElement locMintCharge;
	@FindBy(id="inter_charges")
	public WebElement interMintCharge;
	@FindBy(id="sms_charges")
	public WebElement smsCharges;
	
	
	
	public WebElement getAddTariff() {
		return addTariff;
	}
	public WebElement getmRental() {
		return mRental;
	}
	public WebElement getLocMint() {
		return locMint;
	}
	public WebElement getInterMint() {
		return interMint;
	}
	public WebElement getSmsPack() {
		return smsPack;
	}
	public WebElement getLocMintCharge() {
		return locMintCharge;
	}
	public WebElement getInterMintCharge() {
		return interMintCharge;
	}
	public WebElement getSmsCharges() {
		return smsCharges;
	}

}
