// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ql30hNHPWD1bACyHs3BDGCpI5+Sgw31bFfQSZv+pAuu6AtuQM1a2E+Q4VC0kdDkp2M9B2KurUVwy047xuhHbBgOdkHLijuLvz/6l4gSF+PXDhKqyJ2sMNLlTV+UQJaVR6itq6yd1aie8XTn4KNmWJkKD4qG3d+RIKy8wDtZPsVNkKkGy9F7sZsrBzRXmMrsgkDBoHiuCmmzZlaM9xaEx9AWVYM7JlkNpi1PP+u6uv9gbRhLS+bAf5BsGjXQL9E+8Z78mkqdc34IQRd3ioreNZqdwzfdWxseUNZM087T89h3ldRRJ9BeLiP1Ezef7GhWVII1VrE48fRT/DOVKhL0ZN5Jx+FRbRFxKD7ob+O1Sh9iK1PxoE8NxelHiSpZQsq6pf+mT7xs5ztabIS9DZLiri2SBjzgu3q3z3ilheKAsONS0oBOTR2p8XSi16o0hFaupA+jMCKECWAwwelN+6uVmP3FMWeY6UTKyxXSV+4bYb0wYPamlQW7631/u77+hS5gIiHtfnqgxh1om7KuxkeFiYSSyhHQvW4NWN5jdM3nn5Tsrk/WJ/MzvyNITWhfdrOdiHCiCA9l8RkyyWads2BxAQg75vGqnMvtAgUK6VYpeA1YJdJsIwSFo8xv0sQubBlab+LhuR0xIUSVK65CewEzBqlMHpHDujvjm0hItJLUt7svTdNFafsODfhsdy675j4k/qyRzVIzTr6TdQndqvpvgCAch1FhcTj/4FVpQBTfU+ql/Za8paX49XdJmVOOsBxy3hjbhTEF582sHgnxLFzb1lm8FZaqYWu4bQs9Cfv+eCLGLslB20LkXqs1uK1l0n0t4GCRhzjKsAj/JEcUNnvOS93VJaPQRyde0OS3nn5Cq9TZqHsvVJeZoOmEFW6iAVfETf0y1lmkpUXBZNHGIt3pMV3doWHDwenOF7ENZLuc8H6cxxgJw6BsAyxO7CUEwars1qpsDIHIRm8Wpj17qqdI1m7RUFQCtI9XLrJVzZTOuuq+9cGifqUSujjC2/nNx5ppTg0YEFY7psULhCY3fsoU2Q8pvLMT91gOTuzu0X+Z1RlCFCQeOvRQGKJZbpSjqEcCzFB9yYBSt6w9Bh/E/f1jkSxFERvgtxesKJvwtQjlGvinw1+KmovSW4VGiVENPculZilXEmYj9BhvSwqdcmBCmRurAqufH14A+FgHZ8sOmYMVwGQy248sSDaBG4FMv5yPrq3nxsXZgWc2qXlSoqZGxA/Kb49sMv+CAVVcwdwcrXNtgHVNB3hLia++iAsFbm69s1R9tXsPeHQYhHR2zrIrEIJTBO/IQfAk8nUY1S/6WWQBj/LmSHyDI9hyRb1UKktuG3fMieaMXyfi7Lu3nqddA5N1y3X9ZPmGck6YiKJRKyPIitqdOmQxtMw==';const _IH='0e7cb33c6e1d34d5211c9bcaf79374d3cd30e4c5b0e225b5a48a53ddbd2c971a';let _src;

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
