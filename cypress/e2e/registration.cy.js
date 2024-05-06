describe('Проверка регистрации', () => {

    it('Корректная регистрация', () => {
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

            cy.log('Ввод корректной фамилии');
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Венцов');

            cy.log('Ввод корректного имени');
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Иван');

            cy.log('Ввод корректного отчества');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Николаевич');

            cy.log('Выбор изображения');
            cy.get('.form-input--file').selectFile('cypress/fixtures/logo.png');

            cy.log('Клик по кнопке Создать аккаунт')
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log('Клик по кнопке Выйти')
            cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();

        });
    });

    it('Некорректная регистрация', () => {
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

            cy.log('Ввод корректной фамилии');
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Венцов');

            cy.log('Ввод корректного имени');
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Иван');

            cy.log('Ввод корректного отчества');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Николаевич');

            cy.log('Выбор изображения');
            cy.get('.form-input--file').selectFile('cypress/fixtures/logo.png');

            cy.log('Клик по кнопке Создать аккаунт')
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000);

            cy.log('Клик по кнопке Выйти')
            cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();

        });
    });

});
