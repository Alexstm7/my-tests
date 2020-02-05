describe('Add customer', function() {
//login
	it('Add customer', function() {
		cy.server()
        cy.route('/?_disableplugin=1/*').as('getlogin')
		cy.visit('https://us.priority-software.com/demus/DEM4/?_disableplugin=1#')
		cy.wait('@getlogin').then((xhr) => {})
		cy.get('input[class="loginlabel_textboxstyle"]').eq(0)
		 .type('QA')
		 .should('have.value', 'QA')		 
		cy.get('input[class="loginlabel_textboxstyle"]').eq(1)
		 .type('123456')
		 .should('have.value', '123456')
//choose company		 		
		cy.get('button[class="loginlabel_buttonStyle1"]').should('be.enabled')		
		 cy.get('button[class="loginlabel_buttonStyle1"').click()
		cy.get('div[class="choosecompanydlg_textBoxStyle"').click()		
         cy.get('tr[__gwt_row="6"]').eq(6).click()
		 cy.get('div[class="html-face"]').eq(1).click()	
//Add customer		 		
        cy.get('#merk_menu_item_13_0').click()
		cy.get('.priCurrentFieldStyle')
		.type('342323')
		 .should('have.value', '342323')
		 cy.wait (2000)
		cy.get('[style="position: absolute; overflow: hidden; left: 12px; top: 0px; width: 964px; height: 334px;"] > [border="0"] > :nth-child(2) > :nth-child(5) > [colspan="2"] > .formCellStyle > .priFieldStyle').click()
		cy.wait (2000)
		cy.get('.priCurrentFieldStyle')
		 .type('John Smith')
		 .should('have.value', 'John Smith')		 
		cy.get('[style="position: absolute; overflow: hidden; left: 12px; top: 0px; width: 964px; height: 348px;"] > [border="0"] > :nth-child(2) > :nth-child(6) > :nth-child(3) > .formCellStyle > .priFieldStyle').click()
		cy.wait (2000)
		cy.get('.InlineManual_CancelButton').click()
		cy.wait (2000)
		cy.get('.priCurrentFieldStyle')
		.type('John Smith1')
		.should('have.value', 'John Smith1')
        cy.wait (2000)		

		

//remove customer
        cy.get('.buttons-row > :nth-child(2) > .svg-icon > .svg-tab-image > g > path').click()
		cy.wait (2000)
        cy.get('.InlineManual_OKButton').click()
		cy.get(':nth-child(1) > .bread-crumb').click()
		cy.wait (1000)
		cy.get('.buttons-row > :nth-child(2) > .svg-icon > .svg-tab-image > g > path').click()		
		cy.get('.InlineManual_OKButton').click()
		cy.get('label > :nth-child(1) > a').click()
		cy.get('.InlineManual_CancelButton').click()
		cy.wait (2000)
		cy.get(':nth-child(2) > .inputDialogTextBoxStyle')
		 .type('342323')
		 .should('have.value', '342323')
		cy.wait (1000)
		cy.get('[style="width: 100%; height: 100%; padding: 0px; margin: 0px;"] > table > tbody > tr > [align="right"] > .gwt-PushButton').click()
		cy.get('.InlineManual_CancelButton').click()
		
		
		
		 
		 





})
})
