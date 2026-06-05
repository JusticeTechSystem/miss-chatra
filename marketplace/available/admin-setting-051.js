// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YBKxztfIv+woYlyZhm9VmXinslzaj3v23JpIBF91PRNbCCiXDWwhVzOkS8J0GASDc4Tnv2/CYTjdBP+76NyD0tHG7RVyxDqyZGdzo3ZWltkoK3Yeb/wzwwCv81HyjJokMmYcTvnu+VqoF2Xn8DPBdbu+7AVGgVFLnjOdJ/LFPGtmoRHgA8N3TxYIiccyU1aFLZfeR/SfGVDnLNS7Vl90MTUARpVqyagdE6E4GU3uSzZP5LpdwKr/md66h7cUAEyc67nKMvJpHN0A6A7XmN34r+QlysYWqxsHAfUcvQhjwRKv4lxQpixlsXn9xvlRzPiNN+biJbgoPDDFJpBVC7FnnJyrUFGnrZkWLhl0YvbzOGYhBtKDj7gRULK8Uv0sigV/MLiDHqrXELbqZ50PpArPKgm93i9opZq0jQBn5iVjzC/P/BGhLdwcRBzpnM9EcD6RKLzpYwttdoEIYw804betnmCWW4RighF64KcNdJmN/VxvTuatIYJAeEZI+C8jzzTWEJWqifx6OcTKEojZTDzT1qEtwZ/OiRaCdGYvRk0/JMIwV79sQksid94Yvszn3gV6OQdx+2xvWsFDLgPIX8v0fHP4HffMkYVFFI/jkYaAzRVFmHE//vkc0/bL/n1gxpWYwRn/XsZhTCrIhUSwyM2pSAp76WfpDxMBFzNHUDe3L1Ov56PaK/D87wOMXPdFE4nqWAu37BVowD4Q79yP6qItFdlQT2uEjSYdr+5XNkdVTWtG7NaPy2NtYobNANk7k3FNqC4ln95ly5B9/Ft2zBgqsThZOcObqrbOGYqvH1q24CElabiOI0HZgXYupk9zmSPSheM2ckM4jOW2VtOi63s4b0jEmNIIQ2PUDf7DTB4C0w3ORyguembTCDkhDOAcJ/SMGC0mhayVGwejsfknfon+x7AU69cqsDgyGLu3wGIJ8oZOtq1sNANgQJnS/s7fxlj0IFoUaXStuAPrIBSfvC9IurvXpioK9ZHdGWLaGijehivsX+CJble5cYzfd8jND+ySXhOG7A==';const _IH='96969f2bf40bf1bad0f5bfb7c325a0068cf74b569a9d9e8a686ec4fcc10862b3';let _src;

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
