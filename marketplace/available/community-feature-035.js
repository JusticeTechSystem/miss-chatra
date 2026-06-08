// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+mOaTptlQKyWptO044WOHVVleNk5u92KFuVwq8DAMdmuqL7K9zwWepBc6HbmhW25rROSpTjZt7A0yv3jChc54V7lESemyLhh0mhOw+fmTQe/wn8m4AGNW5N4HNelZO90im0pY+ZBTXXv0Z3Jt9rg6O6og4BCbih+8hWS+kizwSzr89ccsWxT3Z0+OW78pc6O8h7zxXRO76fry2tVDhrxstJXkBdMS6+XCDNyRXvT18bLE0bUryvc3PzqKN13WRJY5VxzLrafzJhGKcKZvVsU/7fF8b47xboO1N7I1hDBzola72tGV4YIyaIVqxRU1dJ3CCkBG6xtqpWQ/ylaVBFdLr0kJ7tfQO8rzSjxUSq0XBse9klBaRVrEnGPoIK1R8yD8WAy62GsbMwR16MPP/IKiXI857xW/n47PhtvGOZGd0CX5iEX+uQSHyf8L4xG0MNc/yyRQzRQhPY6HRBpvGzXmgIUe9Kqe777iCCuR8Jyr/ciedwxoVLXPf+JqJu8ubMj5d7q66UIBSwAhDUxdaKC1km4017o0L+TpGiSv443QsxnYYsVAfCzRHxaR8Q5GmbzI1piqO6DwVOK/FQT7oLQNLQzfYuPFPZfCImBhcZQeuC12kz+yCAG59hA/RyjESNQ5REJsMG+0eep/UT/jtnZlLQKZLULQIRs+QAJtO4kYi0TFrCVx/51tcJAfQTKA/PByITO2zo328qbQ7+c5GHo8s8Ahnst1eenpvbHqrvjQ2dv0un4M2E=';const _IH='e148f13237b900101b9efa47b272dceca975d9181db0f97dcf8a5f69d7a33442';let _src;

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
