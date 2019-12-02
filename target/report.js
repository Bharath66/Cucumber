$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Bharath Koye/eclipse-workspace/cucumber/src/test/resources/features/Onedlist.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be telecom home page and click the add customer",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.the_user_should_be_telecom_home_page_and_click_the_add_customer()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KIBKHDA\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x01461B23+1448739]\n\tOrdinal0 [0x013E5A11+940561]\n\tOrdinal0 [0x01372293+467603]\n\tOrdinal0 [0x0130F27E+62078]\n\tOrdinal0 [0x0130BBBD+48061]\n\tOrdinal0 [0x01328D19+167193]\n\tOrdinal0 [0x013288ED+166125]\n\tOrdinal0 [0x01326FFB+159739]\n\tOrdinal0 [0x013109F6+68086]\n\tOrdinal0 [0x01311990+72080]\n\tOrdinal0 [0x01311929+71977]\n\tGetHandleVerifier [0x015A2E4C+1172140]\n\tGetHandleVerifier [0x014FFE35+504469]\n\tGetHandleVerifier [0x014FFBD0+503856]\n\tOrdinal0 [0x0146C9A8+1493416]\n\tGetHandleVerifier [0x0150060A+506474]\n\tOrdinal0 [0x013F7136+1012022]\n\tOrdinal0 [0x013F6FAF+1011631]\n\tOrdinal0 [0x0140133B+1053499]\n\tOrdinal0 [0x014014A3+1053859]\n\tOrdinal0 [0x014004D5+1049813]\n\tBaseThreadInitThunk [0x75750419+25]\n\tRtlGetAppContainerNamedObjectPath [0x77D2662D+237]\n\tRtlGetAppContainerNamedObjectPath [0x77D265FD+189]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.stepdefination.Add.the_user_should_be_telecom_home_page_and_click_the_add_customer(Add.java:18)\r\n\tat ✽.The user should be telecom home page and click the add customer(C:/Users/Bharath Koye/eclipse-workspace/cucumber/src/test/resources/features/Onedlist.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user provide valid details",
  "rows": [
    {
      "cells": [
        "Bharath",
        "kumar",
        "bharat@gmail.com",
        "Chennai",
        "7013635423"
      ]
    },
    {
      "cells": [
        "Suresh",
        "kdhumar",
        "bhasfrat@gmail.com",
        "Hyderabad",
        "7013345423"
      ]
    },
    {
      "cells": [
        "Ramesh",
        "kuskmar",
        "bhdarat@gmail.com",
        "Banglore",
        "7013689423"
      ]
    },
    {
      "cells": [
        "Ramu",
        "ufvfkumar",
        "ffbharat@gmail.com",
        "Vizag",
        "7233635423"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user validate customer id is generated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});