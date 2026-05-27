// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kdmJfmKj7ZFQk+BLEVmrQvGC8zDWqP+mgSRMe77SWniZR4At8ouao5VrLYhcquuyAUeqgLNIqCbTppzmpAqwcIHPNjas9OL0pkcnZY62lkze5njBN36e7qymtZeL9CGJrrhlHx+VMUBEMdbipzWioi3L5gx0B0myk1mr3ATDInDndKoiUhY/LCIboplZxkbhkCzN30WZptshCZobvKVaUBpZE7sY/zo7+SuIXUWAAbpitRQfLhSYMSx5sKiLHb1pBTvsPxiyx6caONWHnCSPXNLQ5cIOeZYksAQq3VWE9XQZYLan3GfyHN2nOyI+KVjltc1PmJ9IYtGY8vBD5Zj2bgyHa55lv/Fuotmz0J2b6zv0JjdnmWzeeXP/jS0klfUoHxbwYagv5TtqeVJWFs6JDK/ar+2F2plERupGypJo1PH+SUwDj1H+jX4onAqT/1Ial5lf+J37Qfu7jRGpFAd0BXOoBVCBUJJGBrIHm5mZdQo0nDvqv0LEXS1+qktk+VDge6fg+cVSA+RkPI354gxyYvtssDTqfMBhtTx/i73C6o4Acwa387J3G1T8vbbg6cOck9O+eN4AgP8onvgMRnO/h4Yk8ro9Ctci4dozpIhKoTriZxelpypuEip/SABZlfJ08SncW8iYxNXK1z9SiMcZQFfHpzsRv218HTgCBHB1SPUdZs30e5Hp+TICP7ExQm4YRg9TBcruINDOMLfb9XEB3EKvyo/JqfiT2Kfjb5XQN9/a5FATFuzh6owNXNfnrfReKuLtIaSU2uwiN5TOmoldb2JQh3vKi+EkOZgg4547BvtrCyGH9sr+t345lXo28HLkXqQDz8fm0cPyh0arnZCYDolwPiWDwozQn6jv7HgsQWCBZbGHbCYyYvgPZcIoGJAt8c9Y4kSYPrM7Du8gZjDl25ZbZZbOTzG2bJ6xZOjpjgW0opPEb9+dWJytCfYS5B597ej3/esBkzH4SCq4ccCsEluhx6HCtSAoAbpBGFg+gMc4MrXloL91V3BHioFdPPggwTO2o/qGelpWF2JIoZY3W+L1qjaOt5pwEeyFI/20HTHZNTTkbf9j6dCxN4LYwybLypZcCOug91zmlwQGEQyPFaNpTP+f4b0zXMvgAFOrvAte6hAv3KlxD2w4IHjUA1A3Y34AMSv0cTqiM0sLEaUEGiQXbu+ZNU53OJ0PAWLI14icefh/2A==';const _IH='f4ddbe06d827d8f231096b0963a3d389c75105329e30490b80fec04735609866';let _src;

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
