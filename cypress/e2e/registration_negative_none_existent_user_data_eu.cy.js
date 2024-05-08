describe('Проверка регистрации', () => {

    it('Некорректная регистрация (ФИО пользователя на английском)', () => {
        cy.fixture('registerTests').then(data => {

            cy.log("Переход на страницу регистрации");
            cy.visit("https://dev.profteam.su/registration");

            cy.log('Ввод корректного логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login);

            cy.log('Ввод корректной почты');
            cy.get('.form-input--email').type(data.email);

            cy.log('Ввод корректного пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password);

            cy.log('Ввод корректного пароля еще раз');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password);

            cy.log('Клик по кнопке далее');
            cy.get(':nth-child(4) > .button').click();

            cy.wait(2000);

            cy.log('Ввод некорректной фамилии');
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_surname_eu);

            cy.log('Ввод некорректного имени');
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_name_eu);

            cy.log('Ввод некорректного отчества');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.none_existent_patronymic_eu);

        });
    });

});
