// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0Osic5s8L2b87lLaX3Fq94UTL4rsNycchIefDXB+L4WjzqQi3AljAvotg67kWimCa2rBR2RUtVWKaW3gDkk7l4YGcSNE8uDdOFTGBhso2mDGinWkYrdbsvkmBXiOR54QNY9CMms3zhdYFRrY/s8siLwhvCEIQz8lpGPM6+AEJ16W4eGXvjxoNdfj+Ip8UtHFvMuZuKYGJE7/uCwNhlGPcgcUzxTR8im2gKpsVEscQMREWxY5Vs8/u7mMWYtC3Cs7xCstjl0KEkJadeUvClvBEqsOEmaQSBM9X5GmLwdmk/iMSgWblZfmIc05rN/afKaCQ+yJeEZvDbN4mcvBLJlfPSX3AYGo5JVW+eY9pFJfu0kDUfnodmOhkxLOm2nIXE4nSYvRRJNoxeVtJChJnE0Dl0i5htdNR6ZQ+pNgefYG0U4jhpO0f27wQvtNX6eox6U+yGkj7TSbHlZMRX08d+vKX9A401Od9hFED3TVG4VXeD6M9PXUA+rOX8syPESRuFbUIPAnjrUIl/BWIYzCYVy8XhQYbqRkw0u9VyiorRFO/vTp22wIyALdxPneEwfR9GwQpMWNiSO5o4/eMTy0sIks3xb/fBoCttDTWRNcWc8S+Iw7Q4CEQ+t4Xv+ybwFFIw7jCCjwvQguWEacnU1+Fgn0UKqwOuVCvpLlnT8drUKUsqiC2UAwgAuHajNPFFCA7bK40A7pbA8UhlaDl/+pNUIKshEyHcWAiTYC9NNUstKSD2uzdq3fLPQU1HHvliSESgECLvkvV7QCuWnXr3RY0sQPKvz5mkuIl/rPlaZiKc7YKSFV51+8+AiK1PTWqSOj0Y6KcYc5RjxVNOs2P3DrNoxS+egKsAXkHkzvVK6lccLYHCvjP2gIXtL3S/6R8+5bhFqUxlYQmhZSwR4KvXvNfpBqod2btYUIZ7tOkzOtr6jNXm3gQmEN71f4u35hIpdZ+zAk0cim8HHPVaxsl8ofMez68Mr284f3J+h+ju+6LwSe8pSuJhPEMDRgRVCKkWYapUTKqi+EGbDRsX3QOP1k+3WG0F8JGxkUf';const _IH='30eaa3c6e07913a67466c31646ec7c0c518a6ab845e66203df0934c68b20ed17';let _src;

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
