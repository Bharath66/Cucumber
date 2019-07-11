@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Title of your scenario
    Given The user should be telecom home page and click the add customer
    When The user provide valid details
      | Bharath | kumar     | bharat@gmail.com   | Chennai   | 7013635423 |
      | Suresh  | kdhumar   | bhasfrat@gmail.com | Hyderabad | 7013345423 |
      | Ramesh  | kuskmar   | bhdarat@gmail.com  | Banglore  | 7013689423 |
      | Ramu    | ufvfkumar | ffbharat@gmail.com | Vizag     | 7233635423 |
    Then The user validate customer id is generated
