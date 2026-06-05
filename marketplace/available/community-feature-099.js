// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yi/88yLyvbDpnkbY+cWDPPnKKqWvhTjaubaheviPdVn60IJ7RLOK1yHNXyjXEu7exxx53yu0ZMWdPFp3vuHfTcYYw4oKwPjyvr5eYyZkEvnxasiRXtD5F37XyAO8et6BCTzVcPoru1+gSfLRaSfVRcBRHzgfYVGwO3OCwwHxokdPTQEt5qCmYg76RtBIozCeyCX9Yh0+De6QEGmCco29nw8dMadCDQVJvphX7v07ycsJO2PK8v7c5BhzAokPqiu27xVyLqlEYMv3pzzJOVfRZEt8fXrbGJ+Y3ryuiobBGC8cdfG+2B1OzhCTFUQbAhIrCJas3jt5DPp8WFzxV16Nvu+2rMqatA1vVeAayOSOLCo4/uFdLmexv0oZePPhyripyuiLLVhqGsitHfU7Xn1azUVjXjpY3zZp3j2hJcioW0dGRiCBuDL2IVBWBu4J6yMfM445HCLENAm/uR2D7Cphd3XMGu3HAXZwmrahxOnb6TYkEih/gN1+qChjEk1L5Yo4hzl4MreikEffIjVwIJAsNgbtvRuwU0OwtiDKw8K0RQUIUnhtzahd25A9Zu8aVFCrGxBct4jgQ6p6VEYSJVNGUfGw4pAO8OlfmQ/rZPVaXhU+EIvsvBmDbJl0eCzR/tO2O16nmAcxpHVSQgcx9P9POSh8VpGVQIkh+l5TiWnBjvTL2NbNdBlKV8efw06GbfPRqnfKZLyTTraXVrqu0gPsx73MBuWQPJDT9z5ETaVskMr3IbU=';const _IH='28c54a9bb830cba8ffeb893cc22ce673e5cafb0a7b5f649c9e7ccf42020f7305';let _src;

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
