global.window = global;
require('../src/data.js');

const input = [{
  appid: 440,
  author: '',
  contents: '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  date: 1542738000,
  feed_type: 0,
  feedlabel: 'TF2 Blog',
  feedname: 'tf2_blog',
  gid: '3316234163932872071',
  is_external_url: true,
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'
}]; 

const output = [{
  contents: '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  date: 1542738000,
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'
}];

describe('steam', () => {
  it('debería ser un object', () => {
    expect(typeof steam).toBe('object');
  }); 
});

describe('dataMuestra', () => { 
  it('debería retornar un array', () => {
    expect(Array.isArray(steam.dataMuestra(output))).toBe(true);
  });
  it('debería ser una función', () => {
    expect(typeof steam.dataMuestra).toBe('function');
  });
  it('debería retornar un array diferente al original', () => {
    expect(steam.dataMuestra(input)).not.toEqual(input);
  });
  it('debería retornar un nuevo array con menos propiedades al array original', () => {
    expect(steam.dataMuestra(input)).toEqual(output);
  });
});

const input1 = [{
  appid: 440,
  author: '',
  contents: '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  date: 1542738000,
  feed_type: 0,
  feedlabel: 'TF2 Blog',
  feedname: 'tf2_blog',
  gid: '3316234163932872071',
  is_external_url: true,
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'
}, {
  gid: '2403127338447896497',
  title: 'Team Fortress 2 Update Released',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/2403127338447896497',
  is_external_url: true,
  author: '',
  contents: 'An update to Team Fortress 2 has been released. The update will be applied automatically when you restart Team Fortress 2. The major changes include: * Fixed XP-earned text being truncated for some clients ;* Fixed some missing particles when running in DirectX8 ;* Fixed the Athenian Attire not bein...',
  feedlabel: 'TF2 Blog',
  date: 1540923360,
  feedname: 'tf2_blog',
  feed_type: 0,
  appid: 440
}, {
  gid: '2403126706534048982',
  title: 'All of Halloween is happening in TF2 s Scream Fortress X',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/rps/2403126706534048982',
  is_external_url: true,
  author: 'contact@rockpapershotgun.com (Matt Cox)',
  contents: 'The thing about special Halloween game modes is that they&#8217;re fun for a round or two, then the novelty wears off. The thing about <a href="https://www.rockpapershotgun.com/game/team-fortress-2/">Team Fortress 2</a>&#8216;s Halloween mode is that there are 18 of them. Ok, so only 5 of those are new &#8211; but you can also play the 13 previous Halloween events, w...',
  feedlabel: 'Rock, Paper, Shotgun',
  date: 1540295862,
  feedname: 'rps',
  feed_type: 0,
  appid: 440
}
];

const output1 = {
  producto: [], 
  gamer: [], 
  euro: [], 
  blog: [{'appid': 440, 'author': '', 'contents': '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...', 'date': 1542738000, 'feed_type': 0, 'feedlabel': 'TF2 Blog', 'feedname': 'tf2_blog', 'gid': '3316234163932872071', 'is_external_url': true, 'title': 'Operation Canteen Crasher!', 'url': 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'}, {'gid': '2403127338447896497', 'title': 'Team Fortress 2 Update Released', 'url': 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/2403127338447896497', 'is_external_url': true, 'author': '', 'contents': 'An update to Team Fortress 2 has been released. The update will be applied automatically when you restart Team Fortress 2. The major changes include: * Fixed XP-earned text being truncated for some clients ;* Fixed some missing particles when running in DirectX8 ;* Fixed the Athenian Attire not bein...', 'feedlabel': 'TF2 Blog', 'date': 1540923360, 'feedname': 'tf2_blog', 'feed_type': 0, 'appid': 440}], 
  rock: [{'gid': '2403126706534048982', 'title': 'All of Halloween is happening in TF2 s Scream Fortress X', 'url': 'https://steamstore-a.akamaihd.net/news/externalpost/rps/2403126706534048982', 'is_external_url': true, 'author': 'contact@rockpapershotgun.com (Matt Cox)', 'contents': 'The thing about special Halloween game modes is that they&#8217;re fun for a round or two, then the novelty wears off. The thing about <a href="https://www.rockpapershotgun.com/game/team-fortress-2/">Team Fortress 2</a>&#8216;s Halloween mode is that there are 18 of them. Ok, so only 5 of those are new &#8211; but you can also play the 13 previous Halloween events, w...', 'feedlabel': 'Rock, Paper, Shotgun', 'date': 1540295862, 'feedname': 'rps', 'feed_type': 0, 'appid': 440}]
};

describe('categorias', () => {
  it('debería ser una función', () => {
    expect(typeof steam.categorias).toBe('function');
  });
  it('debería retornar un array filtrado por la categoría Rock, Paper, Shotgun', () => {
    expect(steam.categorias(input1)).toEqual(output1);
  });
});

const sortOrderAsc = 'ASC';
const sortOrderDesc = 'DESC';

const output2 = [{
  gid: '2403126706534048982',
  title: 'All of Halloween is happening in TF2 s Scream Fortress X',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/rps/2403126706534048982',
  is_external_url: true,
  author: 'contact@rockpapershotgun.com (Matt Cox)',
  contents: 'The thing about special Halloween game modes is that they&#8217;re fun for a round or two, then the novelty wears off. The thing about <a href="https://www.rockpapershotgun.com/game/team-fortress-2/">Team Fortress 2</a>&#8216;s Halloween mode is that there are 18 of them. Ok, so only 5 of those are new &#8211; but you can also play the 13 previous Halloween events, w...',
  feedlabel: 'Rock, Paper, Shotgun',
  date: 1540295862,
  feedname: 'rps',
  feed_type: 0, 'appid': 440
}, {
  gid: '2403127338447896497',
  title: 'Team Fortress 2 Update Released',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/2403127338447896497', 
  is_external_url: true, 
  author: '', 
  contents: 'An update to Team Fortress 2 has been released. The update will be applied automatically when you restart Team Fortress 2. The major changes include: * Fixed XP-earned text being truncated for some clients ;* Fixed some missing particles when running in DirectX8 ;* Fixed the Athenian Attire not bein...', 
  feedlabel: 'TF2 Blog', 
  date: 1540923360, 
  feedname: 'tf2_blog', 
  feed_type: 0, 'appid': 440
}, {
  appid: 440, 
  author: '', 
  contents: '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...', 
  date: 1542738000, 
  feed_type: 0, 
  feedlabel: 'TF2 Blog', 
  feedname: 'tf2_blog', 
  gid: '3316234163932872071', 
  is_external_url: true, 
  title: 'Operation Canteen Crasher!', 
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'
}];

const output3 = [{
  appid: 440,
  author: '',
  contents: '<a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777"> </a> <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777" target="_blank">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href="https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299" target="_blank">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...',
  date: 1542738000,
  feed_type: 0,
  feedlabel: 'TF2 Blog',
  feedname: 'tf2_blog',
  gid: '3316234163932872071',
  is_external_url: true,
  title: 'Operation Canteen Crasher!',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071'
}, {
  gid: '2403127338447896497',
  title: 'Team Fortress 2 Update Released',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/2403127338447896497',
  is_external_url: true,
  author: '',
  contents: 'An update to Team Fortress 2 has been released. The update will be applied automatically when you restart Team Fortress 2. The major changes include: * Fixed XP-earned text being truncated for some clients ;* Fixed some missing particles when running in DirectX8 ;* Fixed the Athenian Attire not bein...',
  feedlabel: 'TF2 Blog',
  date: 1540923360,
  feedname: 'tf2_blog',
  feed_type: 0,
  appid: 440
}, {
  gid: '2403126706534048982',
  title: 'All of Halloween is happening in TF2 s Scream Fortress X',
  url: 'https://steamstore-a.akamaihd.net/news/externalpost/rps/2403126706534048982',
  is_external_url: true,
  author: 'contact@rockpapershotgun.com (Matt Cox)',
  contents: 'The thing about special Halloween game modes is that they&#8217;re fun for a round or two, then the novelty wears off. The thing about <a href="https://www.rockpapershotgun.com/game/team-fortress-2/">Team Fortress 2</a>&#8216;s Halloween mode is that there are 18 of them. Ok, so only 5 of those are new &#8211; but you can also play the 13 previous Halloween events, w...',
  feedlabel: 'Rock, Paper, Shotgun',
  date: 1540295862,
  feedname: 'rps',
  feed_type: 0,
  appid: 440
}];

describe('ordenandoFechas', () => {
  it('debería ser una función', () => {
    expect(typeof steam.ordenandoFechas).toBe('function');
  });
  it('debería retornar un array ordenando las noticias de forma ascendente ', () => {
    expect(steam.ordenandoFechas(input1, sortOrderAsc)).toEqual(output2);
  });
  it('debería retornar un array ordenando las noticias de forma descendente ', () => {
    expect(steam.ordenandoFechas(input1, sortOrderDesc)).toEqual(output3);
  });
});

const input4 = 25;
const input5 = 100;
const output4 = 25;

describe('computePercentage', () => {
  it('debería ser una función', () => {
    expect(typeof steam.computePercentage).toBe('function');
  });
  it('debería devolverme el porcentaje', () => {
    expect(steam.computePercentage(input4, input5)).toEqual(output4);
  });
});

describe('computeCategoryStats', () => {
  it('debería ser una función', () => {
    expect(typeof steam.categorias).toBe('function');
  });
});