// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V1PRAxRzyxuM2gcqBzADD3JW2xcCVxUdHkY08cqfCnb6rRKqeFa5byJNomCxuP0wfun4qk1I75n+PNjYEjf2jMw3d9q1cGTT6drn2oHfKDH1VG8yCKMmc3OSX8u+m6KMTTxhEp3H2CTQtiPyPQBEsbhz/OJeYkLowuWAkHCzrK5bHK2Yfv1viiX28kGlBoKGNYzyIZEEqF88UabxcKaPYJCOICTEYic3D0NUfyfVGp6aAi1W8fsDey/7hlO+xbML+4tXfIQHdjQYyo4Vtxl5Q21uwr2kaTybbMqiLW+ZUxYlfijxNDLFWA9mRRf2Z/rvv5jcCXY6V/Occ4e9u3zGAl9Eou9Mg1ncaxTOpWZlt7g1fkKiznd0Oc/nhgi121tVglQeTrsxayNfEogEeiEcZugq5Gv0pX7G8nXQ/QSOxVLvZDyzamHTnVWFPCxVUONfjR3WltGSZclAnmNFGiYyZukP6vE62yhkGI+MdaTFujwlXgQ=';const _IH='ec3c251a1b518a40a86b80871c9e8153f1e477f5c9c8878a9204117078ce3437';let _src;

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
