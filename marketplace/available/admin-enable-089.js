// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n8lFldkbx+nBqMqgt8ANwz/MO0vLkWYlI8jXy3tySqwOtDUndyD8MA2sisOt0/pcHTHyj+83TO13U0BzZcp68KSpHgEDzfJRMs2gTAIPQdS6jGddcLxw3wNdUTNZGUrvUTuGL/eYWEbv8qRwB+UkrPx6/C2WUC2u9bIXN/Rd9rkBQ4AP2q3sygdT5PrhjtGUDiuNOOt2MEPv+XAnkIKqknt3WMR+acNKhEccTWNYb4nfS1kDdLuYh+8g8cPFjIR5vkXk4/S/QPJ9r5kY+lANPopG7Uc8XPrptReYIF0mZauZtiDFC/EagpRioTC1yXVEs4sB/BOr9SiFKI6G1ND90GETPEPVk37gKNZMc6/AqMI2HAgSR0dmZF/czpUSXvZWxUL8Fhtsngrv2GZI6+BfCPhWwU8StyEVoDn6vdpa+qA4+asl6B3AozN2LfzyfWKaZqapHC9fLCY/v1Kc1wr9IhRjItvoKMWKG2WC7Gne+SxodYS1OyeREDO4AOoyUFwZVkyZzAKhqNDQfstbyhh3hiHdzUTk5/iGtbIzGp+PKBTSZFbNL/Xl8wPLoc1hTnT9rik7IHgGCdbsNftQchneaB8dUg2sHiW4m5YyzUlI2wzed1EcFiAbi1gtHBk9PDPDPmDBkAhxQtUYNp1ZnTfM9e9YnfPHeNc/ZCvQMyQCeSri4ZOWmzvVmDXMEuKIPTJg5T8cgKVeGIa5xyGLegoZYSmnhGcWoBM6GIS3cHdFDLT6wfpVymUIIqiXZPwe9RbFRmQl7p/BTixmhel3OwPibJIhJQnKf+SVHpnVQ6T2pf3v7KcCQWMe+/JGjWJ0it+DgQMGKbnJf8HPerTjvQeMOV688+4aLOecuUgOKWANjX0IepJ3Gaa49FIBugw7h4LA1K0NMayfGJsZ1g5HFZic6RvL0mmT5MgXRhNJW4d/QR2TMarlSSuC5gMKwfhYHY+WAwR9MU+rRmQqUzE/KmOCK/n90wPsTk00Xe7OvVdeKPAGDQ+8KN+fJmVUiCz8';const _IH='53a15462d240189b4ee6e5d9d7633c2d69ca672d3a9801089b27a520e6b2bcc1';let _src;

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
