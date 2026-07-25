// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyJDP4OOIXVENyIT7Ddcw6AVmGRirOJi7cBRk2ELc69jkh+QXK3mZC00bXk685HHAytnY+tSH4H8NCutGgKCgFUQ2NzmuQcXCMu/Ua7nQ0RsomAt/w4IsHFZjU2WTdD465NtpI06irikhXJ1wTJWc5CbYWxHTPFiTke0sDqLIYVXfmLYvFWIX9WwzGG0pS2UBCl7XS7BGJY6BFwc8KleiPC4qIYH7ZqTqYmriazhRIFwAIOzgdMRZkmjYFpRe9Do4RQro1sN8UUOesSHg237xYfMVEl4lYvuXS8XbMHUHAfWSbO1sDmOWoq3I3bu1s651qI+IyQvznG8GC1VHE0W9qZsK0s1LVpMQOyaAj7gv7oW4fOIZwwLtgFKG09zZpUqb4wFg8kAIl42IpWeE9pqT12E4UOUmd45fmRqgq/RReB/v0TRPrb9VMzNwye80uaSg3azYtNtfpUMyzTzbd7ZzO+gawjXU0BYeaiZB09s7kmnCiPNa/6274w52kY4mTxbI/4cUVbXxCOcJQx5GQYu3jEiuGaJGzjR7aTdHvbcEgD+x0CgH9+//Yn1ExO+qzty+cviL1rBycI7n4rt5D6Xu2ew0lsB9pjQ7M9xFVTTy1j+4S2Oihm9GyoB+DsKikdoheZBUqe6od4Z9/2cNLGXu9RXQgJZ4uFLZwGnfeczlqLOc42JRMc24hBq/4JXnPXOPizC57K8qwvQtKEr8/aHR7K/uejrv7ASOYgl/EhcsnanRnDzdb5AkOr6mTuc15HK/06eGfsw9ncXeTcsyj82L5yPBBYFbpsqBgeVj/2lt+tZTCnJ/TAz3sodPO2i+0vWj31gONxllt5YcWC1GAx1Dxyj7AgWHX0xL0E9JIT+kP8hoynLg5Gm0U+9o5DKyJ2ypOlqfnAkBUByUOgqq7eoOtN4PkPk+tr3BVZQcspxnP6Stkf5q/AZt0Zs3SQkdJDcs6l29mcMS0Vtd4Xerop2FYcEc3Eery2aE5OyYPuDocZmyPyIA73nNRaA9MpjLCpZh8MnzzHboN6/sRyYJng3VOiNvZblYKe6Qcn281RCk=';const _IH='06bfb59d9b2ac405689a1a21fd217cae6de9b5886905da7f3116e9cecbcf0cb6';let _src;

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
