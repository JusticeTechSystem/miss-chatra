// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QJ0BjVzHS7Ilp3gnvlZvEOk1xVcdg0p0UOsFOHA693/QjSxL3pg2yskIJH6evxkUSIwKu40iBlRdGsLq04+NBoUtZYlJXhxgTOkhWJwrqls+TlITAKA4hiwN/+UFza+RhzlIZ0hwKM1RAnT4NKn4Rfj3acOuXiWx77D0qnjfYy0vAObV+SRQcUNXRGBr74pKmjW/5Mnd4nQq8Qp9w/TPkT055w4veIdiNWXH+LzFNts8bYJTSmou01zW4nn95Q9IQrCCEx85kn3tWzGG7BbK3pS1lnqWuoUfE0seX4MQL/hgyySVfszBJmctbmbsBMVVjboKluMoL4iNiglmKjlmlcONCWlMNXqIhDZGR1oi+R6zPrDoZFWow9sXkMVo8jDJ0dcHshmemE4kzdlpbrxrU9sUetntw7WAJYa8aqaBNUodfiOLScYhZsb3EGCpoe/szlBvbqAJpYfrNcQYDx1TL31slKsgMX80F9Ie4ZW6EWJhpA66mND3Va49Ie3xxllNhnjOL1ZYQf4YO4vRe5/BjQcsKtEdmRdgHkm42QOy2M2M0ZEwJqm42z3HK+I8DcFm/dSzcxgmbTkvBGGYjtgJynVtRgjsn7Zx11rXEk2iXaW/z/D79U9LIHkOfbBU3CTFDq1ADUUDdx4uJrKOpRQqAD0ZNMIIzVQnHxL/E2jb1pV6gGUxQZiC1JQ5peNha9NwEeTxoj20C++qyXpKQ6epzNrtsasW12BcYIWKgoZBCpgUx1S7046pz7Kaf9kc5hvTT1aVCdLKIPN33Nm9Ldfb7dPd5RGoD/sw70SGE9K4ccyb9Ab9+wZKxVsi+qLNIbDahVsuflisCcB4qASxxFQ8xGExT5xKuUzSY8IPmAUVF7LQsAf0DBoMCOldsb+zdK2KCTSu6qeRtczOMVTt8oF7Lohm+CeBZjWwGodVPy0DFkTMxdg+Js+dkR3aeOp/h/lpLYBYVDj0q7fCywV+F39NrmUMZrXjKgB2NkeM95vRSRp1dROG2wH1NpnaLlWct595AOfNLpXbBmeFyn9k2/CV7M0XKkM745yX0/gc+FZ4/lV9g8WNYms1b46ZHzE+V1cXwDWDVkV1EhBEXW5KTgnjBlLo0a4W9BTDRB6K6vHqOc1dIFsqosAc0+FDrVTJzAOAkcxLE0sVOJ4XMKh0JQpEIO6mjhWeiQLrCdbULpoA7lnWZ8YCHz3llHa/tEj2enHLjIpoh+F4GpLVMiq/9hJ5ZPuV';const _IH='c6b0c29341b7f75eee962b2ed4c87deee938437179b2425181f6f6083c471ea5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
