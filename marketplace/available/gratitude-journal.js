// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3V8JUEigzFpR4QdhoRibfrKf3KXTWHtgE38ZtylWS3EBu2auX4arnZRpHiKRbEmBJ0I0k02yLK5Cy4hfIyMOHHpxaBpNCi3VO7r7QJ7aGFnrGNgJ07tPZ/Xs6jRGW0v1743iu2woZnvs9xsmxtgkJqEyTpLq6ZBmVDogNjyiQ8aJdLzEo++3K+m5fowRkGyt5DGzLbUA02BPJc2Xm3iq2gkSe/iFSeS+X4rDBKNWodXvqCCmJeYV4jsyXwUSrXBjf8q8gRDyxZXz72TseTt3Y007K2QjQ6wlIRRz0CAgVRwimRH40OJawy4hfXKvQluidNqq+D2rrTNk3V+L2hRkg7UXlqZMDa4xvTR2U7d4dahLIYZKdruaRw7jAgHsjqeQwn2iNergXDi529oUtZLQhUHkWYKXOckDpTLOxFU4lGzSjNoyeQNB0xbfrIS9tLFHgRGeoONLMzFYxGUK3PUWeZXabavsFq6mHHSDM9Zjaeva+Zlmgfe1MS0BU9kWRUCrLQdXWvD+d4sTHb3MTbbsMy2/02Zj5I/JYDMK4+uChZCoXG5txk0vYehl5gDvcjO19oo8boHdVxmFC36iaPPHT5AEX18zQe9CCmB9ybjgMavC7qh1Xl8REhf9c7PelTlUJIwDhDTYRyRfrOvci/OMtjExg+t7hFCivwkTu3v+O6zEu2s5TPCMybE5SEY+GCImAVC+LXaeKkw9eJBTmOYCxQYP/oKXzejTI9DBU+HY3W+wij/B9HFXm0FKX12jY5UstnsoL98VZsAMS1q+/v3i9KFde/zF6n3uMDGLEA4SfZJ8EwDO6tz7a1140j/xruVl7n0SzHxY2gcZ6HTExCNVyRqgFA6+9f93SlpkdCi+DVkiAS/VC/a4Ulu2qeEU9bLHYAb4EVxO85vs1pwvP1oAsx12yj30Z8eFwwCCfHuGY3U3NJ2Bh/VOTlt6Y6dXEFGu/l/pmhAoeFji5GmFGKNKjeiaphN93gK9vF+VIP6hm8LD3Nwl62ioNl99DPUDz49u9H2UC3BKBIM7MxWkVQNi6iAoyQi+oxGikVQvpz3Gu1hhc9S9/11hQEqUyfha4u5mB2CdMdIUhDaMxO74t4t58yZ0zu3xSb7Bv1sTDu1ytI48xn0S7l/uJLX2KOb0kBrm3QZP82MZA1uVs5CFN7Cktng+Pv2/g8/iLPr5BsSLd3T7ANsoRm6OTSXMcW/Vttyr/mC0Z8pFJlKKG6bYyGZbBru9TyuqEgDKwnVNc2wdMvP8i8fXdgzDgOMW3IgQGvb+7qnW01rnUZV2zFf2s5jH/WmUcaNeyvCFvI8BmeluG2wrNKIU4jr3EWSk2JZTVIdexh1KSM7Rk1VaEVv3tN6QTHclkV5HTBIkASqK30Wi5J9R5lkOzL0LGkei5xMG1y3vSFn/UN6623kCFwMhuG3XckUrdIo7ZzCbidJOtZHRhQXH0OCp5crqoFNmxl5E4A5yYsEqysqZHZ16tO80On9myDuyfkigEQvtCelYzqfO1HJFWJwotoHmZIBp23UjgjE1MFWUD3oHYdKm+IBigteLyy9pckBTCqtqqGxvmE0r4989dyIqb4CMmLDI/dLHOdhEYI6yCMDfFzwAkH/AzcVuX+7SojAZbqPi7OuZSBH3HbI1LwQYyQyS4fC9ADuC6KVI5VtAjnHyDfsI4eB0LYva4SciEWWslxKfw1FTYQqJb2bnDBmxkWgo80JL3lVKlkG73+KkbZk1H4xyK21gmQOAqr++uZQT5Dzpj2W/cFo2VOPwsJbQSSuwfQJ7nCspM7OiY8vhqFi92MAymDfL+3CpPL8VAQ==';const _IH='7cf66e77ba905efddf2cda8cfd3d04b99fa3abed477969f5cff971663801bb46';let _src;

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
