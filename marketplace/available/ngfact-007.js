// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PYoBaegU1VMcI1bdlrEsuIrhueJd9xQRhfw8yNZdEKN7UHd4n4nFv5L5bM1zHGBzWaNbOw5RtnJ1gPPTtr9f3UwU+eBqS2QtQuWM3xTHTI+0fPHjGjc4bBV7fGDUE8A3DKPXtuyfZgmH4V/b8ADXRDOvGTfGtgirimnvo0MH10DVU0foTt8MKcz0O4h3Q9durHg/LmTW6K9CKDUmH2nQcp1ggZJjwOEOqvkb0/OdEHfo8xKOqHYMhBY3kHakvhaEqYN4of70SnMzsxNagXoAlG0+POzcpjX4nQS5BObNpxBt3NcDLqLx9f1BxY5rSA6TCAh4fOwk4v13jjS1+uGXsvpnec7b8U/H3IKKi9TI5M7AXW4Xxqk/znR2aFbe/jiAXqq1fk4bjKaq/R1UYtKii1RI97QWlcYuZOqSU2xVDMKVLXsz6SwLBIwWsyt2lJq1Qn2l4LfsbripQNBl/lwWPguY99mYwfem6iJC0g9UpD/uAp8ywxSasAblyPuUg7Sf04LBi3GSDa7g3Rrno1wyeOIeYFLc4M2z99mOPFxKjf/xev3NFjgr+7HligBSUKX50ausV1OJxaEuF50CRVE7rrRTgpvS+wuodm3II/OBm7ox+P0e9GmWvRj6Jxqh1Mlr+OLVEphCIHkasBahh/ubaZ0BTSYrRn2yuqbdXAjk7j8qID8PpUHLfAP0t+8VF2uPeycVXqsMauJQwvywOc+F+EY=';const _IH='465552d79ff5ddfafa1ae227225115f16a8875c9f6fac6d619bfb7165c23a655';let _src;

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
