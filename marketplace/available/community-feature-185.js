// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2LdnicNo9AbftTjswq6S4102z+EmMtU9b1YswYhhH0Muym255cZroYXIHhF3PZpREsLuE2HgM0OKa0HfdfYIF3yY0BlYas0e8BN/gjepZOwZDnph9bNltGA80dMrLSO+8TkJnWPLoIJD6isjXtwX5VnxmNom/iHkdbTVvX583AIfpMmPglKp8Fc26vu+JNQhgjBIlr2MFs+cLtrYrGSg1aX9gHAanteThksgzvFJ8LQ/02BUtqRMFQSfEwLIvHVHZ3VVhHMaeEdYuWag5xsh5aLgFPezJ1R8U5WCVgE+LOO0lDTv4tRBy0nEcYKcowbzjTiweyDoreiy0hu5Fw6Se8IBQHw1dEvLHEkVq0zKGEFxx1j9lCm7cQJVxG1+iYKVPiIjtZxmaeN4hXbASKu0UJ6KPGwnYOAqJmYLH8rBiVUN1pa4vNTpN7pLeGxPL0USXprBUbKWa4SaqH3lJNL/vcxgKJs/OEVn0ta3pLGPAv4hNCCe2Ov/V+RUNOzPBgeWs4F88tRDWmqesjtS9HWjNjKxiJwHMV8BnYp9VARwqjUFJk+8ickLnJfAwy5ULQD0DScUfDVvoopqPtEseFT3ysZM+ibrSGcIguzGcF8UurNsVRE6sKVR1oBMQgb/2nIV3PwGmvKX3jZ/TTJMFqvu2gL3OgdSnauK1W208vevx31NLOgE7egub7pbnu75nn1ZJZaTaUv6ygMtRx2mI2lTSsD0gzCGnPdNthsoVowxgnZ3lbstqfK+bQeE';const _IH='d0e86d849df9f5e4464dc35e011fe8b6aa45d18379f7ee18d91c15d2e3390129';let _src;

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
