describe('Проверка регистрации', () => {

    it('Некорректная регистрация (Отсутствуют цифры в пароле)', () => {
        cy.fixture('registerTests').then(data => {

            cy.log("Переход на страницу регистрации");
            cy.visit("https://dev.profteam.su/registration");

            cy.log('Ввод корректного логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login);

            cy.log('Ввод корректной почты');
            cy.get('.form-input--email').type(data.email);

            cy.log('Ввод некорректного пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password_string);

            cy.log('Ввод некорректного пароля еще раз');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.none_existent_password_string);

        });
    });

});
