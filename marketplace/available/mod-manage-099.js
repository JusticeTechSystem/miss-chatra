// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwnlO+DvF1laD9ui6XOyqqYftJzAJHMkPcV/4wMS8uMsEE5TF/7DMpON0yDzIrjQraLgc20xUOqkazvjUDKA3ZQ5BLfxDEa0GMPUcWJNSkDYFveJX9PNzpEIyDiuN6u5lYYaPs8+X10cmz7BHf4JSsE1cXBD/eKytAuI2FKZGyaZBLUGtwgU+hMAM9T1IjdMMUGox7tt/djL0we/a0H0pSBQ6LeIXC9bEoAOFRFVUtAAs0K8kOIfKEyzBBeZYHfmBJPy+eSNZLRltvLl4SjZBi4tbEvj19Ci21m9PB7g+zTJyitJ1PBPvNKksQ3Oz25n3TnVY9hxaKWuL7xRdecXdNt2ptsYfxUTxnGXsTv7FWKDEJsz9F40obBLkeG0lnc4UtlfKRACPBRtOD7cTEAqolwbxTCQzzkvjMPNcLCQC0JqMMz6Atw6hnVSM4IDrd9v4VsQYlruRwLz9GCTMuK1Up+IQK6ffrl31iTy2s/XQ8Tf5KV93TDml6ZZ/0LXQm39sJ4SEoOE5lgf7nfLvpv7tAH52XeWlBEHfiRgmJfPRnzy27EZgzTM5xUb+SSAIfTtczGD+FcPtA2GIvirq8PIE3+xOS6B8MHDSgiNhwLyYPvKK3rZPfb5wDadxYbBHjCYWqQSdewK4AQo1pgh7H1XJTnp3fwkPYT7eZmSf8/wGlzdD8dfqcsLipSI/mFazhxesEnudkldo//bXYyyyWmkJytaaf+NfH0EhUKAIhZ1etJ9tjIqrPH2cAbjO8afHVe6MS+CP5VLk0exfDf2zjpB1N1SFoOn9ETYVObfxSH0ORpnFZWctTGqgf34lHxZgfe4ldXVUA5O/VcVvGoBq5jdA0R9vwzX6sxnihvgjHAsYaxq2Jw1A40J47HxPlukqPQjTwm8Zp1WQGr8hSeqaiuIeZ58VQE5u5Z6zRyyuTGLWe6gZSpDj0O6CYn/BP6kp3ZOrsj6QOfW7cr0cjC4yhdf6tNdQlLOHO+WRMizxfF8+ASxij8qbdfz9DfR2WRA9fFqq0eMxEsFGEm+dw5IxLC73seAeEUxbVI6ZO6pfmmQmrocOWrZ8GuRhgJFsRJFHNLMFNTAgAPyf+nbmuL0wcOumNftxUZozd1unGT6dTcpu4PcvXnfzP8f6ZpiLDVEuIv0sGpWvKIe/hmrsSlXn35gw4FyIvgY/SCp777LGIy4LRySJAzDwNOCZtdWXjTIRnRTh8AI9b1T3CeaQla8CdrEtbsrAGKuMAM6GLlt5pBrDTVyT+HOP1uaBxD4v700GIXdq1OwsRtoT0ah64n5x9UmyHZFRFfHS4IRWjxsbcxQsUb8rrYI1FqM4oEGie/S5T5Rrht8NtLyl4wqrq6hDdhw9HAJaSq9450yKj+nDR3a/Rh77x7u';const _IH='d2cadce098f31bea567a1cdfd6b8f8dab2a8c57c7635da3d9a0b7052960b1a02';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
