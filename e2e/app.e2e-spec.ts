import { ConfusionPage } from './app.po';

describe('confusion App', () => {
  let page: ConfusionPage;

  beforeEach(() => {
    page = new ConfusionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
