describe('Проверка сортировки вакансий', () => {

    it('Корректная сортировка ваканссий', () => {
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

            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click();

            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click();


        });
    });

});
