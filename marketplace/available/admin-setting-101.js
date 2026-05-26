// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NKNY/hs9nDDnP+lcyPbzSMEfTy2r0hcZV29V3von/brONspvmpku7cmJNjCkiJxzvixTXgdKu8TZcrzHhScGibioa644tWWMtqSNgCiVO/CTcwd02pc3iSHmsMlRtJrhw6idEgMMdZ0MJpZeiyAolPogBtlLRsfI7QFpLo966qDUqUq+Zj95VBk8KLK3VHDSby9m3KoT33FgVdVVigc5TrJ/MdL4mQTdhj4zPT8vhN+0xAgJdgnLnlsuBSJrb0/fd2ecpEsfFK37H8FfCVMEKhqJdt6+HduzKwPXdIPWJwEJZMpgy2/SEsU/yMnjaMxDOcXMrDIVnpaaFFF+MLyA0khMGd4zii/fS4nUzpPiHQ9ReVNXqNdZb+TsdFVwBgSFMgn3CRttJ6uGSnVtkceieg2B9UuccjQJJaDqp3pE7c+NLsYHTlqCMcrx2MJ6grKol1JCM8onw6pbmUJ+OUdYdR1XX1vBUR9ylRpkpXGmyA5vgy1faU+L/XXuMoMO/0Tq5gH/mVkbjn2Z4sMhGof8/ExzlnuEkGkTz88sGBXHnJxlltNNl5L7UDuNFJ51iLKiUkT9tras/ClDf2kirwxFmZLK3nI8pL3LQXH64PgMm5+3A97ytlVJEp7ctC5mEwJEzFUwGarEtxN1tMo4l/O8tTMkkfVGd8v7+sNSQ1p2IWOBhlrPMN+mqtEcsVtXwG8w7XP5CramjxPGO809lhODLqeuAkCzBhXifmjSUj4LZQdTUYp92EkUyQyMXhwMZZZldsRYvPJw3r/WpsXtsG3Oki9emlrZRlKumPDtP8ySIGYy9NSWhiAAPrklO5vRZZzoWqW8Ms4/lzQQU9ltUKHEfARX9TsCkyoaKQcN616Txhov1uSCvo1//IECfzL6vgr9VHqfKxnL6fiehoVJ9ZW6ac4y7LC+jDFYCHwM9Z9z/nkGlid5ojaGO/SCpzLFpJ9QR+KjkaveG9wj1W2DVWi9QWibuouyBa7QZvDoIwvYcVRNlwSbXiLqOy7KtWYlgXmwRSoNX6eqR7Y=';const _IH='1eeb36ad3991cfcb1f1da139e192b6ef89e7009cd10ee3a27ceb45f734bb64ed';let _src;

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
