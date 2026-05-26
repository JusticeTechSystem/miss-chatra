// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3JfUlO86sDYCANXLjMthkejYYj6g1KbC2aKZ9qPS9O9lotCesnJRfKiLzExhuiBo7tnTiXlz1HZLkcVkilw6yMMq7BKW5XWSmrBtWizwt/0rBiqDzm468GnFxkHlkbwPk0TASVLIlo4Hh3XhBkRJ+zTiM2RV+xTmO7ZgkPpR/Fgjr9kBUrbHzKf72x3Eq3xFfb2AxhQKJY1gqIcaNN9ydkyntbN9so9NJopO5jGIw4cH3jhhUUKxy+GFcrnMjHkn/55oHMttjNyyAU178w9+ZHqX24arIeaa7GUxNaEc0SiHn7rlmsoN7m63SWukdoNe6KPV8boIwzk6j5FQcnm04QKIJSuzcRzj9+pkvsBossGTZGkUMXtNTlk3SNsbJtI3OudndOh9cvKft/5pZJylFyGQ7CCzSe/hL+kiFiOkHF/nLEGtHH2XRBSGY7bsTQ+KqVvjE3MAra5TPbPaoBv4QUhw1PcMZlNiOiF3D5Pat0TDe2xEHBGAdbraYNKOUCPt0odnYVUZZxfxzxII9JrHQzkQKwPvDvj1RIujgKWYj4GSF1Udak57VgOmPD4CGlF+QikQqxGOxmeiSioBSNF2KeKplkEOepuueCgzT6c10asEaXseGAkYLdwoqzkNY8zbjBDcgOAUy5CBnjX76SUZxZobCMpzcqsD6NvTrcTVFBOnasOQYWIGGwUn41PaRjQMVDBrVfFda9Oj2kKsjXYvZvM6rZ4Taj0MoL6HhcZtWTrFQL5hWoS5uTzZBmYXHsff56jvPNJvrIPvEeRHzjaKH0SFMMiSk69WV6/glFMYqlFgQwnIy7Z8zGI3EQgkEF5VFll3r9LhkOt7twfTqSiUu/RwvhKY6jb1WDzywlcO+AZ5wrSe4ji03eCIAERKTvJ0ZRwluyO0Ray72TpffdUBT52TQmG3eg88U9aBgXfIBDT/c3MqLPwxwAf8VysEn4J10ix6C3T6WoN+AaqfVZYikuDYI3sfsXZWj+tb+0WCBTohrUqRBwG4QmcZpa2mEnQhOSba+os2pKEZLI3Ofb/w3H+7Rh7kmh97Qr+uuLyKZ2tuUhVo0GmwIOM+Y70u/W1Kj/cDgNJsd/EpRUzejnl2+7Sda+8OGpIgWDvRAfAFvZWBnG1VNqfPx3ndp+cNvcQzoOY2o5dh/nZosIPO9ri6+KdZ05aYjDmo873H1t2qtdoCJvZKGaVlS6HEGVOx2k1/zJV5qidmRHrdsXqkM0yxEBbv565AYyeXbLBDQqwnfffeuaAm2hr8HW7B0oBGEszJ6I7F9OoRwyv6Xa5tojlqn7qLVnAIS2uprTdx4Zaj/gKhk+aY6ie+yem8brOLAtwzD7aVbiNqUasbhdTH5MfVPfqYfrdo94=';const _IH='dab097802b1ab7c350803c4fd2f4f8bc49abaa38a6ec75480b84ac94fefc8dc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
