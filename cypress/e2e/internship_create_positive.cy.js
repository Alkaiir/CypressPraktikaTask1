describe('Проверка создания стажировок', () => {

    it('Корректное создание стажировки', () => {
        cy.fixture('internshipTests').then(data => {

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

            cy.log("Клик по кнопке Стажировки");
            cy.get(':nth-child(8) > .menu-item__item-name').click();

            cy.log("Клик по кнопке Создать стажировку");
            cy.get('[data-v-e4f6348f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

            cy.log("Ввод названия стажировки");
            cy.get('[data-v-e4f6348f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').type("Тестер");

            cy.log("Ввод даты начала стажировки");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date').type("25-05-2024");

            cy.log("Ввод даты конца стажировки");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date').type("25-06-2024");

            cy.log("Ввод требований стажировки");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type("Уметь тестить");

            cy.log("Ввод обязанностей стажировки");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area').type("Тестить");

            cy.log("Клик по кнопке Создать cтажировку");
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click();

        });
    });

});
