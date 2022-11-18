/**
 * Some static tests on base of front end app checklist from
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

    it('title has less than 55 chars', () => {
        cy.title().then(title => {
            expect(title.length).to.be.lessThan(55)
        })
    })

    it('has declared description properly', () => {
        cy.get('[name = "description"]', {timeout: 100})
            .should('exist')
    })

    it('has rel canonical set', () => {
        cy.get('[rel = "canonical"]').should('exist')
    })

    it('has declared lang attribute', () => {
        cy.get('html').should("have.attr", 'lang', 'en-US')
    })

    it('has 404 error page', () => {
        cy.visit('/sdfsreferferfer', {failOnStatusCode: false})

        cy.get('h1').contains('Oops! That page can’t be found.').should('be.visible')
    })

    it('has working all links on main page', () => {
        cy.get('a').each($a => {
            const message = $a.text()
            expect($a, message).to.have.attr('href').not.contain('undefined')
        })
    })
})