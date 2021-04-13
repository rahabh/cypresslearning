/// <reference types = "Cypress" />

describe('Amazon Testing starts with cypress', function()
{
    before('Upload fixtures', ()=>{
        // Read constants.json from fixtures
        cy.fixture('constants').then(function(constants){
            this.constants = constants;
    })
})

    beforeEach('navigates to the registration page',() =>{
        
        var url = "https://www.amazon.in/"
        cy.visit(url)
        let signIn = cy.get("#nav-link-accountList")
        signIn.click();
        let signInText = cy.get("h1.a-spacing-small")
    // signInText.should("have.text","Sign-In")
        signInText.should(($text)=>{
        const text = $text.text()

        expect(text).to.include("Sign-In")
        // expect($text.get(0).innerText).to.eq('Sign-In')

    })

    let createAccount = cy.get("#createAccountSubmit")
    createAccount.should(($createAccount)=>{
        expect($createAccount.get(0).innerText).to.eq("Create your Amazon account")
    })

    createAccount.click()

    let titleOfCreateAccount = cy.get('.a-spacing-small.moa_desktop_signup')
    titleOfCreateAccount.should(($title)=>{
        // const titleText = $title.text()
        // cy.log("titleText" , titleText)
        // expect(titleText).to.include('Create Account')
        expect($title.get(0).innerText).to.eq("Create Account")
    })
    })

it('Error on registration page', function()
{
    const errorOnNames1 = this.constants.errorOnNames;
    // const errorOnMobileNumbers = "Enter your mobile number"
    var continueButton = cy.get('#continue')
    continueButton .click()
    
    var errorOnName= cy.get('#auth-customerName-missing-alert > div > div')
    errorOnName.should(($errorOnName) =>{
        
        expect($errorOnName.get(0).innerText).to.eq(errorOnNames1)
    })

    var errorOnMobileNumber = cy.get('div.a-alert-content').eq(2)
    errorOnMobileNumber.should(($errorOnMobileNumber) =>{
        expect($errorOnMobileNumber.get(0).innerText).to.eq(this.constants.errorOnMobileNumbers)
    })
})

}
)