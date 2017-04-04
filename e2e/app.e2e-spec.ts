import { AngularSkatePage } from './app.po';

describe('angular-skate App', () => {
  let page: AngularSkatePage;

  beforeEach(() => {
    page = new AngularSkatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
