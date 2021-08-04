class opportunitiesPage{
    
    elements = {
        titleOpportunities: () => cy.get('.sc-kBPbqO > .active')
    }
}

module.exports = new opportunitiesPage();