describe('Проверка авторизации', () => {

    it('Корректная авторизация', () => {
        cy.fixture('loginTests').then(data => {

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.login_student);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log("Клик по кнопке Выйти");
            cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();
        });
    });

});
