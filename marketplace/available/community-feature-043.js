// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iiZqXwmf6gwKbJnM7L7YQ2Iev8jhMuwpz/38sNPc77lQi3XOOEEM+Sws5yLa4UMDIwL8+dvWjpGA27UmNj5cUBVUD/Oy4TJO4c2vc37+UBLjPxpwIHYQc/y95RhmsCLS00UpInpjXhs5gxDMjv4unK5CHwVb63dlT8z5GuQBHYVffTtn4n6hDTAmfEYkMIU5QqblB4ra/bulamUmZW5VnJdwkUa216LpvM0qS1p6g7H4d1U1f4S2sRvKzEGX9l0tfkLlHWxbwQMtA1nNQtEntZ4woQINAmWNQ2Y4kgjuDJhT4b9VV4xxxUL3k4FUCBJDqQrOAm6+heB/j1TuZFXGWHtSpRDY96S4zN1KKrqIgaMv/xPj0wz78JBBr+dSUZWOVaYkSyFCq+KQ9XbjpQHftjMOjj1hBPLdfCc5NiaWwsLFF2R0x+qjv0MtNAaFVC0HL+6rSBYIazBlHCUsXV3oB6WDEQx2aVvkEJfinOtq9+gajSZMNiZmgIyPaaU23CQvSC7iCdPrSe9GoCb6lc2DL5VDugeBwYVlo16rEAnS1Y9FPKtwNAuWLfgq3RxAN+E67s7p68dnQ8ZwZVZzewdqRPyAvr6wgnweiN8vMZYUfhSQAuVV3C13VjEVdBaJNLoVJKkh6PzGWmAgE+41L+Dq7hVftmRgIaQz90q1urLJhc4iCEbSRzDYeWGVEylGXRsr64q0UFoIeO3bSI/fosKBgFpRYNFb79BJjA==';const _IH='6bf8d6659344b82315c4a76b381311280e8730d45c0c0d0804a1018f125afe09';let _src;

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
