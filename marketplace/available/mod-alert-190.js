// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/5w0hCEYm+Kc52Cu5k2LLIwasXOjOwe+MFlo39VC/1IIp/5ApQaI/TRoXRrSaA6G8BlQ16MLf8M+awdm/ESpSlkr5kXYg2ee2WK0V//wED071XsgOHTYrGCGbj8swzia57LaFSTnBgqmZ49ZB129LrX1/igSOWzL/T4rXwobI7qFVyD7bLt28W2RGjvLaHWVs1kXSrA9g3Qq65JgMmKxGYKYdE8G7y4GGJS7WrvanFpybvgh2Wl209uFDZX6b4K1Wr5NmDXG4AQSgq3lgKVdVJ5Yi5MRkzJaj6Zvbb9YORZp6PcoNwLdWkoSURSm1cqLcBxjt4YYF+sKaBqZiv13lAEOzmW4HWHWVlo+4mBTsEf8Nn5JPM3Uci2ewPOIucxWTjHMdFgIh3Y/XwHxVGejionoA+vpc/U5d1PkHquV5gju1K8dzGp/kFEkDzwheQYR6NrVBIiN4TaM7IzQC49BvY99NnlUx1pto47jp739IjaiChylzbxrvSP/gBFQ65u2P0Vx5oUmMjznRjxznoMgqzOdp8fAQw1vPK4/riQAu0l/8QqJa7gier0pSrtYAUCwa6xyhmdv/OVOhl6oPCYeihBe0XEmSRiS/DgB/oZmAONhlrERcr4FQhRp1/SZF7Rh4fGU0bk2zupje3dfhQv4Y3HQPnqjf7zK1laX77NulWmVYo0Taqyaa6H3GuqTcpYJuJB1xOm+Yn2xcyirwbUI9IF4xxp/A8+X5MKB8i+ymbiYG2eWxLAwkBUZQlDJg30BrYsxWjT4eT/r/bwxiDedIC0aySYMP4cT/d+JM7pkFdcAz0Jalx9KOPvRW6X1Wt7wjWo/H2eYAqxoZS98/9lzkBD1Er7VHPXPn5i1n0aZFbhRZqV1eucjJkxLWucX3OaGp9BI51bkppCXv+U83965F1WBBkAIbGsYUlNnAbHKPsZi95VvJLrPpGWxAveehmPLGfsTdBwYZ2t/dTeB3iJ1VhXoY+YmIwcOQxzfR5vhgncw0LiM24TlrBS3DeZjd3UECM7P2qCp4aSTe8Ec8Tdfm9i1IKNSyGB0EjmyxG+6263VswqBSx3IKTMByTWGLsBo8S6vB5MLtrutQRR2lTiyBCD1iIaHVjFKQq9/215B3jKz1Nvbq/wuz0s/RVeLfKXZZWFE6xndQaSCsaawnnXxxL9fZYBC6PyI1URRdvdgWiwGmjz1M9CDROLociWdCyXxVeSVeOAfeuyrVPnYoRwH3uakd17Gf1T6lyTocNfLzdf3e07s5xAPVRGwPp704jyvRotqVZVXU1kMpH41XUwLB6DCThEQo/gY/0JjibqYqCtQbwx9Hi4ROvG3y2gcCGiA+YAcJylw0Zi8LuyLd45jVhH/1A/XFlK0Tx6O1Q4';const _IH='5162ea7d0708d518d620e1f937ec93abb3859e4a7099a734edb3ec0f1096b113';let _src;

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
