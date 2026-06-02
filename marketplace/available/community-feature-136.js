// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7qra9S7GodS1rXL1lekLrYefX/KlBc+/tNzR6FGZzoOn9cZeUnz7bM0v/kwRJOWhnJH8fjlUbbLKC4pulOXhScy60aH1d6biLbOWsU79GEpQf2vw57DIAj+pFhcjlPsfCr3I0qXwWuvjLtaw+z0/dF8tMPb7VawxChEZdDmVXku+yTQDpIkzfcqPCsk7Q8sjqh6Zgv4gDf2t8kX3rjMGONK80+uQlSUjOcs8yWJJD5ljP8Eh930Wof381EWPNVXxbqw8qaJtKT+UwJSPdIR/f414BvyXCzPrs4+Z9c/VwkSfi0pqyi/Olg42etWyjPL4WVDGME4vNTEmXiiCE+WbKyzJ19g6nJpSOWjNtLrf0mQJ8NyH2TGzyFciBodmNXTwhN4fwYcZ+Y2PKpaPauRkHu2hSOe0Iv+jCf3MQEV78BlZXKN/m65nOMwc9wGe74Mm8VTNTD3u1Kb9hn2rktld3r29+aqWVFv4cA6Pa2Vje+2uvAsiO530qaGxHEdZEgUL3OcPis9pbi3zjT1NG18yZp1k89gQ/LcRgGiM52o0BXUDc4JAqU4cb3LEPWOIATUoS359BQSM/DmFjeN/28y8mAdxjCl6lyAqzehfX5KycTFgBof8nQmKgUA1EBuqW+4Xibf7+HmK+gAWrYMGpLZBlnG9ufJRqD24MPoImI6jK8UElWw0BWEpyr1wstpOw96ic0teACSsGO/DVU6Hfy1zpk1146ZWSDU';const _IH='79850c50c7fbfa51c0a843f44883220375ab17bafd329e342e906c5f0aedb379';let _src;

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
