// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqldvgoVkxYtAEUNOXbzsyQ0HSeywfHx0ML+huyOYOsYcYjyrJJYKwWt5LEJO68pQpgqjvN+BJMpI2ZSZiz+r0yMq0NOU0HZRuf395YvQbGRQBHjBHl5EF4xbFvl/czoqxTLe9SsG6LkUCOxg+Z2/dKUPNyr0Evq4uwKMtUQj6ckCRfx3KHyYU+jQv+CzmIvqxrTvF3EgZv3j2X9vyDX4nSsfZBByKapoiJItZ91lkYeqKB0hxg93XSofjG1AQI0n8BnFTy4+lZ/uV4FXpLYcv78GqPtVCtsY9UybXsqXw77VvI8FjrGZQUKAlqpze+WLfQBMn/xdx7EVZqbMiT4H3vCqk5OOU5ciBgaVyHfO5bdvT68itexkcl3k8uTVxR8+7N3ihPdYk6q6k9xw5gBM8bIA4SN7APZpid6mm/I+dkTWE/ehY1wb+9FD/chZheMrqAxRQI9SESeuP8WQYmhFFQDByXJyVYr36mWkcTcFOGBs5BBFcF7/pY2Q/82Giv6ZDe3+ab7hPplJJybK6uETypKA+4lu0uVB2kXoLzJ/NVzlk31MLRaypS+guvJhyomv6CaYmEZod/yjHUuqLS1JGO9IGC/swKMeatJBMKUpyo/pIF5ET/pum1NZUBCH0AS2wII3BHTyq30VUL1nxU4oS2MdXLTbrQMogbA4zFG6jOQbjWmmR+2h8Iq0O8AF9/p0C1alwKiJ7qBOHjanADcwOPd/clg==';const _IH='68b984bac51d4291c9abc1cfe9822c5a11fa9c5094a7b7c01dcfc33986133531';let _src;

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
