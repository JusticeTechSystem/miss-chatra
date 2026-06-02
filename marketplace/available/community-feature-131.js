// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZrAiRUpLHkCLC+zTCs+wQHZydTUzrEgawmtpf1qU3SkCKVtL8f5m8mw3XmIjfV7Bnx28WBuO4KNuPYj+oDoR8csxNgNniahJLVV6isBajlzo9xC/b7Z/0OoiF2YAI55ZuvCdbTE0aNuNw8MCeL5RgSxTCUpkl9Whuh02mRK82f5uUALMy+gIBrtwhtcYYeD1McLoVS6VTC+VL7snDLm/NGVzeBRw95uxr7TpVfUwmd8vxMeZMc2D/c8yC8dNAYcvaWCkGy3ukQAOJIcxTkg+3HjJu/rt9g8MVTgHzkMuOICyWWo6UsTwo2oDE9uEVP7cr3jaClG/9E0N1SAeDQESEREhTXNIeVUNGlupNye3umWAIZMP5GLTVXmf8/wbaE00dQHsG+3W9CqXX28dmcVAOOZoOQZSmO/PXlp62c1qFerZQh1eXh1BEDR0A5NYd7arCm8JdWs+80Uspzf1Lou+AXM4JNZl/SgUFmgUFcaPZDQ6nX018/D9a4gGCVoIeV2DI98HpthPpP4gHgfJvu4KQ3VWDN5IeliAnQnZMSS7C/f52Sa+vsiDwmZR/RIzFTZ7Q/SMGiuEBzkDMB7nGaGqy2Qoe53vQb2+GaRwl+2GZ8IaZFz/WDI8Hoz3z7HgFKBkl7TYdHOm8yKTjDpoYk1eDD28h4jUjl4GsGEI/2KbNd3Cts1GXR+El5AJ4Aq5v/cX8i0MngogCqDIVoNOhOWj3UDISw5H+V6F';const _IH='3869c65d9d2b07586e8382e5a8dda34c8664b73b78094e15c7d60c2e4b1a7acc';let _src;

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
