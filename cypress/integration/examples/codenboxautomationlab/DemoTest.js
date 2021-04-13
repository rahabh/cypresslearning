/// <reference types ="cypress" />

describe("Demo test on http://codenboxautomationlab.com/", () =>{

it("Navigate to url" , () =>{
let title = "Learn, Earn & be an Expert in Automation"
let url = "http://codenboxautomationlab.com"
cy.visit(url)

cy.get(".site-title").as("titleOfCoden")
cy.get(".site-description").as("siteDescriptin")

cy.get("@titleOfCoden").should((ti )=>{
expect(ti.get(0).innerText).to.eq("CodenBox AutomationLab")
})

cy.get("@siteDescriptin").should((siteDescription)=>{
    expect(siteDescription.get(0).innerText).to.eq(title)
})
})



})