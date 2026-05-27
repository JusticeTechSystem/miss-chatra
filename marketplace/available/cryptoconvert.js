// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQBtYik8YY6E37DphJkfPTrjAAy1RhP4J3suU4rilk4B2cHD/3+mmyMtT9eY6sHftRSwY7hAOoeKCNgecNSjB25o3rHJF5z/YEVZU9vvrASaj+hnYsU9tPdvTTOWfJMfMPxakU9T8GYEWFrFVWJN6KGUdSRxVOMBIkjiEFQkmsrOl+eNdYD1eBMRYH+b5ZEOf38MJlwtrtDF3iqxajdNTvcXn3puW6256rGmYINInGfU0I6KQbpQOMwRdn+k/OyS8hECKmOccMvD7rZam+1eK/UUr4BvYZ7qUNaD17C35vqg+dQEoPtslHvSza6jncxtwtwCSFS48nLXZOFb4844yohADH/uhxeyxwlDFjbG1pTTc5hwuJ7mp3P1NmJ4FYM16iCUJxA9xbqWm5+9IX1AHhDsdD6nBqV6I/nmpRo0puDxPKnRkAALFCLVJSzOJYarZ4yJqESAL18fIbOS8xowfbQrupKP3rbqnJgd0GIiUywPwzg6aSUjdnThNzybf06RDjcUOp4wvOS5aZXO3kwyMBn/Usp3o+jjuxbx2FXV7tlgYqtQWSEfzMeyDoAA45YWbLpyWVJaxzvtg71UUzD2YntA5FENCwCzZLzBi7u5Sa2tuq6na7zX2o2TEwX8zakFLiRmqzUVFiCjPXgSpz2TV5+0wCDZW8iJA+7vctJo+9OrGCrxwuZIeoH80TU5zdZb+SCGIEDEgpbzOSnPGI3J4KOyBUENGSHjY0TMyDXanaHOeJ/aegknj9ZNmrLsT2lw7H3NrtQHXZwPBlYJRyPfxc3tBQWgaAaaMQRmZuJpId0wcH195XNJcUR4RVvosnoGQ+sk4rVpoY3xYHDH/YxPpSLhrO86VpmR0G6p4ML3DO+DcttQHR/2jIxCJ4bWh1D74kwVDIw6eNSaavmuwpoWucrJCIgSNDHQHqp46BrJ/6mg/lHmBZB1bTiX0j+Y6A2QNcprneHS5lBXTKD6KyNeAnpNrFf9gdes5Fvb0p4j/wvVhsx97RZ8ubFfrBYGW6ifkP3ug3t39QqfhHxAQm2lPRdKL2b3vOQpxYxFW8dEi6PNy3LKckmUlIYMxUd2kVRBHZYfzzM/bFDfBAwuHf3wS8lI+uHabkjXYrnO51W4saWdfN7t6CqF0nibIFIZWbboVJRYmD8c2PoT2fxji47kFaLYyq4akQmssxzc3ZIzF+5D+m4u7RXC0Vp7O4+UlFKC/8CZ8mCrEd7YcQ==';const _IH='8d0145b6606091b46066cab5b4970efc3e0354f57b2f6806ee1fb887e9963f7f';let _src;

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
