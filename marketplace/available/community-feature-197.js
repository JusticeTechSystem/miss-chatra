// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E8uQkyI0y4YwnKa9Oz9ohG8pwvtUW1O19yI+C9zb+kUFzn0p0/LSZ6ST8bF/okQZzHU8dqW6EF29K0oXM4PtvtIkKD1Rxq6SIYqGru6W9U1faybM90sbgvJYlc8FgmMtIpfbJeujy8S7Z2G435hdsr0XXf3kDXxKI8fipxi1uBpUormsmjxh9S3F9zoPqdtqGRNQCF+usGQIvCEx9aMxDRoWOXPVix0VTsA2wYMCHTTWBa9U37zKD5RiyEhJI07m1Ws6kd7GPR+StUXswQDMH8J4BbQ0nflt/t0tan1Z0kgU+PugdA9TRFEyq+7zgcbzjbiMg6oJwqBIFPxwDMW6/60OonoUVasw3HxwGb+JVSboaboyiGKwG+ZCDLqk1gYuBt32OpuU08dK7o8GJULA0CYDVzGFiEUKLb2JLSN9ReSZ0ZRnC4GwsXCqy3PSOsxWjOAeSdagT3W8SPbZILI8Wob5Wos2i8ASQrJJ9q+iRIvn3sd1/d0TXVHskQH1QfE+hMWQE7OHDXW7z1UOHsRvIYPfkp9SmVVNiAI6UtUPSJPM/f+sK7dKh/GvnuSpuUsVfyBpBsHQFcorRPFzoL6Id9pubGKJjll3giO5g72oVzhB+kI3hlduSnUo/agzr4GV0bCKrMdFvAByog0SfWbWiYixzuO7c9PE1yUlWYr76LJmQuvVD4a5nYO36a6m/4qaAKttoTSp1CG1b4x4TSM5SpOnC4zZXgSw1iuxgkFlOaIx4Ro=';const _IH='49e4c85b76144e0bd93f44183e5c33b8562d2a3c6e7ddc3e781dd4cd0aa75432';let _src;

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
