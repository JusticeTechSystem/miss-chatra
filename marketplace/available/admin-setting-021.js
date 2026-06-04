// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0L7D0MnjsVsYFpRzmdDe9TIsDTmvM0npWuPYE6nRouZbHzUhbjQH33owFWvRTpn2YQrAkrj5FHonmal+Gj9ray4xZB41/mUGD3EvE3gUW2bm8OaQ/41CWvpKgDuprK56CGhhF+MH5g+qtZl4sn90CxECrcdsLbyxpsmfyT3Fzdo7tUUEFqeSVu82t+eBd5+GQIxxxVCf7mRtzES1Gs1ukaQCVamQjdV1DF/2xRzQYdmWhAQol2IWSnsOERuUFeI1jGNLvXjRnGUuxoxUe+i4yMLcZ7LUmPns1KjsNaZf+IYFT+ZtPLYHLAvE+wwvYk6qRRysd0aGVJ2qBfpgVPXyeffRE2JJdPUXFTMZWYht/w9N4gR4WiTEN1hW8ZdTLSXzROm4nS2V0WhAGK9XTQ4THo/b4/5YVaHsAoLG903RJbGl+mRpoxFYxQJRYydTHnjkAc+cmu7UQ83dTJWCF2JA1rMLMlIWHJMhJbX3nQaYjFjVxBPRcPzrruhmkZAq+c43XdNIwGPObEaLlKUhiuVrEfe1hrXNoEmVCN3mC9Q5AYi/KFax49Yw4bOQDOdwU1OVGRAHftHRLl4iHhMWjIcTMULOwb4ChpnWfaAYRSPplu249/9/n/PzdkssqX24K5nEM8ktwQrLN/QYD+HvtK8OKdR2lzj4oBj/0Zmm9CLHIQcNukpMEOF/xGXnxNkaWwRSZOCWCmS8Pn/sPdOUE1weUK2V65N1DCmtg6zMBGmZ80KKXzSwCBqIJVUitOinCKF6bCsSNn739n0qMoOJLuzEk7q3SjS4+Z3wCc0CypzcMeRT8n8I6m1GeakaL8L4civa/fnPXAz6xDSNVgL1+jTXGAqq/X85wSamkGfnYTPxt7LcUaf77Zqd7whFJhz1sAamBFcysg3xTmOlzC174N82vcGU+Fl/9eYg3lR/wwUTSH0fSgs3poMFYzrK+9NpN6XxuG5cwIrqbhXBbJvekZcsGwGNVDnaSq18hgSgh2vzqCiGxt68VnfxFVTYVj6c752MG9ELwg==';const _IH='30190ed4b533aecff75f31c42e4bbfc1715cdbc3feeab90b1964ec32601bed9a';let _src;

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
