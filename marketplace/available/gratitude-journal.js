// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NSNYrocLkv+zoGXYZMe1hX5A+pD5XvlZRRb+kU17SQL3a3ZoKrYFbd38hJhJ+M90/AAVuhLLt6uv72GmVA1Fg06HV/cUXdnC8f8Vu2u1t2Y8ju65qkT5fIm6DCnLnJQ98YDUPf1rn4UAKYsDg0J/K3yCQU414ebDSnAaOIG8ChDOnx8EXxEhBRSytL/hbmljhScDVh05W1TmM3m1B8E+N8ex+JUNJXSUVzWtATR6IuG+7LbZci1M4uXM4aoUuNp/f+JHmesqhtl2s9+V/I46oqDrvDpdIKjU3WHFDVwnmZtPNF8RJtoKbhHaVSb/9stFYooEOpnzYwHef+bYRxBuDcRiZXG5j9+WJji/QT7qOTWjDBpJWB9AVBGNH1SjPmEI+7buL0Q/eSiL+s4dfC6deuhgdZdSnWmt9n4jCOsLFfRXjmr2dU9kQibxr5tLp1wwFsLY3JJ5kOySfGwl+sQpot/Le+Rb14F07Is2azfvrirCI2Z+WJPUHnJH4P04Dm3UzjaJb8vQEJDOMRYrqshwv27Zl9gz7byYtG1dP7FRcI6FzqcB4bO3Ak7YdAd1GAL+am8/3z/Gs2QTkGJMidjphXZa2bE9yRxWybNTXbUzrQu0T08N8WVpHmi6I2SonJ50c82Yzx0JSt65vDmI8XYyks7VbmQ5pEm66xrTAZqMc9/FJKhu30jyakpYZdfdSrpVqOFM614HIZIFenp2j6WEmn7fk65BsMGxNL8fUlM1j22kd3tDNgU85Xvto6V8xaimz2GcG8UgY65fNrbz3Mruf4vjgUZ15Gd5MOdmUUNW9RGJ46CEdBpAmyfMO/9M5MPvWbtPuJ8wYMBXHy9yPKvqjiN945xo+k6iYRpLI2qeel1jDFNb/eYCWAcAqSGr595v3Tpd8SqXgrihQdOw/uajGQf1mMezuX/E35AN1tzz+c35JnID2aID46WYVmGfY0JmQq769k1ROFUY4oPZZLjGwiwY3m+cWz630kDDqiC6LQ/hGnE6/GXOnwHP8WQ8Zen/RXuasK9l88qOYD/r4yoEPbUHg3Q+6RZzj/dBekeXytvG95R6rsjLm8yhIaEaKJ1ng8ZZHIt/sR++umNMbQEDcTXM4tk9pnw2ZH6XrojH4Q3pEKX3V1S+X4D3lhXPlk6Xqa6BltSNSCqMHo1wQAhalOO0feYTp2Q+ZOY2Fw0NdEqT80V6frYvpA71J0lspAMGaqvkwjDMguzJwouLL+5WsJqvWwBFEFTsPNddbSbGUN4sKTFUWUvwEUGsxQLuicyexSkBTQq0Ia4oy8Daf9unumwUkhiiVZdTGExv1Sz9dNLN+Nse/R67vvIAc7NQy7OOkxmPQBd3wCPZlDsNUkTuqNIUOUaXS5H6eAjuBVbfecbMKHn31GfOgZRfP274OWTNmMlFLXNnUhYLifL+79xgs2Dx50C6Rq7ATgLn/3QRkmZ+8Dsgor7hu0UH4oHPfWi4+vjr92mpT9B14ddLtLvwvNYNVb9yPF7TjnYVGtww+tJH2T4B4h05nZJI18/ETuI5t7+U3uRZ4nZxeABdlJB/RLWjwDE0rZxUPg8qSetEgW0H27h8klnkBh+PHNiJTpweLjZqwxYS0TAaS+1xG3BUqMsNxy/dTu1aYjWmpznl8lZg8ASRfOEkSNhg90wqAgMVhKmCUlpNryavY140FkrxwAr+DfGbXD1ciwTUEiMdTYncI/2O5SB1IamNMyH0GUw277roJaEL255/R98fk7sNZ51MMF74Z+AHYZVHltWkXHgXTXNwKaBdr1vrPDqaO0z/Lk3wYRECcdt8FNUhPUFWT62D2w==';const _IH='020028c592c77579ce08915588a64e0cb9e04bded6ff12a8129b80c10b66d935';let _src;

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
