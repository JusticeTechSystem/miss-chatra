// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/NEzLNmSP3XNXVTggodquU4RTXNgCEd1g8fGr7nRv5L+gKU9lmBKWk9/5Q8cmd+gUJKo5oCB0MEJeJzrLgGj3kpE0aHskUeneATdQSSLbC38beF+Ahe9Yg6kzfkSKzDdZBvrQOem1hkKz3nxcQ2k2jwLRhSUcR6K5HRnqh/EMbu5qhN39zOk2o5geHNA1LsEu5oVJpLzofxRP3shs0fcTVuyUvbacsPRjnjOVetDuQM0+eMQgtRYAuipEL6O5s0xaeKNvUyUiCNRexRmGRZPtTl9zZ26l2h0Jc1uf0GWuWnJkXz3lnYg7QTHQM/pW2sCS9+B9u7GxeEnknKfOan/GAcbtgwArO2rgiSP+4GLO+/ALgGPK+HkcaTdz2/gR8IY71JTmwJcrwbXaqs8j5m1sxJaj0mMdD/IuEcU5JoqoyB7cyQ7D9fHvKdfhSzWnwbOMuGgZiuY0WeudUZYg6nBDxRl75HF4TKtllOwAHLwtreuvRz5It3cvi38+B0wZoVB1KNobb1SNRLzlyG32a2GDODSGsVYaMP1+OfcNhZ+lME0w40zMgk0sP9EnhGXoxdgREG1dpOvNEwP1/utZeGMk6GUGkh/c+BDwDUrvUp/UsdpX/gSD31EaN/RSELO2WYABQlbyUxG+gmxit1WDGDXX0Pg6t2x5OUnJyIpa3pRGtqDKFR4AV8Paf7lWL4LhVHQC8SKIRKB7pLGUJvIh0EITa+leMrjOq9MHUL1tHqDRwXlTNT4INk=';const _IH='e60a18e9d91c331a18c1c51211556d3a96e882b7cda000007e10be22baa08574';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
