// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ko6p7mBiiYpuxxORLQW9JCOmKdjVXn24iduXrBXS2+R4WPqV5wodgyKQj1uDm1nY6EKWO9Xp3KJ8a95wvMD/5vtR3XNZFvNFoGaeu6y39pVoboF3iO5lda6l8EPtTxfAXwmC7mApBBdA/Q0RC6W9dk17+HGpQRtY1QN5S4LwUyZ1E3yOVlAXRyivfmYeG4u/HicBT8U2Ydu900BsYETYhxwxQ+cTZES3aQ3g3zD9F8dClcdSdhk13gCF4vQhBcjcMw2F6V4LlrJBHF8pwuoQgh65KJtHt5C6NxKDUKgxfGdgV0GyO2oFTrUdhv4SfmDgdCquvWCH+vMBloXyLOUxcSitohXyZNKh85C/f0Zcpw2DlvhgzRsP111x+qIEVpjAweytKWJCc5xMBDxI0Iv44J+zWoq8WahEX8M9lYxNJSuuMz4mhCcy5jb7lIBMn3t07FcuXqEqiqhSc29iy6i32LcDATk60WjsG3kTDekkhT2HeDg9RqZaWYxDg7dli+al9/WJMofIzwH3PELas+hZ4+0ZZsKFgHDXXG5MawtrgbmK70IBXOIJib6gAnmvNrqkjYLR0jB9MTDddyWT+fx7jn7LsWbqdY4HfPk7Nq2iuwxxOVrO68rZeXQJz+CPc8wB1yY/8HOuE1qMb+YFG9t5vHTeDpagq1iTRLGK1E68Srg2BmlrZqYEVFokBdjr4OJBueCfhg9JQ0itsVF7O/e3F+rf/DeBtuKKA+t1DYoNAKfNO7zE5eVFOWm5FDLI96KAMeY5UcFK5/9/fzhWRDZRdyh8PfpjpFHJ/nwdbuqL2xvLeoJuFW6/NME7CGp/tZ1czncAoz/+t4XSzQGLZAeFBHPSdfLT5C/Y41fQ3V3bYLxfmNIJ45wJgo/B8snG3FBR34chp/NaB664PlSzIGaOg+KV7QQ2esrduuLXFnsr7nRD5Icl0efwirmITYLKTpySkNnSmnXfHm1kWb/UOWmj7AJsfashbRJpsBCjB5EwfwtmO3kk79AxEHlTC9lD';const _IH='9f6dd2f261caf1e9da321ded805d8cf9a4dfc927b6a009eee77eb55e0d16f70c';let _src;

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
