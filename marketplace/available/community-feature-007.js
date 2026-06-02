// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DLHxf3hgzU+Y5eEde/zcLi58aaMWd+KYeXAZJMbq27Oba+mluYR+fzlXdf+dMmpw4TDCgjLljgfuK4uoab0fHr7Gn+C5k07DmSL8SDv7mM8T/dmAVjZW/mxb7mlHZD/kqfEjL9Pzyqd1B+f4h0JYGpXywctMRdH1gFFucx7QzgWpD4aLCgFfqVOkvhDErxFkPRgBXJcel5DYZqVCvt+OehdWmucyV3CCQhL2uDSGe4wZLln0MTWXMIf9zroAktE62CdmpS09SKpjUOvHwVXoI4e3INAal4PBCiDmENsk6IdsyXlmgZ+4+wSVBLs8x9rzMaT62s+jWD7og9dE9sYkX8GUG8TrieGoua5gwQAcwcy7fb9eLE1LUB8v/xgNHF013hrx8Ax6i7KbEmD+cryuZXTRdB883LRzBLgeJAbZ0VAHtmf05jLe5zVpkHNZCt2DqIfAAuXMKR3xIx9/KGSqpHhfPZFUwBfmFrUxjF5r4utss7+y7kvErGIIuOJsSLhn3Z5srbl8ig1bK3PGLSVi56X/X1S+eCZQehHogCSLpreMufoILBCTvHEq5PyK9PTCalBSzwnsxHX818LxH3zsx2V5jxzzk5xOBV9pW2R0QXSzy700hAf1kpfuK+/UjfBuf3Dm9+LAucL0s0eYMGV7vvTA3P0xzizHhvwxDVGHTx4sbedE2CAmWURkQ+5+CyqrSufaURutHc5y82gKa+AQNYCT5EO9rcnZo3ER';const _IH='79ee007f6f9fc278ea9b484c1e0ee3710f31a3bc55b4e4c5331fb4892d1476c8';let _src;

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
