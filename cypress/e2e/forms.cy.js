describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").type("shahrukh@elred.com");
    cy.contains(/successfully subbed: shahrukh@elred.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/successfully subbed: shahrukh@elred.com!/i).should("exist");
  });
});
