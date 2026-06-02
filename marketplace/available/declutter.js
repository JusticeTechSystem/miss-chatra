// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dB1BiRDNjZEYsfD+rsUQ4eh4uSkaD8AmqIhuozW2QNX0rvDqb6p7+3Zbc8c/ShLLBn3C7Qs8esvd0x+A/+4FuAPn/iNkQY0Vrqc9Uoqe53tEvA9W+XBD5BXDqfPlMsRL73L1VrxGXXWhQPuDn9mEq2b+m4RgOZItV9V+Qa6CKF4CAUr4BQP1OL4kP4HTYa9B7UQ2r2sSFffy+SM542xzHezbwDRsOAa1V8CSFRcIprQRiphOSNMrH2fvJWYNv7MPtCiISzEGxB4Zf3Y/8Y6jzD2otrvHj4fRI3295TNyhmeMb4beblBYmDh6i7YlLbfxTxREr0rSDNHCW7EBlSupllBqz2lBGo3B0/VzN3wkIfDGBywS/LVZxXSuc4mqcLWWJdvF45OxYZNCbJxwx8WIrq+LnImWwI9VoqBgFHYR3zUWvLUsIpdOXDusG5RRzrEG6oKUHdG0pAI5M8y1nLgfaAlWQppYVJ7fJUSuFZyebbSd3110LnT5/L9eNizKRB0+tnrg9gUu8CNIM51jfpXxy/Fos+mxU/y5AGiLPuXtaZWxg+KCGJcHls9rUUrGMGsblbDghzEBQvkOdwMT+V+rZ7L0pU+0XH+5Qu7EF8s4vruNYnO88K/3fYwhVUDQSKMdKm6Ae1ZST6E+Ncxw2q3WjVJ78t/rJWtW4i91wAIUhKXT4XAZwNwX/9kt8nTBU8mvuiBldVwjxN7ObSRhsZkLH1OsJLHkqNiR+SkoiWjylPuBd5vqq3N/Je9WjuDye2KJyQCy3hquh0D8BLQaP3Kuqtsv49n2MmSFzuK3RwzqUFp4rIXoOLAsVmgj1QD/c4LCFjCVUo78t92s6SNkU73h7bkhycMgyFYANbyaTdpRP0YEA/M1XQ+rJlGLGasnMimxMfKb7n6GCxEqaAbjb3YbEMWhlrodeDJ6K9NElt91uU3mkk/lAKQLtoCcC3o/5wwnu90sI18hibfDWgJ9AMspbuyRGBBsySwJqX0HyDLVcyD+7erolCMWhKBsa42u3+mJh2AbQWiu6HUeCs1R4V4qZ1P/boOQN95r5HCvwBRtDcbsrYO8e8DXheNOulIqEHMe0YRBLCOYiefL8CrORwsz0Yv9pGB7cQI280lqLT+eyh/ONKINBQX9Ng+hTzrDDVEIQwFATNOcNJrnnccJ/X5CZ14ReG0f9bqS0X+MZaYFW+6dZhgZgD6bGWThQRQgnGiN4+u+xnBfzcM=';const _IH='67b4aed3f382ff02500559e6c3aef48413f7c22f92d244518aa0bb7af6a0a63f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
