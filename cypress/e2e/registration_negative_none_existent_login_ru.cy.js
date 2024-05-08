describe('Проверка регистрации', () => {

    it('Некорректная регистрация (Логин на кириллице)', () => {
        cy.fixture('registerTests').then(data => {

            cy.log("Переход на страницу регистрации");
            cy.visit("https://dev.profteam.su/registration");

            cy.log('Ввод некорректного логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login_ru);

            cy.log('Ввод корректной почты');
            cy.get('.form-input--email').type(data.email);

            cy.log('Ввод корректного пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password);

            cy.log('Ввод корректного пароля еще раз');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password);

        });
    });

});
