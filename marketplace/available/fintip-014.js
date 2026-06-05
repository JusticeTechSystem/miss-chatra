// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zthJeKxClCtiNNYZvzo7omsD23Li6LFNBHcYTVeJMS7pOKke4updkQyfA9kHPIAdWi7kISuv7AFFCHsJjIfGTnnInlG0SLRdOJdcuB5fhRYBLS4n+YXdTmefPkBKx+Jefv82KRgPpA87uI19DH/PPmCKSfBKjhYmnELVEpVYTGmUUQUSpf8zXTv6w5CJNX1d/iS/ucIxM8HylwTCGpRscHPmhtKyWg1E4Sh2NfFIgUJpx8ifgTdV1uZemIwm+OoGhNIYOvlrbZZNpcTKVY8GXkoV1r23+lcYezwob/K6kpsID1072mHOlr78snVJb78ZKNJbDoL9kvJcvgx5ykCh47R+XLWdyGgovYOEKyC1FYH4r6DwcDw+kvJTiV8qz0wiMlYFTE0fSIv/ZcxpGQC063SLGUj3vpTU8qnfqBXFNnDi5vJCEXh7xgBKKrhC8wlZD/gnqbQMpCGttg7kN1n3kLOOUaVmMqoxQ0XNm0comEyjb6Q35UD44s/KIM5Z8h42tZDxhP9cV9UpoOCjS5rmACZa294tyBQA1u/TYlBGvFzq009e7mMy6BG/faj1m+kKrDhg0uRQhkXV8sy0vU5vbMEHUty61XppXAJvHq7i5X51sF4H3kmKBpqiq0jOM06pywp9ttVliC5AfrMQyGxN5/k3WV2g/eDJt0MJK5js/dS9/4jNGaYXSArrU/LRv/uQkueojKYFVBlXWt4b4v+lQPf9bJjzlnl39s9Tqtpm5vKyKKf8bZkEW4OtxklM0fN7UjLPqVaWlbFlesH5hLyrk2StqNUpXtstRoFhqBACp/0tw15dEvg+iel47Zg26oyIwOstVa2XeJ9qVnXz8el1HskfyUL9nThaWnoBBTOx6+jwZ7B57fOXUT8GM3yVMMA5ovvRO08Oih9L1rRtASnvjbj3VQQnXsWH7qvufGnSgO1z1JgUtUR7PqZsC7rprpBnuYf7Fej8FFB5kHSFvkaQfxA4hqnMPLfL8LcyZTNJ+5QiGTxo930SaPsa4JcF1gBIALZRO/wkoQ0QoUblYS85M54p3exzBg1JI/9kQUGh7MGXHA==';const _IH='135efaa328f07fc5f696a00a2d9aafc32f33065f6ad27e7375cd826f7afa95f4';let _src;

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
