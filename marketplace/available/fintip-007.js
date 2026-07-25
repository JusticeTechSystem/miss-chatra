// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1jWfB69LJoazMjKQXe5v4sBUr5fYQBw3ZxTdsvwfE6Dwb5zrq13UNKto5xb21ay9dqEwkqiEa8GPiBwfthydLbvddpkuz4vzfl1t9RI0OuliuvCpVCajMw3wkyNrsTrY094HbR1u+9XcdmIWjvybr0y20CUTc7dda2jY2tf0zzUeJPPTOo93IMoc4BrpgmDDG8L7K6o8vVyjuoHt+wCtSB1enl9oYOzBnQ6NWn+KNisEm6yxEJno81FNuysv+xJzD6/azp0RS9WpgFSVR8NyFLcw5sw+js/K7lkJXtq8cPc97RpGG1Z7T6hMyMNmObNQ2eFTVHql/h6JLt7SBMWPHoyRmHYcT1/F8Ps87M3JYgUUBXZ4uUCIc53VGeokcYltu0TCqBRHObF/15YN+eX62HsIpBxcnyEYPzlgywySedbHGj9WA/mfV7r1ZT6GqJ8SUA0g2CTvYdjYz7i6B+cmur3ahFKTG0c2jXFMdWApMbiFabSRQoohhwyQc27I5bWEsgFRxKyRlmTSoiZpJOyqTVPMyxQ+Oh6gV4lwulq0p/rXyDwdav0nI924HOJpE5rSOdZTV4UmW411WO+TZZWLUjgbmMTyMcvUOemUGb83MqMoQORmO/qPQj3nCurynXflFR3dOY8VE3AEV/DNcsxZ2fGBq3FbYB8iZYaV/kyoMDaH2WCpcsBucWRhqFA0Mfqen6L9Iix1bf4LNT6PtYu835B9Hcq5bZ+TjPYr37/4GEgjbMV3OKzZz8IeAbB6xFBcYvNNRAsT+UbPUdN4iUA7UVIcPoL6yB03Dpwr3OMRwZb7sk03yQOdmvmTTRK+pdOer2LAmrYxgLUQrEjh2sR+zPy5Bgr6fjGHW4zk0eXbRT5sIjquOEt+5aBvi3HXN+KAQjIO0IXmpKxUJhCNybzAq6NO4d+Y3/n9fc5CuPpW+IBYRjm/Ohd886g43oHNX4R6V0bcwu5m2HRzV5diz7a5uqeJh8NTkSkTTQ5276dqjnESBKnRkVP5iaxoLLmRTGmbCoAL4LfUoeOu0kosEu1pBdwAFgZCWHnIfYhE9MzE=';const _IH='7bbdce3b16ec553d49ff06b194c260a608f0cbe6121aaad8128966439772a156';let _src;

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
