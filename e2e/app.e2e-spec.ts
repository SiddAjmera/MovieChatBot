import { MovieChatBotPage } from './app.po';

describe('movie-chat-bot App', () => {
  let page: MovieChatBotPage;

  beforeEach(() => {
    page = new MovieChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
