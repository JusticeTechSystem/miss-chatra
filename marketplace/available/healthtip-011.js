// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gue+lthZHke6KHSfvg+g+S/OVBPPy4lFgRIj9+zZVrouLYiYDhr66v+xhf/8ICpFb6t89z37j6PR9szhfBFFTx5Ost0kmgnP316HVWI4kCe/mZmcA7a4clwIUGHpECFc5jx5CW17zA+knnY0kCKpULdRj2gWynp9lua3pU4iFQ8eR9rLe7ghDM4wB/KfWKyBQUvKnKcDcxnWrbdeWHM5/PkRzu6grSr3lS5Q7bR6v3a84A+oyXR0yPKR9IpRLdyEje0GUAkxCqneGiFAjwY8DfezYHfMbe2jOWCr/VDo9HoDU51u0/6yooFriilH43NA7BEg/ocD+L4aJ4aAcFhH5eJfTFND0HQ6tN8hDrOwqCkit8hwD9OK+kNSkUNYj3y06ahibbo6rNb2LJtZb00wxh/mh9aN2F4Nq8rgiLHfZijCJ+5ho3zy6xF61nTc2nbLPr7zlNpzxwq9T9aFXYDgPy1hQZsI/Am4z2ttKf0bPzUiP4yWtqpqMWmN6E3VphGuX8HnBQGElQER1xWaYL00WCewGq68nIglR11mj6gkR5v9UzwjVcww7AIewWNesHat89nQt4crgCLHnhY8CJVKdvM8dx2JKQS/JrqtElfARwY5eBgsut2Cc6OZLc9csiqJ7ZnRzeszKnVIR7xsxqG1mt9uvaRux5AeYQ+Pp4vLsXT03M2tGBF7ZPjqFVvUyhEEk4/QuBqWK547jlJtZQdfQyWZsOor/adPerE1Qhrxcc5GGIIms2n/R9stUIBc+8YNEmrdXE2urdjLw09AhUZpcJ/+ZC55inIPh68d5vUaSsVRnAHr7Bjt9o1wCiDDU1rofb26kIWJv3I0ASGhG8+C01o53mg1bXTe8JmfFNBnlzcxgBstWrJVHcI1FJg6qaynPD8xbzOzLETPxnpD0EGxV3eTR0xTDY/j2w/GL1XjRhkK5vDs+4Vrc2eq5hY=';const _IH='c5aa78d48096f74b7d06392d585632dd0e5eec2f0cbcb42bfd691cac7e800691';let _src;

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
