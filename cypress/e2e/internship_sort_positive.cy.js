describe('Проверка сортировки стажировок', () => {

    it('Корректная сортировка стажировок', () => {
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

            cy.log('Клик по кнопке Стажировки');
            cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click();

            cy.log('Ввод данных для сортировки');

            cy.get('.form-input--text').type('Тестер')

            cy.get('div.search-input__field > .button').click();

        });
    });

});
