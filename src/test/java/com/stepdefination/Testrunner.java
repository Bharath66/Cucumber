package com.stepdefination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\features",glue="com.stepdefination",plugin= {"html:target","json:target/report.json","rerun:src\\test\\resources\\failed.txt"},dryRun=false,monochrome=true,strict=true)
public class Testrunner {

}
