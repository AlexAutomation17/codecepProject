Feature: Employee
  Add Employee
  Edit Employee
  Delete Employee

  Scenario: Add Employee
    Given an Employeer
    When I am on the Benefits Dashboard page
    When I select Add Employee
    Then I should be able to enter employee details
    Then I should see the employee in the table
    Then the benefit cost calculations are correct

 Scenario: Edit Employee
    Given an Employeer
    When I am on the Benefits Dashboard page
    When I select Add Employee
    Then I should be able to enter employee details
    Then I should see the employee in the table
    When I click on edit
    Then I should be able to update employee details
    Then I should see the employee in the table

Scenario: Delete Employee
    Given an Employeer
    When I am on the Benefits Dashboard page
    When I select Add Employee
    Then I should be able to enter employee details
    Then I should see the employee in the table
    When I click on delete

Scenario: Get employees service
  Given I get the list of employees    
  Then I can see the employee details are displayed
  Then I can see the response code is 200

Scenario: Add Employee through API
  Given I add a new employee through the post request
  Then I should be able to see employee details through the get employee request
  Then I can see the response code is 200

Scenario: Edit Employee through API
  Given I add a new employee through the post request
  Then I should be able to see employee details through the get employee request
  Then I should be able to edit employee details through the API
  Then I can see the response code is 200
  Then I should be able to see employee details through the get employee request
  Then I can see the response code is 200

Scenario: Delete Employee through API
  Given I add a new employee through the post request
  Then I should be able to see employee details through the get employee request
  Then I should be able to delete the employee
  Then I can see the response code is 200  