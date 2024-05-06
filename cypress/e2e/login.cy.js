describe('Проверка авторизации', () => {

    it('Некорректная авторизация (Неправильный пароль)', () => {
        cy.fixture('cypressTests').then(data => {

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.login_student);

            cy.log("Ввод некорректного пароля");
            cy.get('.form-input--password').type(data.non_existent_password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();
        });
    });

    it('Некорректная авторизация (Неправильный логин)', () => {
        cy.fixture('cypressTests').then(data => {

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод некорректного логина");
            cy.get('.form-input--text').type(data.non_existent_loin);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();
        });
    });

    it('Корректная авторизация', () => {
        cy.fixture('cypressTests').then(data => {

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
