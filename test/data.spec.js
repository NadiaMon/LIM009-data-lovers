global.window = global;
require('../src/data.js');

const input = [{
  gid: '3316234163932872071',
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071',
  is_external_url: true,
  author: '',
  contents: '<a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\'> </a> <a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\' target=\'_blank\'>Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299\' target=\'_blank\'>Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  feedlabel: 'TF2 Blog',
  date: 1542738000,
  feedname: 'tf2_blog',
  feed_type: 0,
  appid: 440
}];

const output = [{
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071',
  contents: '<a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\'> </a> <a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\' target=\'_blank\'>Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href=\'https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299\' target=\'_blank\'>Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  date: 1542738000,
}];


describe('dataMuestra', () => {
  it('deberia ser una función', () => {
    expect(typeof steam.dataMuestra).toBe('function');
  });
  it('funcion datamuestra', () => {
    expect(typeof steam.dataMuestra(input)).toEqual(output);
  });
});

