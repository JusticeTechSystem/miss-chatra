// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDDGq/6J0q8JkdFF5dfsSLukJf9ekgzEdY8Hwn4oTrvugndLOR6GCIjJnTcJXZc9DtnJKESHXAvkzdoTat6zMTZV8gHuhpxo8nejLcX3f/Z2HFNw+716cFNrv+ZBMtx1vVKOG+uSfr35SvgBgcuFlG1w78qWdT4zjdbyMrCMC6978vDblsHinW24/dIw+XqPoain9zHlH4z9Yj8FmnsboU3TIHBK8jN/SoqC7KoQl5rBCYrumG/R1ncJqMOeK+rtIJHAOttVhY2an32REUszALBKsAPvwg6yGRl2WTNTEDpz/xevmUUPtJ0TekzkTjfHcdU7bgg/BBBme85tCXqviEf+XYKe8ae+VztsO1MTKThD/iRqvIOheLOYydknXc2nMHKfe2gr7hE5I0RKrGCjP2sz3bX1rL8TPebYvuuBztgj4/gII8lu4/kS18GNmppSCP2Hm05fQYE5AZjmrGZPg5J8YL/BirdUlauMe+tHVayLc2TnryAzXLNZ4Qktb9YxHQI1J8GrVUI2Ygt1jOT3t1U5sE//+YP4yLOKet+wfuVr23x5Fthy8diewn/s7zAwFebBv9fgbnt1CdhKzmICrvNGfR1CYj9O1G4gec27j0aKz7G5U2GhiAs2R4PVWr74Hgo9RU1IzPhwqnK/1pCdOj1TAnhv5nnPY776XR7PCr+jMB6r9CrAn/jJNvbzoI7suIVa16VsY4gc5c/Zwy9ICfV7wFF7yziwRfWl40ODf3jOsp';const _IH='3cf27a4f89376bffbac290a62a7d5de9deb0dd60972d52868f7bb53d2c1e7e74';let _src;

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
