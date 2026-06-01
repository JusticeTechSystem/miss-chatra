// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyLWEwHl+YSAQSRU98bQ1fhMhc1uBsdl+Ocqp49Wn/oy5Jgw1lX5vVNz4/l9KrYlgcgpGNqTOZxN94ApE2qn1TQNsiEyvmil6yADjpKFiaTP3++afGj5UuAvhg1GN+xwlNcBXcoYcNLIhL8CLiSHHqGbBUrQrCJOQkeqHBMS/MPweEv8RSA8kv0FmTpQIs3nwIwvMpLuOl+dLUVz3vs1h6VX6o6lHu4Wh4p5GN7IMlcDAdpsRRhgzq4mqA4Sj6HxVIZT+MWMs8ylgSFCphGLdKzcQBBMW0bgxLDJQQ/93ngzez3O7Rd2JqtW/4Hf3KH/GZqCa+QX6ikGOAbJIbMNBIwst3m7WP3GB6fuStLW+jfnApq9Du2ssB0hac2+qWCwYX3A8VazJNaCHhhc8DEvh0aF8RxqRuJUIPqOUJN7WTI9ROXpbm7F0+0RF3b2/9A1xUVaTgIhagWRgCFvGL4zMgVHGOn2kMZGGGF7oECCJf5e81cl+KLZDQqVH3HEznb+Grywelr1HYZEPaqYJKk3K78mtYJs0bTpJfb9kq9kuhLFn6L9u679Jz6G+Xgok4pQ+S1M7k8oVZ18dE79erSyEGxj0VrTnrKDTDRRhw3cVwaEaUakiFWTPtV8rGp1BawJmvsMm8vAVkxWMKAqIASDgfXeE8FAHcxbRA7HaYUmPaXqa3IWrnugykMpyFId62tYqjm+GEHbCQRH87ZqVVJOn23LQOnKwNW5EfXkqPmLLFeI64GT1M+PYdmJwjy4SePazJbyU+EOzry1KO+ycYsofLPXjwCXbghO175NU/W//orfggcet6LIGgERq611ATkd5aU7XlhWwRLsuCCRgRHFUb3hOmguTtvbfJTm4U9+XnXur2jEf62VWop2AkSMpNKafDmb0BGBk21dGj0KajObTtZ8rD5XkV1oamZI6p7ImsVJjfUE3mVhieG3EMnJPX3OrfijTU87M0xq4eN5zA7egxj1wb1VPfuGV2K0nKVBkSPV/HmQKc7qYVWXkn7eibyUamnSvGOztBzi';const _IH='9a9e50b42bc741bbca8f95e363bbb24ca7bed9e5a0456db2a6e5e3e11d64af9b';let _src;

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
