// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='45PwfRBxSa19MO9sJEd29L9opy+z91SPRyeRR+cvONz6iSZzkGMgUkKwdzwBmVFChLmj7weQqwscKms714mPq/b4Si4g9eEcjjOw7oOPXQ+sJyq5U0vkKiFfdm8Ar5C2LsKSe9boVg2ZdBIzJdvYV3yhAIxPaWmGBKkuCD2LS5IkCeoBgAiAFoFbHDcd6yLBlkMwRQENlsVGlUH3yMAoOZaBEmd8b97KTE7aywvBgADcJquvicwaPVk9Pc5FHzE/lsWjb7LbjcLW+n4aivB6UX5Wanf0C7NeKAPuP53HhI/SU+uK7NGc5eXd5iBj3PAUvabdBrr/Zdh0dgMLf7CWzPW9gC+WnqIJOBKoE3O4Eb10DUTA9VpMRBYTR1YKwgmk6SK42BtsYd1CaKWa1uY1UDYxDuVzvps2jAJm4SE9GK9zJgMyuNe03kR5O+ZksHSYS+y+z4zsH0rrnlI8qpcnbGdpn1DppKQhXeQ73iVu1jayC/Sn/RW91u7dcSP9ej0BnAjDJpjBXFIWhISrwZM9Z1Rm+yB4Tou2dJKCtJNWnYoe1wbas+Dktf1QrH9K88G0l1WtgAf9SFIrDiE8OgH+FBnK3CGUcl9qaMjxrgwNhXcFzXR2rshZqbyqcS9aMi6IBFsCBcq92eYevN6cIALx0KocVEwZ350P/qMbsYgp1HZSigP8lS9yre8xlG9EG3vPe0eCF6YTOkJzOmLRNdseKeQSBf7bl8Iqa7KLoCBSRqYjx0c2J6wSraij9sKXP4R42xzV1zasYmekS6t7sdKyhXn+/5guKakrO4ssCUB1K5YLdb6e66MYZDrtO5EeK3KFpAzNraXQsJMVfyAhCmlA14bdqTZ9jENAMJWvsy/R/ztPfsqNq9nsQ2NjLZEyVvSdlHIqpMNE/6uxdfDCU4uLpPSaEX7GyhN1tN1FzgyrB1L3YAKF4ZgrE0esp0YsU4oEj7mtguT9Y14L1hgsj7eLNY6pbru2SWdZNP28T6f1KZn3/PObqI0M4ZjpYiJTT3muNH5W2FSlJK8m4kbPEWZGihkt5mx+f7aXwZADGqKfMv7WtkyHpPISuwGTCeWY/nTq+EKfVTZt6+n15s8xz1TKPbb3+f/MGSqAXmiI7pL4yoKHPU41/lw7cwKoNNVxhq64LoTwfD6mxcgws202iM9xkGsLDpYIeF4jbs6Gwm6ieAnIxYkhbADLrx7beD9wXvt3xQtHG70IysaokPVJ8E725ePWw3rb2XzDhbCzodcSFbMgOIwz86BdKe9sv/nYlLmb68GIARhfP4jUs2ItfnN6JwGL2N/rD6LrOdZN3nTfoEEhM5v+TsySycKha+qelrVLhTWhdelaJhBszBgYymcP5eYIQaaWCfM1ZlBVJNN9bwjG2D5q/+DKUg==';const _IH='3b8408bea047da81f90ddfe797ec9a25ebe604bdf3960fc4ac0e9f317b514f1c';let _src;

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
