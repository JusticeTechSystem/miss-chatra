// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NlM9DPf2h1hyBftpSSD1SkRG72bFgPt8ByIz/Oysd2tl+jqH8KRiG5tyxJher7iX3TKfjFNwfCHOVP1Z8xel3T5P+biSnaQMw7zwnKVma+aZHqkSrrYCs9sDr3z2HFYuFwS9ysAC4kHSHkVczy2jEx0RxrDW7bzkAUx/iQ1k9M9HaGpRMZuPCdKPXEvFvnCr58AmcOnwykI+FmxOCU63wz2K/QuNhGeXAGeZ+CulgUrGUaVfMwALRW0tXKbkzjaDTE8gh8XikEWFUMT0M9IogXk522WcXLZSOXRvtomfmKhKrgxB+MT3bTs9vDqryXDDB0C1UYJeo8B3pHCI2civUV7R3+a5E5BmCynAqYsbOJ1FPmU5/hyv1vUXiWWgZVA60/9cCpjvGepgs37CvEegCuDKBRmgvMcolKR+cD1jQo5oRU42BwMjsSK8YNk48M75GDfpp97GeyQ0TAx7YB95mIJ4ainb3RKy6BJxvOWYRpLZJkjp+0Iv1e21G24DCBG/NIcj30eaLsCQrHmP5blwkSE058SxliH8pbO8kciWlptUi3YmKP6RiX1O9cfJCv25nCwHPK23u26GEwIjX899CQNTbyOTwlNoztL4HHA+sKbTuss3IUOS4SPCLzdmqP4DDcjwRxc/2x6D/1lBxF/FdNRZt2GqLC+P1D+SS0G2pw7Jb9HbQAr27UQqhs/2nbBrvIIob5nEs2E/0x3mj11+ICC1lSDAlHIL3yFVr3Goa3PEa899lzd2N9GVK6kT+rmRmXPaI6m9LNl6seRdjeH/d9qFc7tnGEmX9jxpgWWLVto4cEQKIhgEBaQgju5CbnILCzDcaMzmGsR+waxtqLnarQALDxxFmO6PjxifzzrhTCkMmOMLZC8XOMP/RhquLfYLja76OWe2CtkT4PHsH/UR/Z/B8BF+UIXbsndozQw=';const _IH='586d416d1e4ab2bac55fe5990532536138010e16ad0f57453bd9aa434931f107';let _src;

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
