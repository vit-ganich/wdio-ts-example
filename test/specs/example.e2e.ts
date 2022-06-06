import loginPage from '../pages/login.page';
import securePage from '../pages/secure.page';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await loginPage.open();

    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!',
    );
  });
});
