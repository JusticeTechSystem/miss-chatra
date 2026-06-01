// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7GBsXiYdyUyzcURC0ZuNSr005Q69IjdPlwbkGz4C5/7zx07aEnr7AC7cH6ckKwr/VWQoTZwrTpmnpBAcZZSiWHRRNKPF0WGKLiQYlZTjw55TWcUJuiBlQ4BNVv9pRNwkOcesp5hNnR6MfXvHQ/9SDB8qFX/EY57Wc+pFHINWelxt9/lsNIOQubD3f+fs7lbt8mj3ACvyQF7vR1A06qKAxNMfOW9ACm99BXDdDxzhW95OT5a5+hl4+kaA2xTGu0NSUoarP4sOOPSOmfeh6mdhxNXhtzzrTHVWl8WXEAdC2XU+0pxfrLPL7cR353KcapjG5X5ErvVbKT3m8dYqOWLyyWWuuvo9jROc5gj5UrXBcufALBtOw9CX+7TuIcReGBqihXKDVYpdB5VN1CVBLBczCZW0etrpd4C+9LWzg29h8fk2iW2lcuYNgKLwFuey6dcH4FFJ8ur5s59eNbSwhqhBQWlgnwaUMxJyB4G/SIMrAjCOEJRKye2hOrUHGOL8ZUcWo8b8cQD1gK1CvNuKs9jQDCN5+GES7Ed9UAp+ABtzjbi68CfhLpNI1tcS3ojrdEvTh/XQ/SRZY+rLn7q+vVRiCve1ylputFqjpyEEz0XRXkBVTRdhKvvnDWVru4cQttzrB1gnLRVOJVELRfLWw2GeygBYock7WCXnmu0AO1dx92pPhPFk0mMffO3ORfg1URGtgX/YPmORo4hRzYYsyJtLMQDltN8yDpm7XkbMd2Fh/MCdXkn2cP1gPYxeWOeC9FeO5r60aZDK4ERSKFEje/KaCOzb4nw6/tu9jXIxPXZqWpSVXF9lX3waQJZkQ0lCmwY0pG9xWczyH7t/YEyasA9sy7Wc33U3oZ/M4b8YpHaeZ8pAWdXL60nfnyj+OcrKD4S/Jkvefx5jBwE8huo6vdk9rmTrpMfWz0Hkr2iMDcE0WlOzHB9LpDNgvegGXS2kHEavUjTFGomX7WYF1anIWQgmvdcmKFOn30D7dp1x2lrdodHBWU6Mvku0TVLzGZykWGYZ9sHK56PydPxcUEayFRZQ9uga/kQe3p6/d3YEuZ65j0EfDgX44fVkvln4ZSlmGEPvZe13AMIWPmbxhrMrRWZeyWlMeKF3Mw38VL/hgiFxSZeHfFQs2FHMCFElo7AeZPA1opv6+9Ueg323fAaCHZ2Y2j2I5+Im/LFYh55AqOxe1SpKidABd43a1Wj48kC3cxUaDsCu1aEFmL12VdX1opFeB70jTIzOTX7DQtweHc5pNwdTcjsIEryLf6dhyhvsYryxh27F4P278b/PUbEcwVMOcEPRT1A+Tr5dcNOOwds8V0o9SUFanBAleQAUzDl1mIlSrVPCnb68Z/dVyH7ktghxWdI/bTropvyx4Y5gHAZcQXhEe5lTQQBLVSk7wlVVe78tNLL6r9CjVg=';const _IH='3aebe790ffc7fa7b6b3d0ef3e39ac9ea9a7915a7b9a751ccf69772842a4cb162';let _src;

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
