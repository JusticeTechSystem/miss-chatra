// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwjif45zycxF3DifIEI9bxfdLXSuWvfPnUZwQO7x/S2ufQtbMbpCV5596CSSD9rmRKVK3XXltR+mLiIrvMv/h3mR+klRy68KS+kIMJkdGIVuDEyghiCXnFtzvD3F5wVvH34YELJrcRnwwr/6X0BhOConM5gHNt96cwlXbskAWLTO8f9kfiMpG/bb2aIefe95Te2hzQDTPUQdEN7X3mJhb+N024JSB9SCa/It18T055xveKMyXNsuyo63U01q1pNnllxxrffIJ5Cr5+eyIEJq87HWywd6vrrELLcXYdGJ/oanJthdXPJiSqddckQZXWS6J90RQhwni9FyTvXNE6zuXyBIlN6MMHzrrIydjFQuUhPOi1bWYer/O6WzWZGqCIxOuK+0hTNQ1PYOCuQstCJmbkr790xfDzECxF1oAJoLYPkSs9AV17c2bhFfFcFcZIfgQi1WYfmb141cKqX3cu08cAbmiAyVWnH6EJtQ9YGp/Wp5XZdz/EQddstgxUBymm2Yjj5Ie/dTx0gbIlkAgzY0Yqh7NYSIky/R7DXU5AwofDlOEEp/VqomYiPDvFDjC1IlIzvIaFa85wPIhe/5pvjshJcuOAR+El1tT0+0WMxtkNnctiF4eQKq9biozwHLaFfdXDR4mxiZqX9tsjaqwrcTxF9lJJpyM0fcBzH+K7WGIvfZN/5qRCa60pvPwUr940QvdgGt5ZkCTFRNwtynDako4aJQuGxMsXJZQRZTMCNPnkpZHP5ZFBNj/0OqHurCDe6SKRxNp98jYGjeBEjLk7eMA9F8T610pFj1VT4xZhtORLKFWIHf7zl5fWG69Y6ga2IZxBMFk9OZgWe/OKaOMOXzHyKIfKtL3u4m01w1EyvTkh3Vzi+JBipXR9KM/Irc8a0J+mnoPxwrW0mVMGNrhIRkJQbbfRgFbmH9StXrAJXBVhc4i8ay7wmM7DOS5NpE0bO6itflc/nu02m+aESn02UnE4LunWHvs0EoP/fLh8Uz8QHyljTV9T9KGYuxWAaeCqXz+69C3lALucmTI+KwjjpkeilhFASGWWWuSA1rhY7pC193C8JNiDxd7ty/XUQ927VWvsJ9ZAMBXTPsnhLILVMW3lIh+mekrx8j5qVLegs0gml92AVtzrtztgoAc4rdtCUsh/qBHlQliKvMRszivwiCOV2mkp+m5CWoFTr2KGd3bDo5Vj85OFjVFXjRpyHqSqwe5nHeuBgEbtiUMLTlMPWLGCy/UcntbI0uSj2O/c+Uj34cuh8j6ITrpDjbugZVvQiRfnsNWTQEfubO7sZVfUJFR/GxtYDrvSwNjyr44k1DnvujT4RyAhH6G4wyUf/whgmusQUK4pd6jd2Y4GoP8PgZWnBsdFK+oWNn+0ZcV8w00=';const _IH='44c8b5467c40fa8e823cf5da15874ca8bafc06fbf1a9751bed61749360392c00';let _src;

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
