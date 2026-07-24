// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNYhvcUw6mX912QGCfAu95OYRJd8DquRX6Rnb2Ynp0x61FCICWrDky7P5Sy1WfRYpEEoAxq2x3UFEf0bVbppWGjwmhkxatvHl4d4FcK/hEnDO78oXps/gjrycdKqYpoP3iVNdA3SvZkm0ML14vA30TMR6knIesTGKzLI6uwBNA7BZTHH84MuOmacYya1b0ZzbAH39kCC6HZd5YMB+I5Tfzwdr1ahMINnqZrACyOD1PpsKjkSepHtsgv0n3yXJuPD+dSTO6YbjG+Oc7tQFSP+zBI0Ji3jkXTVA9LwNtJYlLGuMwCyvm477h48oeajsLfp9Iz/VZ3ltDfSpX15zDg6L5GKSpYpcb1gECVVslv5mDI1pnI+hOJp/g88hW0zX0E1gadGtuFFSOos3x5b5DxX/ZWvrmUiL/kaYORDQ5i0gPBn2QBVcgnB2vRhQ8QIBC7Q6KyXM/i4utU8XrSgPkB7wMqKhtO4aWl5Hh3kiJCRc65VgO47xc2jKNYbxi3odClI/ZOhr9/599uLKrS3JIK6ky1wkMxMPQTQxf3qGURtNT0kZ0LKq0TGOSXA5AdhjhCo93N0xDO6Qk2f6Nu2IWAHSFly2GD6MhnOEfSJaQcD/V0AJDhvSPBrtnMhQXFcLm2YLYKjsZcMEXX1UrOWpEvIl56+CnwZDv3ApHLAYoeemZKvJaNYENxuL8jmuSnX8TLpKejtTyJUqW8iZ+h2ODt/dnaUfDLPlfv6nKauFP4FWcgMGBDwMtiZF86ECJH+g3lZYNmW3swDGBMocJGJCmCboC8t/AqHCorZ6YpNYuv1t8KZiuJRGZhFiLzklfknPLvcAZlKziyieGDuHEM6k3YIrpqBdNKcc13OwGrf4B2lY6z9+DTwg7IauQBaBRHP5hrSvqrkdpgKsGA2HnkzrumHUkma4Q3xaFVkVu3CaJXnMrXPKJZkxyNb5jeXWO5AjyCPd0THkOLI1UaffDjBUDPrHCFG3dXxMX5jVNgWQO6oO6kf0FJyLW/yQQu2OYsWrfD/3SY/7SIh8uoxZ3a+Lst8yhxyk=';const _IH='9d38d4c0bbc5423475192cf4dd846091ebbfe8bbc37be1050601975a8adfb191';let _src;

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
