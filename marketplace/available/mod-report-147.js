// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqyd8KqKxxiOOgBx+tQrJYA6gaa4dezdsbuQNoo/lVv0r4i/WqrviIhyVykg6IoDW0pgpYSm3pwXqiRVIzqGYhgOKnVzHVyocqQNAELy4PCWxjpxqwRS5M+3SXIhO/pU4EYiE5XJFUsxHNB2P/tZi1WnOPxdOq5vL5WjXXcOUY5k4kzn3sWE8gvfj5VbDI1gBGvVJ/82BnqP0wOYNSQ3Rii3BSyJnLD/5odgwO+6UYEcI/j+WSqVRv9hEsEb7UYo5JBXg9p3Wg83NDDcO13B11LRfzkVghgYlbTwn/E5rvXAv1DL7c98LzLf2cJ88JVt75uKvMJy1Hj1dgwaOQ4d5n76rf0FxMKz2LwqNOe2qZObplyFziq7x6PYLZMsrr3KDPtyusoBb5I7+PjFOy9EftivQm/MNWUfIwIfVaDi8oASD7Juc944kDqILmp+840blT78HH2+kVj+HWzYoUqHr+05n1HymV6gStV+hdoVpRzoTvXptI+t+6wzs6Gu/M0Olr1Xm98Kec19tw4HzBx+MdzS4Dbl2g+vQYK97UoE94O7bynjwHXkIk0080YhL8TSq+9IdShsbjCDmoWN7O4kiDmTUxa0d0DR+S1Sp8XLEbDO2Tx45ZPFOCR6N+VxaPsTayiWEg2jpAOSqqFj2lQPam53ECw9ZTcHh6e9d9oiCZ8lpfIDmHPiXXwnixjBimRx1xuCBwzC9bl/93cxU/nHtFcGZwCB4lzQS7sPrize7vIYis0QqQhf3FgeZT5h7vAths5eN9jc/lzT6W9GorzCt96/qS8nZ9t6Xz0e/Ra5JZXH7KC24avLwivs6blcGJ0qyT+ldJkqK1eNlxtRKSITLd3CxE0iszB0CYB5T0WiQsjXDDIi3gC1PS2InhsK5/Alcu2RBiAQY+XgpCO+XbfH1Oy9U8LqRYxV+cLg8GTkW0fC0f2D2xVtiyZp9gAMWwl353aAGESDcyLNfzqWvokBxB/4sIQuI8mR/AsTewjNbPQnC1CSLxIlYLdT4cScvD7D0Wxdw800i7OjjqyTFLTZ/nJ/+A4Dl0P3CzxLiQRullxgiF06VT3adQnPDsdvlVrJfZdM2yJMR4b3xhnWXdK1RElj+QNbQNkZWfCDrnGHSnGSDFjJEAdpJnyvQQE8+AvaKcSu5SNeNavlWyTflG7uRgnYlskKKJp1barxDyBhtIZ4dHly0jhEV8ghm5Zdc6kTR+Xl8jr8tUcZA5cqXIF0KpEN9TVg5TwlxE5qQjnST2IdhnZROFoCYGnF0uOKdPrgc0SozA0/CxXLON6/gdPW3EJ+tr6Tx5zuOlQJwFXKSwci535oxDV7wjj3gb34LvJ7fOFGzU5GyVIq2Vx/QOekcJa6Dbrpc3OJy3fBrHtYPhLCZkmZ7KfnX8';const _IH='1dc2d056a7164fa9f08a84604226fa8d0d356de893b14a0cefd3600d54bf4edb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
