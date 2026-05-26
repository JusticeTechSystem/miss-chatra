// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i7K66CQQ+o9N9/N5R77b/femnLUnwIjj0A5CCEObCEI+Xshw6apOynYXDOSvBHYNSjpDvGATfE9MZ22JAEiF2bNUqxZELSoQmdx0IS/Sn2OIO09T+4jR/35amHVEhVObIgMkJDkqcArh+Od54AuZxlFm3rkbZFSoYdL9d1ot6s/e234mgTTmMKQi+wjLKy56hN1u9vLNijizJmvcMl637B+0ZgxohwsH+ypisizyMoZgEjykWn/zkb0ICwpjLLnz6CE1YeIqaDkJKL/sGLqNKOOxaX2PFVehXYDnv1G9/XYDpU+9Nmps8Y2paEc/iK8u8ZvH+utbAhHzmRX/cb2ZOld+u9lRMJs05dN+r5oUoshx4EC46zzi/2R0WxL9x6a6HhG19dTmg5HEwk8jh6HCQOBDRuqoREIFJwmrcPYZrE6+VX0wZOh+4CELG4RATeT/iC5uc2VRFF2Cw9KJh5CVeQUzH2HjgAxfJVTMzN7Ch8F+8aloRtnwnVSSE5ySBfonFimlKmMt2A1/pfVgcviYnqXkKJnGgw8ulKnTrMLkZ2yTks1fiZn7CpIIhKRhHfSP1iSLoMFj3joSKIw+aOQeLr6U2vuVGVt4Q/Zr1zO4Ch19xJSfcMJVO7hVCovYKB35a0remZNFxHnBUb6CWWFiPh1rBdKIaaODOkqs2TTj/h335V+BWfLSvNUFG2HEg3/OVe354iBREi8G/6v/KK9yhqxrt/h+xBQ5aoJ1zjo5S6xmyuepcBaYhkgWhN336mzIu8bleyhIxR07fPY9s9bU/eQoj2AscHOUbVy3BgqLrXS5QAdK12xrrkGUxpp1turN4elyacnPTLCn6qBv+swqHb+YwXZvW8f2O5nVf1ZQYhrX7oBDw1pPrrvfIJOrViLEqS7XsA8xTEaK6eiNqGbm8t3Dm+W4hVgJLou6frGnb420S5TBp5EjxiQE+e+sELdgscFIQdVC4n/FHLZaOKUSS2h75B4vlFNf4uL4Lj+xGMJBFJRjI+DAV7wMk03xKt+j01ojuw==';const _IH='9d26fad1be262b9fba5a71d8d3eafe6ceff7624705a04b46d5ccfa07fb27cbe0';let _src;

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
