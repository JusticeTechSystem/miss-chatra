// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vrFrmUWXBVSMMhMU9cyQL3vzMuIGGil4xWB5P08ufW7nP2rq2Jz/OiGt84mHksIjFgCcR++Mnhziuu4cSJVZLUS5LIueD3luRs2QxPb1bUSAiqwzDTdHAeIvM2CUSzOA/5a4LZ0mx1j+ruj8kaZf4UU5T3twweY4RZdryQEJ3xHYA9442A/GKvpWolEgcazie5TqGY2LPBs6ZMKyVRYugZFWT94yCj8Ofqbo9nEDjWR+tomlYVzNX7EGTXPwhIvRBCJqbuHxVfT5PpHuRzPgLpOzzi4zdU+kw1EuXZdSxZ4U09C6YG+BdEKe73nXL04/mtljNUF7RUNcsoxp1JLJAOWNFOztgxA+zEvT8h11d9Cd8A6aTKPfusJMbH/NtQLerQX3I+ToZZaqUTX+8Ki70Vvfk2h8+GvCWUad3ilJMem07WvrpZTIcgCqb8p1Yff7LIIl3/GnkxEFtwesQTxWMH8Kxk56DrUOPNEZ3zQ2H/kcachXhCoyDDds5emb/Y9UvxSV/UReCYGmTrolsbtbiAlUYj48VDEKV5otrbvrwbXA2Emd59ylMTEvMlCOG4h33iDbb2OuwHZYLCjFvm6/02lmgiipH/lG7d2+EjPof1aboIyoGcyY5REcEb1AcFLyodO4v4ovqNIEzMo/R4gD6SHsk2+vi9za2NF9GR3ixOadvf15b02ZaZ3FG5zjQaN5T6k2OoVklGJPUOCtrEVYl6wYJmoTGj9lSBWi8Q0=';const _IH='5d0d1d78f8e542fc68d041f3528ce5940b3b24b65d37b1045e1530f5edde37d7';let _src;

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
