describe('Проверка авторизации', () => {

    it('Некорректная авторизация (Неправильный пароль)', () => {
        cy.fixture('loginTests').then(data => {

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.login_student);

            cy.log("Ввод некорректного пароля");
            cy.get('.form-input--password').type(data.none_existent_password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();
        });
    });

});
