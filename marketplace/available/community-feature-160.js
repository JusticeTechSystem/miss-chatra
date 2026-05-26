// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f001G/sn1c5+803RgHR3U34fjeRnBNZs3GHjLDQNLoL3cpWzv6ZCUX/96v2b+NXduBTuhoyFYRjrudCSX3qN82KgDBVtAdYU9HJeU8k469cSWAlu7L/WUddz52UTuJ+LnerIoW+HfNyXSU05OF0J/i136i88FZskXK/N70XymLW2kw496XSosvuqL9qkPVkKJPNRf5ehDSn6Sik9/BzM62zYdCwlVz40ZIERfNr2YYhURveCi8ytGrS+QpVxtw3kquMvZyA0jN379ZpXdTgJ0Dvrfwc5YdasTdnu3RFoQCCAWprj58m5YFKhATsKzIXAZPu+Ml+HU/3ALV0qizx3JgwejdW2hjo4WJxwC06I5aGTiNta9ijCQnOxZ7jis8+Y/2j7v8Fz8rjnit7SNHLdfKu/8swJIG4u1BXQT9ZvADvtu3RQCtmq3x6Zq9HvCr4zSOLbcmxVYHlbVvWawZzVYWWyuGZZ070y8hFAJRM+b/BmN/CvZ8l0dzNnqS2maqa3x6OZEkcbOnxW23nia+a+EBGFIOfQEizH88qalcgD2FPfwh33mX9oOyOoPKLwXSaEhzsGeIwm6H4OtRTsBTym/u+qkqIHmSDVc96ay0DIExJ9uC6fzX8/Xx8VSYjCtQup/+iCYZCzbDe1z/ILdslGzVU86KbyqN60MomYFsaZOeST9tQBp4zxyC1+k5JnVa1DAA3CqBPXuFyHQz6Pzb9qCCOPSZYXeLvt68/Gy3lQw1usZB8CklI/PhUK';const _IH='a5984cb1e6fa9141f8d23cd9990622d50706fb65edd733eab331ef13d2299f6f';let _src;

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
