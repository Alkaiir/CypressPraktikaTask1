describe('Проверка авторизации', () => {

    it('Некорректная авторизация (Неправильный логин)', () => {
        cy.fixture('loginTests').then(data => {

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод некорректного логина");
            cy.get('.form-input--text').type(data.none_existent_loin);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();
        });
    });

});
