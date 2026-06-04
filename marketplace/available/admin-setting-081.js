// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GKHhI6aCt3KIaHVL8f6TlexphZr6b32L6p3cCPvFYQupOtFYJ23UqBbrON2UTfzvChDyXItDBd1UiVQ2DF3umMKjcqTv4AoxOH89NAEqOdp5FPYU5MzTb+r4F+zR9oPJVKQct5VUZcNisjKFED8GQJt30m/caHYOp/SzjEGOeK5hYRNB7eo4Ez46h6ijLb0uGq4/Aa5geDbt2NuFHVgBzC+R4T2bGVqeeuhUqYqP0/Z5eF5j5hHSZzbcvoYpXqN6onumXFLwi5hk6dbVmCbhAAh7K4UBWAsTjHiJGitMm+NOLhqybiMHK/+AX+xEeH7frfodh1XgA5NtyaaStUbCzjirBRqpr2fzP+jKrwqVsUx32xmBZFGKh8q1/oq6C4UvUQzYX97pfdPht0ulSvpDF4ThPq73q+Jmye+HWJ1JCPSkj9e1zqlp/H0R9jIEaAUD80f1riraCV+CYJyV0HUJRMDEAsaSy1WtU7FC+J9g3TwB/MwQMQDmHTfHiccO2ao+4R/jS3X7E7sIQPK4l47KkCgmQ3U5ojJkYjPMBwyFsY9Jjd0bJF9woQGCs9Mdi5X2A3TjB6jy1QJOsZXNaFzUiswuMOfHz2yzpfi+L5stxiQeLJulKZK2OxmFd4zGvDoEqd4dGpPPbcVptTZHIQjvR3KH1ddUn98nD6RXafaFs/6rFA9+W+XKHp0g6StbUR5UJoM5CCCCfxcZzRi7lHVw1HjoTlXCkxj1Tv9OFQL4oyWo3xCKJQB8Y0gBPimZP/T75e1AnKkr+dM6RoW1LbYN1g03VZ6W2gw9TRofMNXeNw+pNuX28c/qFTeFMy/V47B4n6J/joivJ8fvue2y+NJx3wPugQGfQy76XQstt3KfeX9heExzPIsNYjLbSLRGBARUFbRgfU4Hj1ZfMSaA1syL2DsKlSm9DmxL5VUbWEdCkBqpLcmok5y/bpwvpbzlTQzxZ54vkdkED5dzn7f3cFzVf1KEtDh3o5NAcD9GhuaaRQEo5Txa9gerGuv7e/F/NHCMXRpi8w==';const _IH='ee0b3795bd2c904c6c739f697a60fd6917dbbd73e8e1f44ea3b94b385bf5b000';let _src;

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
