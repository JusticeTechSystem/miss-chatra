// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt7KXAFDySFaufGD6S54w8H5FYCZgP6IGGh9X9uY/y8DkCQt4AoDdUdmI4taG1ciwgiGkZSSJOsRlEr/KwXxev9eh7EwYYxsswiWbeUUR/iVhYSzx+ty062kz4HF3vxAH34ELZyWos5YWrprcGcwxJkyXkoXYYEK1gV+hcqdbsm8NtFTnMLLyEknDCkygas/Yz0FHJKmO3zSAasCNGzu0Q3OzoEOEriaSe2irZGuua9wyuxvybAtU1MSDN3Y9EZwW9qqIRD48xQRl7SCnYkgparGyR1860fCr+/w/3mA/zbkX2fOY22DoxAjFTMKt3ZQ6Bp4Xsc2V7KxCGwaZVEUHJP1mZdH8F4Gjah4gTxdHJo/4t/xOaRs3j/UEOHkX6BYQWhbpEf6p0ab5Si4JBJjqEmKUtR6FP+LKuZiOh4Gpm0m/vqfvKPAw571NGfk/+aawzxAECdCTOYKEjvgofW4rLkX8CfGEAz7w/CNGO8h2IWO98b89fAece/NIvDVcM1pXxDfExk7elXm8fFTzqpCaxcAsato7z/3P88BNPPxwmUyt2CLk0fLgkkJNWjO7QQ+7iUdbv5zP3h5D0g2rb2OuDMhgm9bg8e/c5MoZ8xFeSN79z0TsKIcjDbh0vRQIbPTcner/TW2xLUcFFG8dF77SKRJhoPDsACwbrBx6yIQlNKjEsWIuWj8ewTQzihnF8sDv9RxU12aJELQKRJh4Pcq8gpG8duNRxry2o7ifGpjiZ';const _IH='9fbbbebc1acf827f09f6ec45b0e3072eb0b0e07aff5a56e35c750d0f53cb4ad4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
