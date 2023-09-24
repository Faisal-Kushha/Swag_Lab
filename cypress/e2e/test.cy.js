/// <reference types= "cypress" />
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("add_to_cart", (number_of_items) => {
  for (let i = 0; i < number_of_items; i++) {
    cy.get(".btn").eq(i).click();
  }
});
describe("Swag Lab", () => {
  it("log in and add items to cart", () => {
    cy.login("standard_user", "secret_sauce");
    // cy.login("locked_out_user", "secret_sauce");
    // cy.login("problem_user", "secret_sauce");
    // cy.login("performance_glitch_user", "secret_sauce");
    // let usernames = [
    //   "standard_user",
    //   "locked_out_user",
    //   "problem_user",
    //   "performance_glitch_user",
    // ];
    // for (let i = 0; i < usernames.length; i++) {
    //   cy.login(usernames[i], "secret_sauce");
    // }

    // cy.add_to_cart(Math.random(3));
    cy.wait(2000);
    cy.get(".btn").first().click();
    cy.get(".btn").eq(3).click();
    cy.get(".btn").last().click();
    cy.wait(1000);
    cy.get(".shopping_cart_badge").invoke("text").should("include", "3");
    cy.wait(1000);
    cy.get(".shopping_cart_link").click();

    // cy.get(".btn").click({ multiple: true });
    cy.get('[data-test="checkout"]').click();
    cy.wait(1000);

    cy.get('[data-test="firstName"]').type("Faisal");
    cy.get('[data-test="lastName"]').type("Emad");
    cy.get('[data-test="postalCode"]').type("123");
    cy.wait(1000);

    cy.get('[data-test="continue"]').click();
    cy.wait(1000);

    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").invoke("text").should("contain", "Thank you");
    // cy.get('[data-test="back-to-products"]').click();
    // cy.get("#react-burger-menu-btn").click();
    // cy.get("#logout_sidebar_link").click();
  });
});
