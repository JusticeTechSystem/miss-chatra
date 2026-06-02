// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jNCkxsdM46en4FJShFzpOI2wHQjGWeXGGr8q/Q/vpiTRoECFo3TpWyXYwwp6OtpRbo3g+wtndJBxxlszYjrybZGncoS5jxl78dNPS9Hfa3iMEHO9pWBZykGqDyj2YlaRC0Nag6zI0bsBJ11vqd7Gw4H0kv9mHOt6ZS83eJxGXr2Wu20hN9NAfBGnwLcR750c5qL5AQzDrD2+2rJrrvGC75anWHyGM7JFcFktNhXvJK3cNZA4w68EGjQJ9cgZ+ylWAQDcnZRXeAB7z1YZqqg00RHtsx3wXU1iXX2PLZyTa8NwDXG47T447tdTIyyoofl5yNiKch/J9BexbvAD7ajFEgPHoAZ9JJgqzOJa6DsSuniFlqruVp2j1RpXurHDNJoQ3rllE8DvWpq0Xv+vD92DiT3t/JZP7DQDCmTd+mAWgNPPhVh6PVVgBhRm7WjDyTUaAieeBLKGeOTs/o1LG310eirHWyQt5r3voS8HwtTWr3ODESO1HPXYaoyVocLro+fGRRDXxzuTqcmBjH5fS0xURZjecQZIKc48BqiHNba5hxFJe19bSJUZccZ5N0TXl12r01ifgmqgvZ2t9YrH6m6zBvtnqp0VT5ANLZxdjOen9pj/J8GewTrl9DRHUWoOrkcESQFgASLu4i5/2zmuK25jkPAq9gVzcnXUpjYEYr+1Q3GG3XjNv/qg2ArB2gMEITSB1AjGlBuH2hvt3MOVFBqHhrnkQ6CKH7fP3hsbCswXcN94wTw12jEQHHxtbf7U8cpCwE0iJCnPC1KVi8U9WhOoIZN7nOYK7RRD2hvh1onPhMqTzd8Wozi92ZXWQOG+oOHu+qnyk83FBcot2yXmoQqY8bkLXzTETTncYxe1JGPnyI0TdXAaEGPQ4tHY9CaEeXdjLWPvYJ1RiTKUeEE5CTDLC3YuZ3WtySwpouDfBtA+XHj7ZFwHRSm1LPVBsoPXPzSJa3bZae77yhix+mA6s9FNRRIqynvQ+ePxLkIScC3P3pNzOx2oTJ5DwL3s1rOeEyBtL9M360OzW8xeEVKVODpF3vwJt87bGAmurClo2NGWQ4NzsJLdMm05rwKR96AobpoN7mnw31P7WvbbNvZDHgOtH3AtkBJ5BrXKGGBYDymkrwmynuMBNV2B/EALDdYUxrcK8subUYE0I9d2i8AZhsu1YlMcgUaWYBdatHO+hKx1LaLONSQCY9twWv1ZDbW9MIjRg+ICsQgDrkxLitPTbj42/XIsO7ShwklAfVVL+z48jKVD1j1CemdW7+k3oO6zf89u6l+tKbuJTSIOCRAUwiTV51DxstS9yinit8sMm4f1WCC3CVrlw+jwTKELr4JE5dYe3qqkR7syJIC8qWYjxPXuKcVd1FgGr6WVkGzExJs6ej0Zp5+eWYa9TiCSEc/zcJU/Pa4+Uzc+neGAMgSJ1N+K91MP4tolkINX/R4aFRqdsXqQNFpvxxRWNqHTkarHFOi6MV0H9RKJ1ZeeO9j+EuA4Xv5DrfIpXZPiiRLDF8pT5xKtytKsTCyTeHaoUAmTiuIVn8Isf8ZP8SkOC40aV5zc+DlTBCBF8OAVnS53UapXk2SQFD5X4NVvwQ4PhDNrMKiapX8Z9ljb/PcyW/sqspNYaQfTvQkdk9DJOB7IRCF/HlIs6LLP6LBzXPK4EVYN7ys7HOJn3JWahozBFR6RmYheMX+fjmABLw8vOgIPrc+79mY=';const _IH='5ad82d27b811e708e5574ec26bce1387dabd37b0de80b335345b12a4576dd9a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
