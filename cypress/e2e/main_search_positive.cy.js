describe('Проверка поиска на главной странице', () => {

    it('Проверка поиска на главной странице', () => {
        cy.fixture('accountTests').then(data => {

            cy.viewport(1600, 900)

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.employer_login);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.employer_password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log("Переход на главную страницу");
            cy.get('.page > :nth-child(1) > [href="/"]').click();

            cy.log('Ввод поисковых данных');

            cy.get('#input').type('Тестер');

            cy.get('.search-input__item').click();


        });
    });

});
