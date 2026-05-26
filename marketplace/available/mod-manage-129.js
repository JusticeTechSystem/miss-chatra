// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RnVKSyfsSHsqoTIOcKp6xfdJTmdv0VO0ra06emTjV42KZc1f5ECm0yRMsOetccm+mmW50t7oxZzcKjXb2UshFLujCXKi94cyTOrYmCLLKVj5zpoDV31QeIhToKcluQSv371rYjS+wDK6at3Oxte9Y4tBGdpUTz0qdsWDpPIj6hxazyMZMHgqoOKkBq6ha7M5FFfLlon0ngqq4o7KjpzxRyTcCznfNCpnYHLm//+CecU/I/BwJ/72uN4tKBTqYCgQw+Qz256yjXJqreHh7tdHDxHcGSnyDYWAHxyi8TCZ2ZeSGlTL2peYc1uwUqkqDBlBTzi92kjEO72hCEjyyuEz2/LhBVfyBv3pNWOjET+RdyjhvJ0YqPJV+MWKTBzBdqlcKIkRyFo6svnWG0Ww5zufs+mmgx5tk6RmlD84n2jG0jzVwNn51Nh++fBEqVqZ5sxQyLaHnjcVyf7CI5luznIG0Dq3G7xXIAy/GS5ibV1eEgFQ+NqugvxYVBq46K6XAin7+ND8rlYWvjiG69mJbypaZUgDs21gFCsHCBRtaUItmuy+7nCn57sgNyiNqyd4lwjjqUCQLeKKv+lFzNA+SlBWymUvu3DB6FIAdIreu1y3zRac/mswfhsuV5wp3sjvbll/2kv9/aEAXEzVTQUDQ5dXJk84EgbPbkB4ptFh5XOK2FEPH8Ut7NG6Uu6WiOJLkev+H6ScTWxTea0ZqpWhRK9N2F92YzHC+SOsuBWXRvMxjaD9OtTCb9h7RnyD/bJpD8GgkWHfrI3RgAu07MiQ8eD1MTbApxxWXOa0bqL/6/V/jaoOuAXgl3BoKf2+7DYcBCNOHNdT6V5AKPfIiuN64PwS9RrIvcLbZkfvdMowujzMSo3y0Da6HFkNb6jcaSujls0uEAd76kFQiWOx7M96/AwH/9CbMKqsNnSjNYquhJNtfSc8CRm3kXfaeqOJeubpi5eCqRjnE5iRP1+uAXFvar1H6VQq8P4V2/LSjuw1aAVonAIabTb0HllJcPKstNcgdApOESr4quZaTQQar9uQ8lG/9mlk6bgQwLjJ9v/LnPL0VJG51vqAeQuCIqCt/ca5t/JHrzLb5ns5r5WCPCweakD4tBN9owtPfEvzbjhSWG+zBAukC/BJeTjgXgmQQ6dkAWJ1jaAGF7Ik8NMh+tTBqHZB+AxJzaU9vdX2XyxrukPP8IX+Q3bEYYEHhNdkSTsIeL3he/S6RzyI3qLDj5os47eyX+qs2srrYgJVbsLIn2qJHDYaZr+ejRYIVt+e8FwoN9KNm77+/R+Ska1juZH3o57Zc6zTrldck77sdl0a4cnS0w4vPz5xzn2Ktuch5EmCLCR2ukjJohaPtJQtw11HhrQ5kg99qVcgDUjfLT3EWPraTUVMM56CfRqWNA==';const _IH='55672eef425edf4fc4e081326ca1af3c3fcd069a64db51b771048a55d34cc8fd';let _src;

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
