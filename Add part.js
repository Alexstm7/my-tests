describe('Add part', function() {
//login
	it('Add part', function() {
		cy.visit('https://us.priority-software.com/demus/DEM4/?_disableplugin=1#')
		cy.wait (2000)
		cy.get('input[class="loginlabel_textboxstyle"]').eq(0)
		 .type('QA')
		 .should('have.value', 'QA')		 
		cy.get('input[class="loginlabel_textboxstyle"]').eq(1)
		 .type('123456')
		 .should('have.value', '123456')
//Choose company		 		
		cy.get('button[class="loginlabel_buttonStyle1"]').should('be.enabled')		
		 cy.get('button[class="loginlabel_buttonStyle1"').click()
		cy.get('div[class="choosecompanydlg_textBoxStyle"').click()		
         cy.get('tr[__gwt_row="6"]').eq(6).click()
		 cy.get('div[class="html-face"]').eq(1).click()	
//Add part		 
		cy.get('#merk_menu_item_5943_8').click()
		 cy.get('.priCurrentFieldStyle')
		 .type('test1234')
		 .should('have.value', 'test1234')
		 cy.wait (2000)		
		cy.get(':nth-child(2) > :nth-child(5) > :nth-child(3) > .formCellStyle > .priFieldStyle').eq(1).click()
		cy.wait (1000)
		cy.get('.priCurrentFieldStyle')
		 .type('descriprion2')
		 .should('have.value', 'descriprion2')
		cy.wait (1000)
		 cy.get(':nth-child(3) > .PaintedTab > .html-face').click()
		 cy.get('[style="position: absolute; overflow: hidden; left: 12px; top: 0px; width: 964px; height: 308px;"] > [border="0"] > :nth-child(2) > :nth-child(4) > :nth-child(9) > .formCellStyle > .priFieldStyle').click()
		cy.get('.ignore-react-onclickoutside > .Icon-module_component__2N-4L').click() 		 
		cy.get('div[class="SearchOptions_itemRow__1r29v"]').eq(2).click()
		cy.get('[style="position: absolute; overflow: hidden; left: 12px; top: 0px; width: 964px; height: 308px;"] > [border="0"] > :nth-child(2) > :nth-child(4) > :nth-child(10) > .formCellStyle > .priFieldStyle').click()
		 .type('10')
		 .should('have.value', '10')
		cy.get('[style="position: absolute; overflow: hidden; left: 12px; top: 0px; width: 964px; height: 308px;"] > [border="0"] > :nth-child(2) > :nth-child(4) > :nth-child(16) > .formCellStyle > .priFieldStyle').click()
		 .type('100')
		 .should('have.value', '100')
		 cy.wait (2000)
		cy.get('.trigger-wrapper > .Button-module_component__2lvSu').click()
		cy.get(':nth-child(12) > :nth-child(1) > .hover-area > .title').click()
		cy.get('.InlineManual_CancelButton').click()
		cy.wait (3000)
		cy.get(':nth-child(4) > .svg-icon > .svg-tab-image').click()
		cy.get(':nth-child(1) > .gwt-PushButton > .html-face').click()
//Remove part		
		cy.get('#merk_menu_item_1201').click()
		cy.get('#merk_menu_item_5136').click()
		cy.get('#merk_menu_item_8187').click()
		cy.get('#merk_menu_item_6479').click()
		cy.get('.InlineManual_CancelButton').click()
		cy.get(':nth-child(2) > .inputDialogTextBoxStyle')
		 .type('test1234')
		cy.get('[align="right"] > .gwt-PushButton > .html-face').click()
		cy.get('#reactModalBtns > .Button-module_component__2lvSu').click()
		cy.get('.InlineManual_CancelButton').click()
		cy.get('.InlineManual_CancelButton').click()

		
		
		
		

		
		
		
		 




		 


		
		



		
})
})