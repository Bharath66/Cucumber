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
  "location": "Onemap.the_user_should_be_telecom_home_page_and_click_the_add_customer()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "Onemap.the_user_provide_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user validate customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "Onemap.the_user_validate_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});