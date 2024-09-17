describe('Prueba de inicio de sesión', () => {
  it('Debe mostrar un error cuando el login falle', () => {
    // Visitar la página de login
    cy.visit('http://localhost:5173/login'); // Asegúrate de que la URL coincida con tu ruta

    // Escribir un usuario y una contraseña incorrectos
    cy.get('input[name="usuario"]').type('usuario_incorrecto');
    cy.get('input[name="password"]').type('password_incorrecta');

    // Hacer clic en el botón de ingresar
    cy.get('button[type="submit"]').click();

    // Verificar que aparezca el mensaje de error
    cy.get('.MuiAlert-message').should('contain', 'Error al iniciar sesión');
  });

  it('Debe redirigir a la página de pacientes con credenciales correctas', () => {
    // Recargar la página
    cy.visit('http://localhost:5173/login');

    // Ingresar credenciales correctas
    cy.get('input[name="usuario"]').type('admin');
    cy.get('input[name="password"]').type('admin');

    // Hacer clic en el botón de ingresar
    cy.get('button[type="submit"]').click();

    // Verificar la redirección a la página de pacientes
    cy.url().should('include', '/pacientes');
  });
});
