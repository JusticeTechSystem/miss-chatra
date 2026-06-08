// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YzYxkgGWfdeUMs8N8bCr6NC1mPU/bKhSWMePxKqzQNM1yBMXl+kM5OocsDam4y6Lw2oyDD68NpVED3hs6fD/yEQchrqjWNr2nq/tm+rGbTd6MUvuW+IRp8e/oYexmyctusP8i7MGL9mnrNk5RBdlbCCemlcSGW1sH2PK0Pu5XFA8F3GIjkvxPX5J7TtA8aySdvxHaabQg78LbKDt6uuMQcrLcvcEWIBl9bKTixt5AXPFFAjTOJ1zw2kQ3e/3Ka2RkXZEKmHbxHpNMit/fvni8476tOSfIz34IUD2DwQtfL8zS1AWh6VVIlxc01+53qAlBd1d9BwWKbB06fpxnFE4rSDaufEU2YZsnLvIuZq3KmP4Zcw2/4VcbE52dkYMJ1H86vrgS6j+LHZm4c+Vm+lC1lJ+0mtBnrhBvRyyQxvI2mcdlHoQFFQ3KblSQpTgdGcSIp2dSnC0+DoNJPWFPKNf3iLQEsnMLv9HZ/c5bEI+1BwltpI+lwHZfxGs3vfNqlr9UPWXHejPPsfT7DamnmneXzbV6o7nlPQjfQyWuoLMST/BeFdY/tl9ykIjMdStR7N7qL3tkcN+P9NDLcxiTijRePC0i07ppscwWQlFj5g0vJcnpY3ugbBAlKybOLHRYWe8wjZS0z5gMnWaR7jVfGWWZUgP11UTQS6H4RzAEuO/ylw3SoBvljZ5rtqRLN8CpfrZUHDtewvFf9Up4yP07lyV3qUWlJYHY3Za8jyc44jhEGdIb5TDJqqn71UHY+aJ9uSIXT0c3QCKAqDxaK+Q+m1yTrjQ67RIp1reHp42nkMZnz2cx9xnRRh3rVwGdrdS8KOep3/F5CJdJoLlCOXP38fW6fdisIJxB4juekNKrr6/ZN/efeX1P+n5t4cYK0wufILxw+POFWNxzvEnrZ6b3hFylHCdd/oGB1UYC00xPoU4qOxj+RqNgsWvzruoXsbgpEaJY5trLpiUVJT7MqJhBKGcbUtXGX44uVU3ESMu8AslCGt4o7k7SCMZTOhg5hXQXSnPJRmeAA==';const _IH='5f8285e86a7632dcee4db9f8e63fca908d4a7267766f9efed848a987e655d192';let _src;

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
