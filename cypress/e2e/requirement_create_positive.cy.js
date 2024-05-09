describe('Проверка создания потребностей', () => {

    it('Корректное создание потребности', () => {
        cy.fixture('requirementsTests').then(data => {

            cy.viewport(1200, 800)

            cy.log("Переход на страницу авторизации");
            cy.visit("https://dev.profteam.su/login");

            cy.log("Ввод корректного логина");
            cy.get('.form-input--text').type(data.login);

            cy.log("Ввод корректного пароля");
            cy.get('.form-input--password').type(data.password);

            cy.log("Клик по кнопке Войти");
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log("Клик по кнопке Потребности");
            cy.get(':nth-child(6) > .menu-item__item-name').click();

            cy.log("Клик по кнопке Создать потребность");
            cy.get('.needs-block__filters-wrapper > .button').click();

            cy.log("Ввод названия потребности");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text').type("Шишкосушильщик");

            cy.log("Ввод обязанностей");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area').type("Сушить шишки");

            cy.log("Ввод требований");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area').type("Умение работать с шишкосушильной машиной");

            cy.wait(1000);

            cy.log("Клик по кнопке Создать потребность");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click();
        });
    });

});
