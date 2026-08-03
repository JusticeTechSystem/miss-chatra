// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWnNVmjMeWfpHT69bJwVSLUYYA5C3UI5lcDwapObB9PMWEjAu5cUY9pqMCzPoYIDgnZhRK0xhHVH55R37YiiswwDzylHlemS1Me3pw/6iGOj9BdawcMy2ko0+NYQ32oGOFNB808T7VCC+4qJRm9x2FqDId5gIYIgptdRP8YsgXEwZHYPWKQrMykTqwOmgDVorI/QTT0gwKLDYO59pQ0VU0UOHWI/ZGB/jFbXvGkbqukC1fjuabbeoBmUpxt2n93N0WSqx+PfV/2dXyWhMrGM0fAPu2ZmNpac0N1G10OHPdJvP42RzLifWAZ3rwtEreSg6wWzv+BaObSDzevjqABxUMKiB9NhyLkdpV/SGepYd5RYls21OnvgVCjPHM6k9nyV95n6cUX+nxB9MX6lEiFeRwbAlMJ2m7YRMcUPUoHxxckyKcRjytczbdchXJqh7BQ0z2ud7/ZA8uKkqdXAxokK4FEDjP9se1C1OW1TwJW0ZgJs2YxNkxZCYQIieUtyyAg3mgOHF2diLFqXvlteoHNBr/k6kc8fGVImrhGlm6R320SQJFAS8iDd3Ok9cczmJBvCVf8k6OpVqNhUcz1mqAiheWyIvkKclfRWQIkFhtA9ynKnPWNDAiDGtZ4cMD11WLihViLqUV9qYssLpYQcNlKiMCH7QtRJ8MhyWUPrk5ItVbVRgeRAjyvPdA4mNBoUxGwCQv4W2LHwPzGkdOnvYIxhbdUYF8Mr2Xr9PzQ5o=';const _IH='f0a0ae7503a6b0fe20a8b0bdcbdad3128da39586dd9fb3569d570e068ff4c32d';let _src;

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
