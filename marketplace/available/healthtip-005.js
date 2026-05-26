// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZSMSgbM6MTR/0DxaSORccsMk4s0puiDoHf9eCQsGy4xkK/qgttQqCQ0yTA9Swdo/UJ0Q2BfQdYF03msO82EpxkIYuATCMkax3ccOeF3TnHRVbh7GPSjQkgyfQZSDr03FLruF1RCP3l66nZtVmhbGq+ni+uTTl64dAlor4CfUK2XfTgGEUkkeQR9wvNgYLNluwXDh3/f22mkS/z/gBkHTE9uqrxys0rjMwAKlcheUDxEopb3qA48422RD9fZhEMtC0v2SEuB4+ES3kQ8+OijuDzfolmeUA8o8r/Fu5K5T3F0fQGtftTaWsIFuZn/BY/7nNbAIXeCmkrm9NDsnJgVhdFwhHUeghVyUFcDXMX/ZZYSUvt8rsg3fZ+xDIp3HlZ1VM5ZDZZ4jFnFImCEdXf19i9BkdweiEqYp4d6H00SYEvzJxKYn6kAIirUtDjUthcqCgNYs+3LYKnQp0+eYCVV4w6VFX+gsDdHiTazy0x4zoT9TRp3Erz74bwfQNuvGMlGUol8CUHFnx/bPQAm6TBNUAHknPdpujo2dPlcU2OD9vN3khVaQhIDaonIR4xu43f0W/4yYXPx3Yz/HAk9ymvueSVcrujopLhLbtEMaBVfl0wiEGenWIhcGAYt5ROPb9cm+aCplMMUNGRy0F3s3mmH/IWPRVRQ1Hq/4wMUohqCKYyeqAsdga8Rs4ZdzvFwCg3JPC1RdmQ60BVNZj5S1/QERXtKsbxerslCCb8i8KIrZUZcboXQgEHY8NS2NJIJgRKOodv9E/cf6PbaFBKpxgu9yxrimngPdFHWeJXwuZrNaRaFNFl43NEvcftr0E8pFHdsObRhVRKlseq+uXa29+JqFdZ3ixa0r0PoLe/KocssEO0IBQppmCsxccJqbPwHQA8zg60HwcTFNsYI/ihVaiiW6k1x4s04EgJHpF1puV4fJl1IbaOig3MD5hA==';const _IH='23448058b428e57f10fad3509430ddbc4e675935e14b573f41c1c6f70eca93c1';let _src;

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
