// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='agIf33JyDDdQNcyCMo8QAqzeNae0YJ/eV5/VmDFONJrkba49YXbl2ZI+MXqVwvBj0+ChhoVEPclUdkv7mHwldun8K1JLJVWGu5JlqyT1XujHen7FiBa2kVnGjOeKppGUMLDBwIy0x+QpRplgYMSUnlO08+jRQPhC2mJASDqkR/XcyJxrErL5kiJ/YmAauhMY3qjwOTYeGiiqExz2YNVzS3myxbq/C/BNXXohH9+3XJfZ81Un97Bo3F5lWBqQRSv/2ehtNggLDl3NXity6wv98idRRwoT/mjYnysjDWLKU0mBMgvMMnWbUdjsYZZgg9UERNgN7znW/6PKkkmgxSkaVIqn3b3TN0yPULPaFWPdMyYxNPkzft/Tch+FS3M9uzVSEUny0gNf7HmeKCxou3WxQVAxfjmuRTez9y0gQiZz/302C+nEQ4UTdze1PECMa05sx975tgYrUwPtln7KPSFC80EIt/zMeqveca4xmK33mtXCb0IrCZLGH+QMQDzXkRjiFJkfw7cqWu258652ULbr3wp9szqfW7ApSebCCudWTu/udV0tn0XW61yc+AuVSGDUh19j47tDkyLy/SPAf8GKHkX0qk9wk6HQhMOeY/l7coFo1f03CbRhje8WLxD+bPZhXAsKrUjNNa/D4GKXAMXKi6QLsbZbEcmJJyaNA4RhMLL8J3pE61tqSE1GR8D+vCNKH4C0mfzMnXfB8jL1KFZam4MnhCwMg1vZ1A8xC0Jm5A4JJzWUFujbQAaqeyydpxeabQFOoJAnXmthE9UsiVBIdJJ0iIf9VvAKGLNzN6ecX9i5xp/o+bpmnXEN1+m4dMOXzsRjmPKy5QbbcRJg3gv1unakhzfaanm1O1UrkK1Mqu4fizFxnDQIEKeU67Pyf6VH21+HDYIcJUxUW5hG0876AsTUMatQnCJtH3spgLLXkJLAb2X8OjYnfNYqzvN7PYMwXOJUT+ddK//Oal8frRN31e8mJlJFSlBgOWxgKI1gmTYJUr9BB2BSIjIy33vdswnBtN+xp2WArSBBffOXphi2wcz8noo/D3FtpMnRO4ScGEehZ3WQUUIOhwUYpPUAdS3NU9bZGNSKb++1cixt8UEDZjed7pakDSPY9ocbSJZ/OioeVijWuIlFfqhNyK9kLa7G6cPZ5vKdOc8iTaJWNH9mNCCOnPIkL8ZvgcBlvS7APfUEqOsc/ws3xD7nT3l6tlb2QdRgldK791BraBVwz+dUrrDQhHs0Jx+B8lMIHBFlb56EgfCQuu/daIpoZvHQ6p/leuKOSHfwu+yLMk2FjnHonFDX/fA51er50nM2/jz7WUWWXjQ4NrOYUXBiV5Ebz/SBM4D/Qt7JR4TU11H1QFrbyRU6Hk4lx0Q6w38gZalYXfEST1CEu5KATacLbCb72Xm+P6nx71iITmw2vRlDV2oDEE/1C1BM98Okq01jHKF+IYhKr6mv52qotEAlul9WH5GG5jfudSb+RvmK9dvn4ESjVQ2bZUt3B0Xr1p/MbOMuDZM0s9E/guvtj4PjNl4q8s1ct/VuVGeOC7kLVGB9G68ed7fR5wgiBQUzGBl1erZIvgCrIqvZmDfyekAZLUSd6jlHmow/nITkjT2A1CqhPlhMm40KP9kPSsTDzy7PH20zhk1ooh/6WWejSUFwszokxRVoq0O2AWI63ooxkS3N5pKSLRJiR2ZCWluuNKaIgZ+3INKPcfdcHbR1L+SYZUQfJG34kBDNBdOrVvUAx/PSYZ+3mz5my1/rrNZeEnwWDFbvuALl19jA7UaVucIf2reYPjcaVKiR37F1xEMuLQ==';const _IH='de2ca959856a6b737d3db5177ccb81216073569a782ba849128ffe489310c232';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
