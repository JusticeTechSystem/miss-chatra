// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM1gLaJiODNBVClYedngJPvw5L0sitHIwDAWip5ThAFviyV9tWQrffGmP6vOxGclEfYjmccq+KkAtogw0stlFJOQOafAvSIx258GzuGXRU1rnjz+M9ofNeQCS/jU9p57h8iIFupZdggHdVM2M6VT0FACfXpvRI97DbUGN1EQORimX/fNwEyk/ik08X4PR58C2O4LIK4/GjfcYaUkrnV5Y6WCVJukBLMBr1MOa3DvwJsOhXV3wLdZAPctL6NXV+vfEJdWmBsSbwQQLkRpjqnmQviCIA5P38pa6lzDNOFwc73MKN535AfO4ZjPvqReoVDgCna/eGErCrOAamw4JKNX5zli+rqeh/8RYtqNYfeZCug+6KVdRkTaXxdag9GlAzqXdxeTdhf3jsG940ayX8ohVZccQPd4TuyG4YnGNsODDBETyt8SBqSFccrV3afa9rY13Z1MG77kzI29MjfiyilrB9lQF1g5LNtB5F4gLhq+mYDJ/Mo2e8eMWREebEPJgmyZppgqsGaEMhkw2kA6JuiYQQkYrh3g0Pgh/XKA1DvcjI+1Hu/l/SulblBfXXmxBJ2/RGsAMS+qDLploRF/wkTxv/WTVTy/fSdeoCclXKvxQaX8R+FVGQo+ybsQyj1ry54KpHjUceMUlHFyAqsDRWaPTNiPjIP21V4s2ZHzotCDVHpUeSXYrllWXDw0ZowydzI5FpzIxQUP9kso/rdgIsMAxnjbdouUSXSwjYGWg2kSheTNFqWyuvtNfGroSDrEvaZ+Rhu4OcTlhbxoyTM8S2++3qobY60ZwTEUjbI0yE9X34F/cWfuVmiAoZqMBlormpgLCuEUYC9SY4sCUncG4abjnez60pdhpsemy4Zw/aUuoKiE4NmjJMkrTcP7OWmJz2yUZecv+6KRDl15PmbCJWhmhOXHimKSbiid583VsOfC5CN+0DgAecYp4BZGR8SCWeJGZwXX4/2Tccp7gC7puZUzY/AP/quT5pMSZEJ6tCbZFQlxFxwA==';const _IH='45041d7d6742a32a8f6e0e87fde18e063af2df12553b622c2af6633f6787ab79';let _src;

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
