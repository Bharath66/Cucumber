$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/New.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "Add.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the details",
  "keyword": "When "
});
formatter.match({
  "location": "Add.the_user_is_filling_all_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submitt button",
  "keyword": "And "
});
formatter.match({
  "location": "Add.the_user_click_on_submitt_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed id",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.the_user_should_be_displayed_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Onedlist.feature");
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
  "error_message": "io.cucumber.datatable.CucumberDataTableException: Can\u0027t convert DataTable to Map\u003cjava.lang.String, java.lang.String\u003e. There is more then one value per key. Did you mean to transform to Map\u003cjava.lang.String, List\u003cjava.lang.String\u003e\u003e instead?\r\n\tat io.cucumber.datatable.CucumberDataTableException.cantConvertToMap(CucumberDataTableException.java:25)\r\n\tat io.cucumber.datatable.CucumberDataTableException.keyValueMismatchException(CucumberDataTableException.java:42)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.toMap(DataTableTypeRegistryTableConverter.java:212)\r\n\tat io.cucumber.datatable.DataTable.asMap(DataTable.java:232)\r\n\tat com.stepdefination.Onemap.the_user_provide_valid_details(Onemap.java:28)\r\n\tat ✽.The user provide valid details(src/test/resources/features/Onedlist.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user validate customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "Onemap.the_user_validate_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Twodmap.feature");
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
        "fname",
        "lname",
        "gmail",
        "Address",
        "phone"
      ]
    },
    {
      "cells": [
        "Bharath",
        "kumar",
        "bharat@gmail.com",
        "Chennai",
        "7013635423"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Onemap.the_user_provide_valid_details(DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.datatable.CucumberDataTableException: Can\u0027t convert DataTable to Map\u003cjava.lang.String, java.lang.String\u003e. There is more then one value per key. Did you mean to transform to Map\u003cjava.lang.String, List\u003cjava.lang.String\u003e\u003e instead?\r\n\tat io.cucumber.datatable.CucumberDataTableException.cantConvertToMap(CucumberDataTableException.java:25)\r\n\tat io.cucumber.datatable.CucumberDataTableException.keyValueMismatchException(CucumberDataTableException.java:42)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.toMap(DataTableTypeRegistryTableConverter.java:212)\r\n\tat io.cucumber.datatable.DataTable.asMap(DataTable.java:232)\r\n\tat com.stepdefination.Onemap.the_user_provide_valid_details(Onemap.java:28)\r\n\tat ✽.The user provide valid details(src/test/resources/features/Twodmap.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user validate customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "Onemap.the_user_validate_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});