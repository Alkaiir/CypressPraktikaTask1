describe('Проверка создания вакансий', () => {

    it('Корректное создание ваканссии', () => {
        cy.fixture('vacancyTests').then(data => {

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

            cy.log("Клик по кнопке Вакансии");
            cy.get(':nth-child(7) > .menu-item__item-name').click();

            cy.log("Клик по кнопке Создать вакансию");
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

            cy.log("Ввод названия вакансии");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type("Тестер");

            cy.log("Ввод обязанностей вакансии");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type("Тестить");

            cy.log("Ввод требований вакансии");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type("Уметь тестить");

            cy.log("Клик по кнопке Создать вакансию");
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click();

        });
    });

});
