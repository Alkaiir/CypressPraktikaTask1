describe('Проверка сортировки потребностей', () => {

    it('Корректная сортировка потребностей', () => {
        cy.fixture('requirementsTests').then(data => {

            cy.viewport(1600, 900)

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.login);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log('Клик по кнопке Потребности');
            cy.get(':nth-child(1) > .header__nav > [href="/needs"]').click();

            cy.log('Ввод данных для сортировки');
            cy.get(':nth-child(1) > .radio-component__input').click();

            cy.wait(1000);

            cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type('1500');

            cy.wait(1000);

            cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type('2500');



        });
    });

});
