/**
 * Tests on base of front end app checklist from
 * https://github.com/thedaviddias/Front-End-Checklist/
 */

describe('front end checklist', () => {

    before(() => {
        cy.visit('/')
    })

    it('has proper doctype', () => {
        cy.document().then(document => {
            expect(document.doctype !== undefined).to.equal(true)
            expect(document.doctype.name).to.equal('html')
        })
    })

    it('has correct first two meta tags ', () => {
        cy.get('head meta').first()
            .should('have.attr', 'charset')
        cy.get('head meta').eq(1)
            .should('have.attr', 'name', 'viewport')
    })

    it('has declared correct charset', () => {
        cy.get('head meta').first()
            .should('have.attr', 'charset', 'UTF-8')
    })

    it('has declared correct viewport', () => {
        cy.get('head meta[name=viewport]')
            .should('have.attr', 'content', 'width=device-width, initial-scale=1'
        )
    })
})