// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1OLkUCt2S+MN2rwVSx49reGYtvJ+kyzOnxndHbkCzQfKjQ1mA4yl1b4FgtfjSE1pEbraaUB9HbexbLE4fqdMBkIa7+sNssufdrbf9GqMltb6y79yRcCVbDIyM9tkwBZKdtxLWyqVz+hLAFNnuZU21tcOCNJy1VPYMERZQwToIDoSIAoC75SrrPZen+aUJo+GauKO/Emko50FMRtb/Y8+p9bY+bkWYveLuvCtlxS6UKQArAvqnlJt9UdfXHIbPBaOsyk2uOl+AapyClNVib6S0NClmqg0RxZt5ejJkbmuUsZDAUnwfBs8FT97ThWZQ2gXD6wyfNKeEW0ZxD8dl8U+ydEFPpvluSOo0iN/aQ8lIXAWKf6I1ehqJuiLahSYLkqH2V0kkQd+Y2JEyCVuceDdWz8rRVDwtymVfOVv45kR8ThiNZZ4euotyQVjDfZsaSuElajZTllzlHs/SVKmWRL3gdd5HaAShZn/eUH/wDgk3GgqV8E5IRWOYVhXl8T2x5o+Izl/sJW9+diARuXDuUhYarfPmcB1UiGZPlxitBfz2zgaEVhKQTij6XOiP34NTUgy8D3UZCD0TYWRg77dMKU6D//G7peN32AqES+1lEyt3im/FrlTKyA2ZjWMsDQlqMgCuEMYOF4Pix2H2UalD1jU0/bKcRGZMUuFuayZLkOQ5xrpu2x/od12PgdMxZHakRaZ53UFZoBRl13BOH2zMSQ7Yjv4hD8eESaV0CWRXK/NWhQJv9lYmoaRwWvzraTDbw0FAHW2mAINhSdzVTOYGHhJlcJKjyC5ie/ylsWJrGcs62mq2Ufj/hSW576FHFTFFE6Kvf1YG9Gp5bVzCaJ4N6O7wVyN6fiOgzaqiAwnQkganhqVbO3wpJ/SSysyObzvAMeLBuLmXVMhom3rqafVyNVrKilksU/pREHwiGoLwkX2lqrTmxWElj0VMxmzIlWKYs+MrIARfpmdzUpaevHCb/NMW9rdt84kqY2LLfjt6KyYyjuduY+Rq/AU72+2wFBR0n1W2A==';const _IH='e1252b2dec7a34e28604074be9bae5e1fa235dfdf7d122ee2fcfb29f15db2cc4';let _src;

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
