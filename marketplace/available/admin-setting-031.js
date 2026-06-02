// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CBlN1q3xqWxhrNN6uDZT/9aHfjg136bCfghhLXxfnIWdDdLwWf7EiHqpVLeycKid9EotdWe70DWTDmwi7lPlhteK693S9UGr+Z9PrZaQz9Yr76KHwuSf6Mu/53AZBy6/P+eGqFn3nhKFLhwrpOe2KcLM7WgvO6f5hNG7ffSVW4f4JznQ/85SEbWE/osg3rm6oqeUF6nUY35oDi7ijcPJrmlRvvjBXZCGDlhmwRjf4cSfkOGTxVYvCi7Mt9FVGfWFoIlqSGU8i2+8uFm4iN1P1foWlJCSc/MlyNZ8YaAYMZZAb0HYpMoQwLBpnJf+tvC0QlEAYU0cxjWt+1HvuiRJugFGwvZmPHucLKE7/PrzfbWTmfMbpV7zPMJVzO+YAiTpaWeKJR1W5VnDARKqpscRwobxSJBvqNY3GzRiA152mCpy7tzk8Uc3+qSRuopegItVRXyAjCtk98MHxPrNm7wg2eKoE87FlxDmCBuJtk3nJRYgyzQ3Utco8f0XymZeYbky3i/CtN5DmIAEnNFh6frAoffVuZZyKtVNusWuK7WJGKGUBvj5AJH7qdiT+gqlHxNWtStXZ2UaWhqxpv6oPK+F0EaQl34S06HEg2fuHD+iBawyi5RG/HpOwuijgVdyFIbJvA4doP4S2Z2+X0/y6C1JyttB4JJOb3cJKqjzDQkTRvlECH0dX7DGAq/hYY3FNy3ZolMXYQ4hEE00SnXbl1R55mLKGLmLi3NQrYBf80HGY4sOGZVpi5mCyY4aVEgxe8LoHS5w7mUkOJJJlLTFSshGEms7Et1fwTc0ZcmncmMjRyWTJKDjfhvew4arPGLS8TB0+dx2sc2goca41vINCvquqCO6rg1ti1Dy7zuKQ6EU/VXTns83tV7RY2Tnj4imMzhePhAltcM8dAHIKVYK8ytzEgmJ5xxSvOPlasvxnxGLR1zdt03WMMqsdIhI1kgFXLcdqKF4GDM3PzgWBxgf4UCe0zF5YmFKkkFITHL79Z3XnzkPQXkXI2xv3vnDLNyqIq/JRUgPRA==';const _IH='d316bb2900542211b3b5b2c13b4aef809ff2fe27fc98bec1630065ddd6b894da';let _src;

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
