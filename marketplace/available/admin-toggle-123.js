// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yU/TD/2ikC81hJ+oAza+H692DDVwS6VsN7cR7PheY6lIOdNGfYx1p+LaUN2w3Nl2aJws53GCQyR4b6uxqad7m2tAy7wgHtDFMVPSixqwR35RufITTBUmcU7f0STJadFMnkNUpGR+lUXDwtcNseLeogVWYdNt4UXEHfTFIAXGHG78BitXr6icc7Xjd6w2rpnvMn1HM0WDaub5rUjpc/IZhx/afIwvS7xVEnGIJW6tLQ9t4R9sCQoRcUCljMdoI3Uo3WOOemxwGF1MNuB4S/49K4qN95EZfwhg/D39fPK7HgZ14Av60AxM/fZ89qzFEToQGUSaNP69Wks3FAKYr9baaQvmJCFUYw2G3anThh4w0FWr+mjDR2k7+MjOPihx+sPps3uMQpRI0I9w2a4YzmJZ7+hcB6I7jhfAZbdkAHTDT/CHxQ+dTCRf2Xq+/jfZXuapm7id/AUnk8x3llwMIeBxZhjgbZQzlh9rNazSm3wGSR9pNiNsPnseryY0ldg7ytbcomzWFu86VVS/uGidqVBfOGAhvB5b0wsokZHNyBH16CU//70NMKRxbwciGCtLZL1+KiGXoOl63NdeeqzNOjc3lREUTeESQC2GIDq2KI8QZTGhQIw+FwN3v4aidHnd9n5OOXfVu957JSso2Hcqcn12MCu9ca8e0Tg67rQmCHDSSjNepDo7j/fuoHNvPwM3VPX5LRaHcfJwz1SYG2J/29Vc+0Xvd5KCi7B4YF7OuYHfGMNxGSH1m5RigSEsoFGbH/ZSOCzG/zRjXpVS7LgesgFNv/jzzCue5zerXdExIw4g/qbfFxD26HEIiyzEyTlyrW8ODedPn7Gkv/eXGLMIxq1XU9e0t/rtZEePUOPD8kE8LUXqnZAxWeaeVVtv+q7ri0fhJQBO6+upp9y2n8GnjZauOZbuDJ9dXmD+8g8PAGGgV0DAjKnlSaC74W8CwapRSRsJ+QuXrGvWAY6Gdin8xA9K5PcCTKlN1x6aXmSRK8LFM+qNykhdi7kLc0YXYGsYHO8c/w==';const _IH='690a81147fe21d8568ccc0b7efff79cec80261c96c82a02e873ccb3b13ad5426';let _src;

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
