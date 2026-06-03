// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T7ny8kCpTPrERRPcF9pwocjpKrdJR/Q2N+bttmeriWsi5sUgZ0POwmJH/IgHGDWE1JV14s7Gt+RhTEnoXNy63ym2GKXj4IE27n3Yp4MJML3uPuGgR0nMCAfP/KQ0bprvitwFxjYivJAolvT6BxKgbp+1MSVa5Zs1H7bcCbSgFEi0QXT7OH9qL301Ye45kLuxYclk4JCc7mys6cNgS9VjjI0lEYY45ByBg0JEesu5xvMy5LasSYl3hAaLJY9JPz4M+Epilc+5UgclaSNSUJs/GEN6Kda1icKnWM7VMN7D4cYooO0CrOUgZQmpWujI1Jf2ZouJNmuHhxSJeR33p70W9Zrmy6MzMNXf4QU0AHLedNAE1XHzmksg9aSbiGRZZ9SD4bva+pvrVm3mRo3tzQZEy2Z0pqVOxiokzSsukhIDxHJjjANaDBnJHcFiLiAACceB2XLB59n/qHMCPLhqM2ax/jdq+O2TaToWMmreWS+JbS2AuB2+UtNtazTgi7ozw3dxOBJ85kYyCTzkYk4XEx4bZbyszUSpTlVQ9UE6UC24FX5/vx8EDSv2heqcrcRz7tx/DXjh7ZIK+RnoacBs1+mn9m/r16Y7TFT6ve4novd3B0xOTfI1mo773AaqpgPDL9MnVwDth4N6WdOlFalFpKZ1BJURpO3OTP64iQ==';const _IH='0da412dc33371e5b0d60ed6c35dd6c988986a10f300c994abab7ba69cd2b077b';let _src;

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
