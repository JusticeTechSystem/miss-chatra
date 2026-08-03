// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyWsFx2R9jJpWlsusbMqn7wd4uJzohbeZPM/QB8LnuUqLDbbdv9NZPLo6z4IMFmrN5PjIjIgPlCDxrcRPkNJ+2e5t5rg/Vrf6Fp8C4EFTpBQOLLUofD8hN605jnXFNJuoZQdSiW4vffcrucK9lqEeGCvXLT1Z++Mv9WhDHZX/RUwjJ8fUOgVX/zwKsFcAQu79X0JzWlIwRBsIlsC4jcm0jMa+9kW4xyQsSf79NrRqDj6HvEiQMrlfRQEGh0Bf1ivyBEMdoSh0jS3ywuDo/Rv7hfFTrHtbAa+nOvcfA8BhFpLv+ArZwLdGwcHtct0GVl1t74RHwHMReymIJBfn9lzN8HGedGU+/Wvqzltcs727rHxVvmXjmkHszCuSYWHrf+/rPtpJ9ibbx3suCq2u03FXcP4Di9bTHZmhUZtGzSeSKddVIyLbFfp5NHxHQpioqXjIus1jaADNzRfmScVkzMzUu5Yj3+EtSWxtmAliq5ztAaRdaFBKBV4tUqRMndRbr1VI9Ep/hnXRkK15x03erqhmcf5oyBqw/MGj6ODrbeuZNaBXPDMnOxzg6pi8XdzmCH5JgA2h+uRbaClQibmms79PHMtDZg643SFFzCpSs4Dh31zbQR55suSidypmrc/f9W5NylQ5xRZPQbNpbrUd79WNV4oDXwRVVGoKW+IrlttUfNnWHOqz9mok0IMFmX3yRStIusYtioPL+WY9JAY8LN6jRpHW7ALkVu0Zxy6c=';const _IH='8b79fc201de531f8d8a42552b1139998121c04e8958f1951989f94d3bf52cf82';let _src;

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
