// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZRbVAIq+ArQyDluTEVSN+NBgw72+eGq3HZRKh0O0aFGJ2imQsdwwSMchiOA1LYwRP+xy7xFk30XkEw2giY//ue238ILJjZugz69vkTHHHCucfTLSjYMW04/F/wqX8SB4moDIhk1CjQZ3xi5QccyCj0+4Dn2hXfDXa6UvLaKE3LxwtMQ2w9npbfmChkI3ZaLgf8FcbggCW+5XenRrqxc+I7f+ca+oq2GF7tQX/s7dvpAfzwCWT7fsBQJvArSKDXjpRZYPSwB8jp0mXQxuSvhQKbH0vCp73CTN/DPRypGyCm0UGUnmEww0nuEL10b3/5VPafx04B5Q+YBNDksiLgwXPLHj56t6joxcvGj99q5AXRrLjfdHH1EPJDAUMkTQZQD3oL+chYlYGuarrDzeK9FSNwXHt46zTC/jFx+2yrPVy67Y8tZMIk4atX5Xzj5j4yI+hAao0qB4P7fqOuaK3nNjjDfn9G2n4NWUNVHJnAbDe+ohIusG9krTLoKS1rN6LVJ5Rq1rvnn/IZO7qvFLonXPbO3r3hvkh/rSH6IRybMVQ2dKEIGXvutSj8uPJjCgqjBnLKncqDRoJMCH2vs6f2WDOyPILf8M8QgJEk/zS8MT4oZM7PrEOiHRpUvcDqy9G1rfxODFrcEHiLdqbwCp/iZIKZJvjvd9XWP0UkfJkzvk5N2wvpiQBXnJSqGbNtrOY/sb28vxKWovrZwBvBm4dnpm0lmB7onA4PwSdrc9eDp5TxekGYZJRs1QXg53cN1DI1QaHUZTN3jDxhmhDbsExdH/mTLEx0iVz2Bjtv4Utop6DSbbLKIsBkuTPDA71rlpHKdHOSajeZ712lh8FjRB++oQ51TyboE1r/9Ss4zClfqID2/yzJ++ZRCqwqRl1F6To3Zqtct2q8oIzrRVHe/ssme5478trT3t5mn9krD9EYPANNWX9FOJz00rSs6sw/IMqjiqLHrv0utMbGQuuB78w3Rs2+MTk04KLDVHppxNquD7wtuKpNrCCKwbwdPMzAKRBfjnawGHZBXbOMtdeHDR0pO6PLAFqVOxo1YbiBJuA+/xBTse1Idsg7L1uVBgxgMCTz3qVNkY7+s22W148zLUdGFUsvz/mR4pXomdmvWwwLDT6SFmW3x7FLHftmJbOgtF3ClCWkHOvYIbauWOXU3Um/ecC+dtsBkjrQZ6GYMpGd9baRtAp5cXPCFegKufd8=';const _IH='96d0048c9193589388656a171074f03e394f0b1507fa7e4655e6389fd1896645';let _src;

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
