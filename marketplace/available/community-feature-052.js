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
  const _b64='027nScPWBSdj3JKTkzkSH75X+5YDsTLBLvOYIbTAp4WeiprwEp70B+haekO4+ANffnJxma8tMl1cf4e7GcwfzoG4S76Q7OllF7R+d4TkHh+TpaiE2U1dp46bi6ewgKyru4gJ7wsiDqLbRULpkWKMBRwumVTTthq9vM8Vyj3iWx0Y9RSwnI2jqPj7F1BNr6GLM2mmXB8dnlxZZ6+jivU2sNJ1XLXwMn0Ytk+gVZDPbChNoTHOsaCjdmyWTHj3RipReZRJ9cRZvseGrSQDpvShRkNbPurIrVaKkR33HUF+YJfyY1mu/hSenFnmuy+3rIZasTeKhw2/FlSPmLGdYkDr0UnknqZ8NgAnIL1YWC/qxKQPpeY44L45ajI4V+s70YZZn3wMnf83XytMM81RdcA1wXCxa8HCcyWeGBdXn+2FWjETb/UM62WIkdYluNAPf7+NgQZzvOPEl1InERiBwOFSj+rJFiy/rmxK36k6Tv8OnZ2UbP/XWAzlh/ZEO/v8T0waE0h+0QYhy6GlD0BtT8uw2sbANIVwfM8AzNFnOoK24ozDhq85DcLs3MBmThI65EmDiNB9Tgxt47zgB6Lr7IrLq8IQZLJy5jE4AOl5OA4hqb6mKu25NI+tsNFqKtXvvIo2wTbeuT8zACj4xsEq2+PEzugtEL7Ds/RY5628HJHAJZA6PA1lnR3hYSF0SaYU18DyUdeNWzb7m4ke0xRk2+8cA0fAmaiKmqHCChnyFMGklA==';const _IH='fd18632460e66250fbe812b535f686ac279be526ebc4d4fd17ca54a90a6cc83f';let _src;

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
