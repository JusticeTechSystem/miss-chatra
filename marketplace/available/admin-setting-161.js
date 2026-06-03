// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ySRteh4udVxLfK1PAcmqvTtdISczLQOds8PSLrffuWc9Dwt+FyG0oKCg0m04+w0Hlu5BMEA8q8yBfCFrG5EEw7Uz1L8rTsw+Vu9cV/bNbYvG6FOUO8qzywnjKsSzytb3nGt+m2urtEvv7TVHlEvI+nCExkrQAa3yPr+CLIrH1dQ0b6A4b2a/I1C3Ehesc/fhzASvAqbeW3WYKv38MtWpVEe/r4oqqdNr1AcuOsSCGxSR4abEp/g5CXyEKZc6pbfJFtpTUGG0fQT0zrx0dZKUdieXLGzCA/rCQqFlO4LfeUoljgxqa/MHJzuOkLn9eCkIWJtC+OaQoIYPaHCYdNm3O2NaYw11/4TmJF09qAn/Nwnc6NbWzduYX42ZS0bFd09MBOJedZXnpPj6o5MSgisivtEuuxx1yothflYrdysRtawJ/oIJEjDAy7wNrehoYgfbh+LyM6PwFpxIxAYh/f3bzAFz/9TWkTkCBdiN3Vo+viyRQ9463VilI/VUPJN/YWaVNz5WBYJDScV1LECLDBvq5x7QxCc/OpBONqyGp2amx1xYnuGh95FphGnrZQdBRLsM+qTdKzkaLUo/r1UVUnGhD5SHi1UOHHW/fjstJV+aXt1LffHV2NTNqT3I13uClgAA0pEG+lt6tNunBkd8kGaj0xlJFgLQiMAb9ORyKuilV88HGcB/563vSrYlKXXHnpiT9ujgj8Nly8U0Y5NGvkDB50KjFK2G99LE6B18QuEmu32uppgsMf/VCLa5gbdk5f4E4J9PIfUdTtZysjRbh2PJ3KITa7Zb0Iro7dWfFM3lGN9JAhLTJfMIOlvhdTkaAYsZwXREzY6GnSgcmll3pXEbusiFYUcwxwQb6rFnb8BKPF7NnUiXeVGyJbaMvVgtPNys0j+Fp+CR7oYZHjSOnEDL1z77eH6guHhLCkLXKBGXTZuhwWxkixqxpMwBrqWbdp+EEKBipwrIc+w07RkmWkgQNm9XwAdyJKAMMSCQq4iKvwkmBhi0S5UzJ25ZST3aCpiPWyMKojN1b18=';const _IH='e07ad8e06c48bb6ebdd23685b5fd833b73fb544821cc48a25cec36b36530136b';let _src;

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
