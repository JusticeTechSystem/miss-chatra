// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBFK+KimzvLn0a1jQmm2FI/OdEpwtVpzdPDhcPcvYGq9hk/HwzZUWOaf01T1CIa/SQxiQK5wVzjBVHpBTQktn0SMNQ4BDmVIAZLRlDYgObbW4y1JQL/PNyvzefHMu1dPxPW+yIkH1dfVF/XEr9/5es3r0IXPESnTMDmzAm8E8o1PM+40oMmGZugqB4jZokpPwus0gkwEL92ILb87Ox/Xv1KIgzOoFvHOfTC3pYx6JfNqZQiFGZQRmdbp3+gmqCUL5bkdoRnGHVQT1Lk0d6MekBqG7+zbTFvqRnO5TmKaMay3hRyvCdzO306n4a8+lju8pN4m5E49izyXXAViUsnZVeryvzd+X0SrrruHocpbJsCz7kKws1GsOkiV9KjBw30tV4Mi0zMO0B/f5o8unoJCYmd3u9TTNG7sEW0Y0AMoXa0IOZJrSiNaGHr4fKGVFvWnled4JPouPLxDYBVFTqW8+/TnxI6CX7I+tGBa/yy4zfOnYYQFwVt3A+aDvnEP6RXHwychXdEg/HF6Ge2WXAa1ccXx1RkvROGOO/6bEaOtP9pTrpRkRqXYDWd38+migRvj3ONohgWwH5fws0O5aAYBBZWt8l8Nf1XOUHzmn0ngtZj6rHIkj/Mt3No8pNRIQGf4xgTVZd7g95P12gDOEMIEnchz23Zhpk0mDPUZaeRIeEY6s10kiyTWjc8lgbW9aj9YbQZUYpweZc5Smh2ngUgUbd3h/PqyNv98uadhDTIBiX54aXuFBAFHrAWZtTJ5foAOWMrVLGuOo8xpUYlwDxZiTZFeeKKUnyiIleUvb/qOIXlZex1HWldDqHLg6j9mJ8+yCCjbUUBC/Dg7TMF4mCA1Q5O/lq8/2/mXPDh2bQLph06ZWjbpnso7rTqVyMAwCOfoAYRlZmGWJbyw9J8IM3RtRimOe2e6PwcR4NLiAU9lbudXF18epvybQgM7WwkLLcWXttAIe94CvZhcXYSr9tsWK0Sfe0I1YcC4yOmm3HPeSo6AW+dnF8ETrAS8piV6w=';const _IH='f058946ecd45646766cdff63fa9429b25d11e925047a9e38d46516141892d53c';let _src;

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
