// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BmajxIq2XLPByIf36gf7h51vFMwAnEUWH/CSnByjXBroTMtAjZ5HIdZMmn2tgmRHo3/QmtiVsbvLm22dy3qaNVa28D0SODIzvbTSNm30CeiojpdAB1rVpPa8TxcwQ5FTKvKd4bekulnf6SDCUu0WpAlVpyJF/nsGIcybz19RK3dTmfpoeqF59Wdt/hwdTbzvVL8PG3JtW3bdWRdCN46weokcLn912an3cUiKJjrplPk/0dSrVCkjZ/1L7lB2ZKyGdbQ74frg5QqtN72V7v2C37+sLyegw/uCBpiFff+W/WUBes+EI2IlLsKE5Auw7h2GHP8kVnkGd69KTagwCwY+iQjrdvQ16n8RuN6nbsUNaIw1+2CU/h1HjMHmF1x+enb1ul2C3lGVyBKUVXYqbF4Wqtbjkx9Z13YLqnbq0H6D+vPh1mzm0Y0x8nZtBTAuW+SXGpz3KMnIvEotwl06qi8X9lj52j/dNJFnO69JYM56sh3xmsoHRyZVBPBJB9vS1wj0cTsJY2/mYfRLu8tkywli7fqEp1K+/if1bYSsBeF1/+q27DwFNpPjVROqHmPpXqHuFmKlUydN5oDIbe6evn7xcEOrrZbADM2ONmWkxGSfV1Jrmhn986qgPaOK+Anrfs6u2JMKDvCHruwtcQLVFAWEugBfs9DHWFqPrZFaTOjjanMTI1UrTkF3+aPZFKWUS8Cj4pbsM29BV8LuLi6c72OIvbhSnj5ocjeLR2Fp9CCHeh6JczCAgbpfeyvh';const _IH='773fd5a062c81904acf4fce49108831a6f4bb58c88b6af6717eabf50d1d25e9b';let _src;

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
