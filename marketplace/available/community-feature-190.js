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
  const _b64='VcByVFXkE4NHP9J1d52AO/X75HEqtyFR6Wg8NyTqid5VbS2Nywy8XKttSiD9UMA6fkoLoWGHUE5VpMgdo7cTelSo/a6ZmEEpwUgY0FnMMVuKlVERwswjwwUJzCuk1mTNOlStwlx5Kk66WfhTSfI+B+zHhBRvtmoraxyFhxzHBnLMm9cjzXWixf/VqzVhOOUyUJolrPSggQOew45J/AwbA1IIl55TIO0nwhSQnulYyOBjMBn9+0tJhmylS65TvkYelqbwgPxukI/6823ItHOzhQxYUdMzt+AxdPFVDJR/OelPwSfR2SRxUFEZdf6E+QfnZB/FZjlRhHOiJ1BXO79gDq2uGq8nl0kfWczj71FKkEV8W+4x6tQhAckhq3BDUPjAdsrn05xpxvp0A321YYV6CPawz6aUpEgHendQfn9DF1rBePJaRNY8ulNhP5NiUsOzNa91SUFFniN0/Q+y5rXJcoGDvUnidpCCajW6X7fD5pUB6sX0kyZlykVS3WFJMB/9G9lNDEyZN1wLcb6TSMP92LVazuEd3dkxj06x+EakZAqRMgD8Wkx0UILZEIjEfOwpuKzFm27n3bW62VZm2sddmRKS0p9JbOd+JYVWw8g5MoMuuEumfENmuB3zvvK/mpDM5nwdSmRzq18Bqi5hjDM7qiA9WlQKa7c4iTj0gMpDn6hwAnGnw2FGh6+3qiKIqYDdDXGL0GObsTs0btL4DCxVZV9+igNq8YCbrzo+f1eO0QSToMp9pAzzLnbp';const _IH='466e8fcc3190dc0ed671314c4c57ab41842aa8545d7bb82cc0ec72aec244a38f';let _src;

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
