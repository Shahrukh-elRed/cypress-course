describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("shahrukh@elred.com");
    cy.contains(/successfully subbed: shahrukh@elred.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/successfully subbed: shahrukh@elred.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/successfully subbed: shahrukh@elred.com!/i).should(
      "not.exist"
    );

    cy.get("@subscribe-input").type("shahrukh@elred.in");
    cy.contains(/invalid email: shahrukh@elred.in!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email: shahrukh@elred.in!/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email: shahrukh@elred.in!/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
