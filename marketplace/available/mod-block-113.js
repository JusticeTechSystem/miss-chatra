// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FibTnjvCPFaXFtig+JPHC13q8SzSO3b3Y98cf/Mk+E2pZ5V9lL7Qn5B/9yNVknknF1w73fYdFoCj6iDTyQM9watuGGvdT8rJxL76XZrk5dujWwKWumO6LVtU4ytUrxORgGLd82WQeB39iBREYoZCJXMRbAoXTtc4EaTW/a1BMuo4l5EGCpmFscf9pkbwQT5RCaMbZtlAaVpr7ad8K+RbgKtwjDzdBeySX96OAP4ycy8+X4NEyEh/T9nQlByCNke5Zx2vRBGfGMPKBPw6E3u4R2Xa2xnX7QKK+5f4Um06ovPwekgOPG6O1BkCAv3UuZlAyVlMRHnS8xqvndlIUmrXh92RkEtjdwDMKvevgytPxM5DNTRLZJgTzl7vyfrPydB350A9DCZMrxa3UjcJpsIoufQoOgGFtSXyEEevkTEBy2SzNFl1z5GXGxRJ7kWsGdeIfr5PXpWRSZSyc5kMs4uXdRaAjHwkSqEYuacHjcU4qzRB+7ccnJHpKqmdmEc0gEGiAXAOC+mhHr2AUPi9wijGTkAVX1UvsvUbNEymi6w19l4Cnyh6XFg5G8DNcfsuyOifrAM9r0+QQ4TPuVEJsASWpI0pbzc+XPE76F/DatuNWLJOcv43wZ18zxJSKf84AFuNl6y6xVcXtuuazGAP19IU8dme8t59nbHL2iZ8u19/l6eBCb9uhrLi5KUdQt3Osn0IbjHTSMp5eGFV1B8o1D5IzkZlvWby471TIhwisJlOhuO53dqeq2vVidL1EX7GCY2skSAoNJ8eZs84TjtEfZE7NdZ0FvdSZz6N6ifMGX/3Q129a82d5SKImrGxQbXwDbL0XyQTRRs2G69UavXG/JL1I2+BYj9uIW/P/xC5LFzqfNWerXn8YwvQQnn2a8YFwpawm3wVDpKQyTMYGDLnNKcsd54CWfPsLPsKQxxo3MeYAsTb8obPsgA2RocCX3xqPgfED16U+WF/paoOLFGOJH2dyZ3YarWTE3Bs2q/8CCw6IJx14aYbdHSrInXuYwjefNljSZRiFrIFZxvcQwrO4ff81/coHiiz+9Muk9wK8rp7AYwFTVJ3PViM3jS+0qgn0uqHRxCB64oHUo5W7Z+8Wo8eR3l+eVN8wOGT/PuY4JWAUUem39eRo1v5zJKvyYBPxqwtfQLHsM3IRDuXLVoy9AMBL4/urTFGXlc8UmlthM7uQsLD/XuvEZ4aG/bMsTmvgHzdObPLHEG9cYU744mca9yxvKynfltyYM/3f/MF/ewscQCXpE9f9ONJCizCZAfQwg8kE6DZAVv36NLnYvJA40NV336qZzHv+4u1J87dCQ8U2hcl1O1+VxoUK941RVmD+ZL+qklz59We+nmagNZhjh+Ij/r1zw82yat9Gr2oRaVL';const _IH='388d644e28380bfc232bae8dd2868e3055b1452b1e6d5bfbf7b970a6cfccd667';let _src;

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
