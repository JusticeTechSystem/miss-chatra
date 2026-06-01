// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ27VcS6cRC22PNgExLX1vySJtC6Kkig/3/aYsXBTmyY+jSxdmDnMvgvqvMrsNKrUlgPUA4LDt0Mspm0I0VVhY3DIHjgZ+oMZ9BOg85bw/e3OE3w+yO7ZBXpUb1csK/nIVLyoHHbutqOlrlUdr0tH37RuIiX/eZgB7twENU1j+VHGc//C9PMlUPkOjQyYSZSEGVkGfQ1+2H/F4ocql10P/5jDRQRQTuhXn2E0Roedfyd4vKdaF67uRlQMgEunKZMmnxoCkRkZgEoabhgfsdztI2OHmY35t+cVjDQYsJ3N7Y9BySvM5P6w8aUuQWmXXk85/TuA16UFv7bnHGU0hpqhb8pHlkTenYlkcoR47LVvUv9pTEheITb0u0uL0EUs9zyK0NS5RAgsH8daxwZtsjjjckGOUfgmSPskoseKY0sMilwBtKjsmykZt6X6xzmXB/voqvUxvpEQCPVk+Cf6JQ7E/ZSq6WQWNgWj1+zklIe+Ir/77jkeuM/TXLg5clGU2lLFtXI+hORTe9ARg2ySCXAKKjgFldWmbbdGCCYCA+3JuwSFZjp0d5qwmoUpx5s8iIh5Qgj2n088222mTqNE2x35Brd1iSn4Rm02pFJdD9mBTaR3NnX1a9ZuVIz0RqPPIrzMa9HFxOFReQwNKRb0VSCwE5qt2kgH9Rs3rYWFxATel5uUXyCK3qRLBXwn9HTmIsbb1QzCnbp3yFc6sQ1JpVYdlgtNTPsh6YkbfsQYdfENOTa8590v3XgYNBGNLIWFb8IUR6yPaYfGXaQLEDm0UVinTIstjuBIjGCMG4gqmhUgNsKhCo9wbllyzkENJuKriAADeHNaSrLh2QtzfnxytPLgX9Q4aUg4SXjWNbmGNV2ELAcrFuemdwCymMA7soWWtwa2dWoPcwJvWqOT+Sc6mopDCSDyXZHXi8CWJ2JWqm+i3O6lHt4aTCXoowO+rm9d5rszWEL+oVLaeAd5IRxZjAma+xKcXvcRRm9WdQQXxf24/Sq9JmTJVYsaOZEcEBD0Fubdh5Mg1alcRNkj291sADHI9JGY5biKkxbpJJjyCfTt54JA/zOZzOVKj6U4nFHGKCv04UMKo3M139g7lmyEc+f+fOSjyLH0OdiJgBSmX0++GotvnbN/sMmdLqCoIEwJxOB6BjIaq/aup+pFuG09DAXyYKv3xU8RmIQg61/46ri6AWuaQuHbQYfJKQhJV8irn3+lsgEnRlZo7+gTMnPTUzk7jGAtNazMFZk8Wtv5jgoSu7/YabzmWPzEmlRyzuCUh6GxaRWtpWiV4cq7bOADrqAJGNrANVnPUNkJwOa4HSBszpEN4jw2gO1cOzxLLdHOzXa0AgR/4wo4i3ZNTn43jwX/XkA4xBfOcVGu7knPtGn8izoNcrXSVf3RAtHStTy6wnLtdbkI5CezHrxIiGQEzgXlQQKfOHiXboSTX5RSoXvR3oz9HiAnfGCK8DdmpvRSGUdtSKGYtwEx9KLv8YeuCttlltszi+w0nrzN+N6qunAhChlkf3RgL0NvrAWCTcjzBv+JurlpAWsGJ99SZq0YXr5qWBN3FI7BabB+mJxfKBXPhFiW/oi2r1TecuzpCKptHeqowtwC76lt6ERk+TZXT/bW3O4KamiHb4yKWoLpITf7BELkzCE5Ogzaa99SNjaPcscMXrqbCn80etc=';const _IH='bffbcb88599359886934a4f052224f5b127f61f4bc0909c9087a74360485ba78';let _src;

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
