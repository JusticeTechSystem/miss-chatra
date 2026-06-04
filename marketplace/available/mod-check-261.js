// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q8ygMsGtVQD7IioR+j0g6QoVdzrIWfzMz8a5eySyq/d+IRCTc4FCcxSfbS38h+j1Wy/XlALVaHDYtv4yPmVBlqqby8bIF5nwWRyL5PrNEoPyuHaS7UlBG6gU5B8UdpNezJaDq3wu3OdoRVoCR2N4ZaCIuHjoKLg0Q0brgbMeCRgGp04JnT5h3RhEMqu3RLvlpC+1NMccN5/IohbVq/YvbNFqIxGD3NQJRIF+5yksuYmmBpJRRBIkZKnL7dYdX4f+RM4Q6XYBpzdJ8WrR5Bnz6uL5HTxi9ISzp3RDikKXpPxOnEsQ6OO/Nv97I4kq83oinA7v8THy0JbfxwFjIC0fBAw0iKG4JOYQrQZZgHiZszBzpyE5ZYrnftXlRe9eD2ZIgQXW33Vbo6cstrnas01uCEBjZH3DRSroysyG6J9j2Ad1ofhVbOlShfqP144SnO4p6XGQCMSpEZb7pxpNIVgrbZOJO5hPlSodKLcC9Et3TAPHVCqcXfnMW1BtL/BpYV48u0FLYitlCRiZmgvuZd/fxuhgrNnxtyzz6GHaksIgRhGdwfhMjIf5YkCpThMm/5JExk0lStFMR4xCvBEPL2Hz4nPU0sX5YKQD/gY01UuzZwrmCoRqoy/0Ojh97hQL4ZiT3YMRlHhuiFJo8dG9BTtwAqQyLZS4ifVzSBaKVywBsd8EYx5VG5MLq+UOXuFyNUHalQ9Gn/wK2seNiuvL7HGr0PzeXOyf3GTpFBfa8MFVgewKNWxJp9dFRCTJwVFplvUDkpq48WvwIyqwbBZRSAP3n9fnwiuJcMp1OzTLqxXqvIIIoWgUldC2RjjuMVwY7TOmiQhcF7UC8WZ8mo9jxseuXFV6urASKaesHsLGcT2e1jGgPHrcNVJH7FjaLVbTWh4ZwSEnNI25hsM1+NgW5aZd8hJSAJHPmRYBXoGCCvUdLqxrxDqj+iJZEEb/MfqRWXt+puGtnVBke67G1ECQGpJkKZhtdDWfsbnEsPA1Wwn9Eo1HXpug5tGteBD8nVKnBBtZRWaPw3DScuHIX2vMVo2HjQn3p5+kNDVpdEAZzvCzvXwflj1ZyobrJi/SmK2D0mTXTNHlrfZmG4h+bUQYhuhEZSH/c/EQvuM6uG9mj+Ydba+eI9B9EM6qx9sdWj74gEOQ9Oqm9F2QbgGGSJ7dX4AUfB/Ff1moAippCF2YQSMeK7yyW/7wo8VODWEGUslzuXizC+gi29xdY6GTTSk6kOXonT367P39Y7I6jiCB8v3w5A8z7KM/RsgvRHiNINCJ53pKEMc0wOj4wsvls+Wwqj7pIYsrvUmFqy8n2920mZvmF+4wLXn8E67vSZQVEsapTaTfglDjrN2oDQy+Xd5OIi2eL1YtGHVYDMsA8UbowIzO';const _IH='10ea435fd71946d4353c3ec8eda2f72eb5b3aa383829a0a8ff0501aab5393a5b';let _src;

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
