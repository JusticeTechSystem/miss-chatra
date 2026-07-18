// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3m10ehe2X8qfZm6V1Za0Vc4A+aSGczwRggr8B7MIVZs6ihzKUQLYeQOHSMGmVQtcwfrqbnEXxlnD0TT14t0230XoE+hrEka+JLUsm6OlqaepsnkPXAjJnd1MhGA0DWsjUbKTKI2VpbaFhADsSXKWKfhe7HyLITCVrPE8F1deO/HFF4MA3gQK2yEf9XzUcGI23TEZKwLPUWZ4cy0/yn9CAgHDOcAd2C1BWNUa5vIY3CzTQQMk3FrdS74pIEwdhKLP2pf/KYfXWcxG0XZsXIMWHtwh5x0Zs2ArnjCGK+RUo4SrB8XO0FgpxJCTAkMv4JVKrNacSAympaK+VQASCJ21Wgb13JKXmDvuzCcXgio223EXpfoKprgK8W2oyTzefgZ1v6LvzRhThXEaw7CA2stjctxHXxbQudfOsnBaCEKbTZXNJSdQNCRq6heL0VwDilzXsUnP6hZUBOcVPWfaGE26hGKxWQ6XBg6ybMD77mqqeLGDiXYZVcjzwF2JryKVqsUz3nJTz0eG2Sybz/4z9H4koLj3gdOaQkrN4oC1Z8lMLVqludSULDdhQGPH0ilrI6f62/BgIweQ/kkDD6Ep9kaStaJNUAAfgIsvgwCBF7tquGkpPw1upT/6hifw4UlpjIvtXeul7YSfZB5sKIuV9BIlBrNF1kdgPxMwfDnhC0Go+K6fYuVqhplmr6+fdAL9Te/E775Eu8eE3TVbC7PYlmdm4mdypCRu3577s1IbFWEcK+77vS9V1IcHinWA/nquGT42Ykyz0yn8+ctBeKz5ZnsXpzZ7xfwpi+xD9dIBg2LXYhOovRi7Ay63ZDc6fLCetyaCgetAXj8CMzYmFv01+WVoQ8rOzJCss2OpYCyYufSgCvMGar1ZjLKLwTNN+iMS0MxlN1aOCT91dbL0nHVorrAIKXxst85oAHknPCmVeVSO6OHQRh0lIZv9s3rjioQnOmpAyjoYTaUWWsg0s7JQUAfRXPEG4r6ePudjJfHJuK4fw9fk3qZEvZw==';const _IH='6ffdb7f0cc8d83f164c3b927105bfc6daf34634b60d386d29c355f3d44b51015';let _src;

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
