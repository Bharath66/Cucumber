package com.task;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Bharath Koye\\eclipse-workspace\\cucumber\\src\\test\\resources\\features\\Onedlist.feature",glue="com.stepdefination",plugin= {"html:target","json:target/report.json"},dryRun=false,monochrome=true,strict=true)
public class Testrunner {

}
