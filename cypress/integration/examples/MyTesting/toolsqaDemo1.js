/// <reference types ='cypress'/>

describe('my first demo project',()=>{
it('toolsqa', ()=> {
cy.visit('https://www.bwin.com/en/mobileportal/register')
cy.window().then((win)=>{

        assert.isDefined(win.dataLayer, 
          'window.dataLayer is defined');
          assert.isDefined(
            win.dataLayer.find(x => x.event === "gtm.js"), 
            "GTM is loaded");

            assert.equal(win.dataLayer[32].page_type,'ad')


})
// cy.get('#app > div > div > div.home-body > div > div:nth-child(5)  svg')
//     .click()

// cy.get(':nth-child(5) > .element-list > .menu-list > li')
//     .should('have.length',5)

//     cy.log('using cypress')
//     console.log('Using console')

//     cy.window().then((win)=>{

//         win.dataLa
//     })
})
})