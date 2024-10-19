describe('Login Page', () => {
  beforeEach(() => {
    // Відкриваємо сторінку входу перед кожним тестом
    cy.visit('http://localhost:3000/login');
  });

  it('displays the login form correctly', () => {
    cy.get('h2').should('contain', 'Вхід'); // Заголовок
    cy.get('input[name="email"]').should('exist'); // Поле для електронної пошти
    cy.get('input[name="password"]').should('exist'); // Поле для пароля
    cy.get('button').contains('Увійти').should('exist'); // Кнопка "Увійти"
  });

  it('allows the user to log in with valid credentials', () => {
    // Введіть дійсні дані
    cy.get('input[name="email"]').type('test@example.com'); // Введіть електронну пошту
    cy.get('input[name="password"]').type('correctpassword'); // Введіть пароль
    cy.get('button').contains('Увійти').click(); // Натисніть кнопку "Увійти"

    // Перевірка, що перенаправлення відбулося
    cy.url().should('include', '/home'); // Очікується перенаправлення на /home
  });

  it('shows an error message with invalid credentials', () => {
    // Введіть недійсні дані
    cy.get('input[name="email"]').type('test@example.com'); // Введіть електронну пошту
    cy.get('input[name="password"]').type('wrongpassword'); // Введіть неправильний пароль
    cy.get('button').contains('Увійти').click(); // Натисніть кнопку "Увійти"

    // Перевірка, що з'явилося повідомлення про помилку
    cy.contains('Invalid credentials').should('exist'); // Переконайтеся, що повідомлення відобразилося
  });

  it('requires both email and password', () => {
    // Спробуйте надіслати форму без введення даних
    cy.get('button').contains('Увійти').click(); // Натисніть кнопку "Увійти"

    // Перевірка, що з'явилися повідомлення про помилки
    cy.contains('Email is required').should('exist'); // Переконайтеся, що відобразилося повідомлення про електронну пошту
    cy.contains('Password is required').should('exist'); // Переконайтеся, що відобразилося повідомлення про пароль
  });
});
