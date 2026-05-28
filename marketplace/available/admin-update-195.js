// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EzlZDlB91qy7pqlOiJyACWdP65hvXhkawc1M1FJokMfIu04vz+s9tcP/AmVeZeRMW6arcNanTD0no3uDp3KrHGsEYLRbaCzzdLecl1VOtkq7p1V2JF8K61waWXKs5RuwpDN5peuR6obX3jNlzPmPzIBiJrbb79/g8W9BlIrOdYMh9sYiOCjABSFFbPtByYYmTOw87Z34hfditH4ZWiUTT/vmJtZwSTwPdXtUTsuDCKnrwdWbcNSCGpjlDg2yzKJPkL0pxeu8E/0ZioyaVvDS7TEYSQI6jQm9nXDm6WTYAx5sS8npc2YWEIlmqtmbwN9pKa1NrqpJgnAo0b8Oop+vRyrSIV/I1hXCpIMBwq8+F2dBpM/8yAUCWr9CUOPBd4GjZxJMBNrLcK4b+cqhc6d4tcbsCjpIfS/dJ20fCl/WlTvBFcfl39VgjNKMVtWZJy0gbLwfET9jsMEs5MnexQmO7qDtnJJXnIOHsrpEA9lvp/9JWC7OwJ+AW8q90ofUOGN4FTmd8ylF/50xDOjjj4Ynx/M6XC5N2KTd3oOg9supIpCUf1/whE6EKX2p5ZZhuLPHNKid5gTZSXho2HdiBYxT5M306SDffu2vLcOeufIqWAm9KTex0eBAaD7i6Zsv7IlAAr/d1N518Y8HxciwV+L9fjCZE/H/U0xMvzKs6Csb1bhV9W/UwTQzLCV7oB2JOw5Vy2ygqfXXxqsiAOroQb2yGvMilPT8GaTsT8bmXTEYIRpSy9xiaZTTZw2D52IrD/g3NP/xLmFMCdM4Co9hPQ+FSPNgX+N8qE2Ol5n0Mi3LKo6nZAwkB0guwv6zZC+FAMvpSTMjQSz0QtFvbMpbMCbjB6Rmxlo334M1oq0veb3UhQ0lZssgvSwRqaQIFLARaOXrbhhWnKNNf68ehXxrXuBApBzraSQTMZdipcqA3gA6tpE1OziX1+ofIQ/7ajYYkj2y9bQVQy61LUJVBcquQd9kZfqj7PyDsbIySfopeXw27kmyTiDUmXlFjRe+vjz+rhBGyg==';const _IH='c709454f0635566c206a1d098be894e283e33e48881813c0b0d1cb623b279cf3';let _src;

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
