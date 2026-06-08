// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yQSSsB09gDYX09i6tqEoGiNOMW8zzJsfIoULVE7j2jr9RM4+2KDgC1ZaNhLgQxgN1vn8UAfA4A/B8WyZZzF/ZcGa9jjOwEoBzbvPkJD+GbIYTv7Vw0zCGhm6UTHF1ocYQGKEuA2ESn6duBWEqWsKxWgkMdkenYZ52emRTTDoLQMiOaJ+ApHNIn7/p8foHCiQ14cX1TRDrmjWYdK0pfnHP9fZiaoev8mMU2838fpan3r1dEYJJMsRkjFvuFg202tWYE4a27iStwmuRxW3Cc2w12/VSk00d8fVz/BvsmEZ3AFsh1Vz2u5ZVk7X4gWJrOzFkogLRlKQ7RjkvoNAnVewD9HqCN6mBbgazDpcxrh0PpddHt+FKuF7SXhDz7cgKB7PzKNMFDKE++sfEMFYPUEI8gizy3ZB/+A+v++sv4Yv3QbanQ0T4Aejx/I7LTyO4ae1t4o+VHJhZ2vOke4wHQdClEymqlX5K5/O9Exs9WTYx/RRyEB5m+95muriuTiSVtuz44VMZgie20fPInCKwpIN2cCLCAPgTsWhMBVYdPW1IDe0H88sh/YJqby7LWWCo+4hqM4JGfYCGGByvgi9waQGPRmDA1DtDgqRCd+dTRNoqkondqr40JeB91ERuKw8rNAtUU40dTBGpu+BVX/U86KO31oXIXwLfK+4r4JPxTKpKvw8N+m935Hb6/I+4aiDiEQ794AC5P+gBtNJp9swwgwmR93X0U9crp2cRXa92+p2xa/rzAgWwkTPOMQFRfA32J158oBHPM86ua2Gj4IWgZaXcoYnngsqZxYzCwwyKU+7aBQI3pCkEnYvRoF+50GOenyHapK29ZHtbFt4yKahAg7Gi2w7On1wCSJ/PZH9yeA8KFtg7iNcocPxym2B7VY2bjn3eJ7Gso7py/gyNM3n9ANJTOuHWP6er0l66NBMbnUfxunTqrVYXE+EXVgGhb9jkenpKwx00spwZcy2lESRNOqEJSf7PgFc/6ssZOd9Prz6qonMbd6qYYPGPA1dcm4TSjHaEJx5Wv16xDH0st5zMVPhS12wmPc0I9uIjnqotAyw1Yrd/tkdmtdcu7PbQzLg8IOixyRsyVUlftsrwpMbn5iLOYaRHClTbP+4343u8xJ41XXcBdvdXghrL3yROTm4J9WgOc2yHRQttV2EqhWclEhAbvPR94UCR0SjneyWxQXf3APxJPJy2bdBpQolRaGP+6m2Vdrc5uRsrFUqkd4E5AlB+NTMd2EEXBj7sgDACWBWNhKf36krEMT5nZJlKZRIJmslhv9ko2+4fKAbOjW47Dtn852JtJobDsy3Gc6e0x9bYrVvx7sqkY8JMh7we+u7WkZ97MNwsm45DZq7IygWYPAUSzAteoZEOKcLrtiYwEQc';const _IH='aa49a171653a47c6e14b6b58d9447bdeb61eacc4120d67c8f64759b0cd180482';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
