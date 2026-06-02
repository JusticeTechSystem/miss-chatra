// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bm4qH6daoFIoq+G5xKc+ZZTByHLIMs0JxHp0vyMm6jdkbC9T/CeU8WR2kXQrdwgGMeaqSN8qSV8n1knNzoepETVS97xW9EaCUqK5YPXsfRV5Bb0UwMNOpEm2hLltOC8Q+U6SrMav85m45unZcwxNYKHbjwAAWWHhZskg8AsOxVrX8ybP+nbNF2ml6DyIvR4GCJQEgPz/QjWTmiiRgbUPouWLey2BsyzTlaj3G3Z2VX9bTmgG6aTSLyZe4dzbQkB4/B2vapxLaz/E623Y66pMepxH5Q0tQxcQukqYY5pJQHw7O/gtv2rWlwKYfbjFEOrudzYW+/VOZxGAWyvJBW7oF3KsL6BE3IKi1dBAHCfpbCU9gGbVQYiNY26PFmnfDfzuI1illjmbgFI+HX8Iyv6Xrz/IENJpmTfy7/Hmmd6P0x5IQTkolQiLSemZCMChkfaT62Gpg7HKZElG8rar7ypG4P2wDlgsj710g9my+2Mc4icWHSA3+rH1YxGSQuiXpwH2ky3LJLrJ8NyxwB3rQNr05jXYwLPBcLUqw3gb5Jz4ouhxvqMgJyJfr/dGgPoJnTn35nf/RMRuOhH9gJM0pXP/O0qzOiOs+81uqZZBxk0JCKxpRZQFVPPFe9i6UFDxeoVh9hm0Oege+htOMZj545mI6/qO8ZAxx5cI9axHPImY4YoBMTDuJo29hX7lpfSSOXvZ3Jh16Agun3MKlr5P72oPRQWKGW1hpKqdyPWFcI92UCvm1m6cOJjEh6sGWuTWo9JNEqdNuMvxAs62YXG6faU23lWGdRq5pBq13mN/hZKiMkjLkWUsVT78MK2vPyzNN8D/VcA3yaBFNihyaeL5fvNuSMIUJ00Jh2UYD/yT/JQdK1iRuTpNa8VhAippnoTcBFLjORg8Jfg/FWcOGjwHcutQHenLjtBvGcpmW2TOHBpfbpai1fdPfWwcv61xtA1RSgW7T4rX6PZ+fP+ECWpKqdo26aE9cebIAsmePkSzYOSfoMtusYNPaLA=';const _IH='8ffc05be939bfc93e040abff0de54fb34ac383cda84c32cee2b7870821657a97';let _src;

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
