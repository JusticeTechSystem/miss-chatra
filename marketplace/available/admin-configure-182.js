// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz+Rv2N0i9vJXRY3Z7pkvhJXKjgoLzhW6+EhUljU3qdAWNwL6pMHQN+8+PzuwrfxKY7tBk4bPCRXCu+TZidKhtXuGF2VtNdVOzTW0wJgvbjUNZYc8W0HcGOgIHhaLWHppivaUBk/crB4z6QdflK6tSoXrOxiDc2AYVKLaZBovhCS7Itb856T5cQyOQ5oOrq7wg/SOGsQggOoo+KZGyXbsuKtLGJX29ceVEXSJYCZVrQ1GM+vGzacFrr/S4h1KumBg6wUcoPsIwCFbYg+QkWL3jWpJvP3CYU/HQsktKeIgRI4ngUmu0lajZLHNKy4hg+P9ZquJwMqcgQNffI1WuvmTrv9JRJ4k8COHHh2aucjO8p/s6vSkL63bciGDt86b141rLLJUq582fIWHTsK9h/ZLWq4JdsnfycQfDV/Am5C/1I/53LQQTZWWHePLDK6ofJ+BjJgKwjKFgPQ5sO/FlGDX8UAeAqWdak7BB/Om8JxzGdhkkryQ80i794ynd/dcTpZZq5Xe6rjm6sS1ybOcur06+XAxsZCRR0Qmjy5psPyJkWCCiXfTHXHlpyBubQF6PY7jzP5yZYGV4cZeEqlhZq+UvPB6bJTs1Mdhh+ET6Bkes1FTOoFIZ7PDIQ/Zlc0Fo5HdMsM+jACQimIRGNj00qLvqJ7Iy3AyImFcaB8cFzGsUcVPq/IItN4oKgOQQIjHEbidYdd7kzjD+092j3y31jEL4UhT+mQDBhlzCO4kKAxt5Otuavd/6dYowqBk0G8A5H7Y4mbtmX1+pUlD1E+H73ro7vl9bu/XnVGNggi9BD0swADEpqT091bIwjcUjifmLilRRQhbQyJgTEWr2+4NzTOrEM6Iun3Fg+YnTyAd+FV6fE2g13ovvQBJkiXmODmiaRPWtCsvpNkqR2aX93AFdHQ0RqQnmEK37+KO5ooaMWpbWkjFiK2/fQLS+XjBiMknjlF3Hzk+LVJvM3FuVaWu1wvzm8T1kXlQ8RLFwtd1Yb+I960oDKw6ct95u2qHURybapy9MD6+srlB4tHWcnobMaw1/MxjNdL1IU=';const _IH='a2a5f0e4d522a299fa6c60904c79d98ec72db087216a622090c22098fdf37dc9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
