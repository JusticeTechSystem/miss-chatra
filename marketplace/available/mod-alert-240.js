// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oSlsRyLcZddD/MjXBaz5c+rltRq8rIneV08AMS4CL8UJGtqGK+I6sFTqnNqm89TuksnffDx/YybbamBMJOORe6vMxAGG3fwo0qeNT4DZl3zmcvImBE1pdBOf1//xYehc7+wH+w3k2IgAltukoEV0l8f7LAy0SwJd2UMu5u70JT32lgdZBvV64FMZ5OcoA7TKqOLeFZRkQtLYR9Kpu9xHbLGprYdM7Epz6iJ5fXRdhBEOSmSLbUP5TFdcmoCB3DKaoFIjmlT3u6OTdHnFNMx4eolA3n2HGzOZE8SOWactFaG/Jr4G08SWD0p5lR2uwJY4lBG7fXx0r4irSKrlugUh//YxLu+1uybx4FxbsW1lkj/orkImat5vv++7DhXtmNGyGQn3tp5YE2rs2HYkeBo4Pu4sxsw4neiKll8MBgqCJzo8IJvsyl3Ga0rNng7wujw1iFFeCr1gwoIv9gzA2SvjuWuatXDIOn18gVK+v/Y6nVtZyp5r6E5Y79eSj3bNelmeKdODhUHgkoMYN+ySq7EvI/IFrpmAuplZwzyIEji1mLmh8cmxCVzGhJrovkqxc86iI/JZV0j0I6hmlxo7NggP/9bl48LPpv+QbqtOSjXH8Jvy3PkjOj/h5+J3i/1WUt+/30qurOLeGITkjTFJvZuZ8q6+UgVsskjn3gYY0EaI7j4Oh28a6mUkwNVt13vPtqnnG9dKi4ZYJk90STOAyGZz7V4ay7BB7ejWo4UlzMLONOrKaTUV432TlFrnbJJ7h28t5Stu1S4eBzVpVe5bFznj2hVr2p/2ccAaGgNOZbFedixwbmj0g7yKtM+v/U+96MJkmcc7G363Fl30PvoOf6ycx4E+Gi4gj9ChJ5prVYUgxyEEtXTnuglw0jxntDZenkEpHIsYIiZXnDDXlQc2Bh/hhQnb/Fxje+5byRYdRpNlRUGMw4t4qGJ7+B11D7K/R6jrt63ZIvwYgq7MJIacZISRAZ+ASv5hdMzFMNNejaS7Bjixa4i3cFE/8GqjwgDGuLd2OBQ3gpxbXpxnAbFXgnva1iB5zEDmAYyjJxZKBCpQIDe1PFEG/K4/uZn1QiDCKPlcZ7ondDspT4ovFgY1U9IEPLclYlUMprGo9gkFt20XPF1ydZMTcbIUmsUAmrKQi4I7PXLqDdvcOF0cnS07ts/VO8rSb50qllstG7Ydark7ufbsO/IFvmNfPjBmhJ69GyuDJ2xTrWPDvLhs0aUL3qjF53mfkSlz5q+0MgdSkfx/FlklZTBCZOW/aPRKuTUlMTatrghzdZmua6zX9VT7GsiS1GR6572VQ9D1rxL7WwqciFVOQyi5Ym+TSY9I0nX76I8EjHX9kIEii2EsTHdDQpMiTcBQ15SKfh2VufFg4aMT';const _IH='17604c5b51ffa0a513f2e76c538cf6178e42396d638ac9119aaafc5784c6cdca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
