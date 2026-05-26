// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ACvezdL/azrlf0klIOwpJaaLxbVTwvFUjdPzqS/ZVnVA5djMdXSndl/sPDfRPWVMd8vvl3bE49q+jt1Ymw0uxmwAex2XDvaWeAABS7mfHAmffNpUmR1uJDGYm7hQqeEjwoQFes54ugKgqiJFYrLAllP810wQKS+NlyhGTIUpJaq+mTHuvQnAGV/WIsWEzBsGMem4BzIaIBJ1+WKO83X5ON95vEnB/CW/ENP/2JNrnIV0bTvtQo/A13MmJwPEUYqUMVwWAU2PJTeCIAfMC5x43jKSsxFqRNwerdPueNZulKXlnIISdk6hgbsf7l7TfSbJacGJtuhyuBiO7eIdxX6pzmVIMTp3lkCAajX6DY5lRHLQy3CvWy7wrkfTw/EZruvCegWBI0VVEtIQZdy1mpVgfhp+I1O357n9LpR9AOekH1G9OvUt5v62ajbjrGaoq876IYw4MDCXpi2a92Yga9x+t1wLKCCbFmmuUXOoePFXwv9z+f7ozgqnz7v+hGXfq9fTaoufPrtLJi5+SlJXkBFN9kiD879Ake+hFiF+za+VxIwPc5bGC7vFVbrMROe9ZqJ4AN1JBFakTIg8QasoQudQn7217Q7IeYWqBtNALtzP+mtrw9QkkbvjOTV/iR2GSyBsn9bZrsHRN9syMO+bHvJhrQz808zwXsg71E5yW43J9qKKGUYfISibnNisEFs6mRlYEqS8zcVFxViCQCQz71Y2SSJx63BNUv8NGfahBCB0OfROG8r7dERqBin1TJtf7CF1UJYvSLuVgbaqll+68dbRhlPuUtJqAg3DZZ/xrOClSBckRgr6BMsAo2KTVMrj6H0GwT4rveUYYXlu5tCOpNiHAkkTK5t0+aOCd+JAzlI4SCH06VgO4xpTf5asX+jzkfHjJifKmc6g5wlUixEUqZfVel2VJtaaInP6OXYKR0nT2Od3jINUpthNZ2g3d6GagWJnrr3KcQAwVEbOQNM6o2XwWvUAPreFSTpQQ9Uq9diJ8gkO3McSMaFF2Cvy/kcnTn8vtPh+FokC3obSGuweZgaTQIq3w9X1GM3PRrydaUNgJnRbcrY+X7J7OJl/d8q49oAME3FuFU2Hi6tbFskqkYrxLXOQ43K3urGqFTHcPtjZCAsJM+BEsLScSMQeutQJnNcdEmYZd67nkQAfyI9n/5N4Zv5yoisGE7Hk3d7RrMxtw7nqF64qBEEdrLh43v2p1WcR0MmwpZRblqGqc5Ct9Kzu8ZQXHTkf3kURF3V3+eAgo0CtXhmqiO1CuEItqZHrnwBAokMPdhnMUcpZJuAj1Ly67OMCfm0myk78QhLdhl5T7p1/QzNGK8Y8f5BlYvvHptajUy/mGTA6tWwdtq0SngST1fq8ErUGig8Ko9RAaEs/';const _IH='f6539dcb475d4917418bd2c43b5049dec19eb275e8e0f31ce5d5f21428a619b1';let _src;

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
