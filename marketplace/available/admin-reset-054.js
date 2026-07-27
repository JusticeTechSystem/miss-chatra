// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIHVyUloFfn/zmx1g2pr/N+YKTEEzNr/Cyg3fFGhRPnx+BOUWXKQRRu3IVkuKlHY5EmxYHy+GcOTJy1jNgkfEzvRhiXJ3qBkXvJqGx+meTCop/bqBzieVIiAfLMPG+wj+oc/oCeBw6QWZRsZ+PS/TBaU+aALNBtvzV/Ay7DBQFvz2B+JOHQyNDAtWIc4kIgv0QjLRLGSi3zeuyWrfabICh/ZY9ofy2CchpI5rv2JsWAjsuL6KqVFv+NIJl7ZCZK6xHXpc+BWqHw9Xc/4Nj5xVTDRmFTStIbBQOaW3Pi/Di+X/PC/8dp1+prpKQb0ba7Nzk2Bio7Oi6N8mj7Iwbsh7olKP+Vt84GESM3tNDrXH4UUg/77gw4ys4bnDkhMMXd3BF5FhvM8RUhLo61CaJywhrBjdFMVC0ERk7f1gL3V+gs1qAtJtTgBSe3BjEx6NXxRD2FQMECeJLiU0UWFMRPSl487D4AGgW+hTTh27N4c5FodCg9PP2+0cWtzLZmMHMOG2Q7zKi92sF610KPuNSJy/FLgm4THdhwwiOzWyjhc4v3ovJ3kiMpqhFrlAHiBcVC01H0wDMkaPNz2U50hI1XipYv2kl2NEJg5anHZlIgdrYqrMW6vF8G4j/cxpykhIsgs6Xg7C81fWl+mSjRf1etHUYjjh02PVYJQlbXBlkMfvogV99kRnlomF8jWzPc2K81L3y72jL9Y9+Kh9p3o9zCa9Int/AW8o0kF0pzcEsRY5WWU2Xv7zkDPOe25JYRUOj8jmLTK7bGfp/KqNneEjRoI58oYaEP3peTuJ2AN2HfdjGhf6pV0RHfGVVMugiM450mQOiUc5pu6UfikYPZxRYOH/Izex0OMWeZpWDo+v2Qi739k2GJ/RWG2f6DOLExUJGv3Cad+grWxrmOSUYN+u0OB506JZhzBhw+ol+HbcxCw2o3en79q+DZF+fPaaTp7NsTo/rpgKEtghgzn7jz3Bax5EjuYPJ3UgK/2CAg783TSZPPwR0TL6YNA==';const _IH='fdf5692a948630aa848e630b48e1e100449838921f8461b0557ddd9a9d056b91';let _src;

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
