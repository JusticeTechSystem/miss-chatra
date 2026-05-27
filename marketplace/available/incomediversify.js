// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gl4dnL7nBLdwWLpPzktQx1Dc9JhQuvbHqtLmHvnTt9AuaAyINWBsz6LSxCtmOkrZkl6eJ2KVTv5siq+ly90B8AVZu03bTkvG8EhOTHXB1m6buPLX37y95ENR848+KUsZyc6KEZGu5FVX9dep6WpdTSujtc/b8GdI6VE4OUv4GH6hhS1lcYcovpW2N2O+wsOlTucrANno5Jrg2DT+MNnvAgkxkoak2h3dHkEDIgexvETDT+TU7WYUmvK5aloDZpYIwaqqZqRh4etgzZ7eLJD8bZSHcORdY3wafjj16omEnNla7o89JXWripIaM6q9+FB56r07DnADy+TXKTa11fS2FYEs2cBn3vUGgMpyDD501wxB6+z87xuEQHFIp/2cexbmT4rlvFkkhBC72WcBjMMEqt8WGwly1Zofy5N5hxsYGBJx064u5oe0mwU9mr6DcbLzB1X8IKKpwR0pHNxgz2xhEDZZ4SGIzNk6q/d77M2Rm++w47w79QDZwtJ6hs+NKvblKwxHz3mmNFXzbM0gx9NNPZ2ZAWlCvNS7tWD1F3XyTKxb7eGhwTBmA+aVgFtpNVxhO7IVyuI+fLukUrSV/W0+rhXErtaoNpBVNRTxIR1OnJM/DREoB2Xjxtpkl1TiXql0phc0Goo7iUNo7B5L7owsBQMr+VBEqkgCAT5ANCI3d1JX06z4au78nEF/rU5MU0Sd4pJN4B5dPe2fF0lyymP0fALQqVOqELRNxxYK6NyvYf0MIPVxcwu3y5a0OLdS9GD69aaB302RY+lBPWcCxK/h/6PeMBCoT+eO5PzZODoBI3sH0x7x2yYDCpHyYWy0+aStu3TFk3F2oFP33aUkuzoSWPeV6o7Z8261XVzlvpQVxyc6kDsJuHGmRltjDw7NG448ppfcUrFZUDvXLX5ObmG4ehakIn/rqft+foF68BETQ8eLIJHlrOGDsEagmliFi3agPVMuU3d52yjTUAKdVztAy90owT90pLBRnnMXtHK+b1U0tuFcfWDxAKBUl2VHoLeUZXqAyKfjPXMIFt/SOwCDqdsinoTBhI97h4e6q840gSb1W3uqWeX9HgzRdxuXalZSJ3uYIvPQo+047jmsvGuwR4OfvHQgG0OS8lWgVtFIKMwgoqAEbZJ5XPevhdiuEzGsAa13z7NJeXSy33vLROo9jXt+1xL/FWAEqhOl5NDRNwEu0ERjaYgdiLnmb/IMmJpbRBH9yW3071ra7qB8zg==';const _IH='9ddcd50b29ae6b1b7200432cb5e99ca73809c43455f6808419b335c4b2763cab';let _src;

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
