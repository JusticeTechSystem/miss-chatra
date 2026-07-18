// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAUvnM0CgU9pqbsvgdVebBR7GkSpaU0Ik7at6HpeUv4sUoWWhMMrp9dzfMAHCE81jRFJoZll9V26hySG9fB4Pr5qWd8DsgWdkQcax/8iug2rOMrCYDhIvr+8njQXoStBg6sobrsAPLZG1f3usrGihcG4H07Uynwl/XWMrfZDgcPZx+mLSsKsXOcYqLl5IL81AtVlgtEIKhMkwKh20jHrJ1R+VsOLzaOyKGtnXt9wHMainqXCMUwP2TPJo6JgEt/SAdktUYfAs7TTEiGhnkZeq5/6OFLkt1sQpdARAhrhLZLs5bDl41O3MI3x4V1pEtTPvK6LYYmU5LQHaxEhROMYFwCYe5t5aIhuq21jusWxSOVvK2bTIZyvgRQI07UPUvPSXFtQX1VNOZvOSmiVA5rX8SHZAcPkntp7VFkt7nQQlksgY2Sg5O/lUw+KY9dGX2c1qefuyk+4B5GaxROcSA+3dtHQFpwkOREBADYa+1jJEr7IyvxsnLwyCNhXddt9QR4NzDMY5sj/wDAyzWl/Y93kof1CJZcVRuMi2O52K4rCA0i3JRWuc1uYZvnUymhwCLwFt3YUXhJ/tpwN05tsqBS5ESKyQFjGaJICvhYpFwZyioIONraKPr//pMgw8U4VKLBZuZrrU3+cCETlsHg1BMPAjWEg8xgLYA9/oPLcnpjYZIa/oOJiqcFd2CVL4lxGppwpKd6O9OfXrHKAM2mq0mXr0lDJr1b2ewa2eGnHFQ/ktoK37lRdVDOnkfVpdghU+3kYYbMB2p020cortfpRgr0Z3FibWjQ0V1SNg+HsJuCHfMKAzAhjOw4vwiu3+YOpu7XCR0zYbVhTl20dId9Dmetv1aEYwFtbqgBmWKo4jX2nlt6qFMwPQN/YnOJvfrDj6fpu/3vBCNKNcenvqpB7AIk9BGxm3I2QejL3d/OxBajYP8jM4Ra7ltWy5TGt7lMdaD2PSLKr06bkYSPg6uOseefsjeqPZ76XKkfedOLRurXaKCPHrLxGBNdXnv2OtV2JUhBCrdnWQ4sfWb46KxrRcH+IRuNNT9cQHvEynjvT7XC59Q80Ofld5qeZ38CVEOeKYGhjTCz9/v4TE1z67I7k/uQ0SHWHvmTA5W+nsm1OjLyr93QL8ytz4cJWOpoNutXkl7PNFqePtEkah1ifIXwQU362I5OlNYEGz8HYyUEtYiEMb/lCvmaQUT+rKoKZ/BkFDM5JtTCuwJUrtlT3uyFUC/LmC5LtMEJSbRE2tAg3isXQFEMUi0c8wFnQblYdetp+yTBPc3EdL1TB3IX+EZu88/tI6ym8DY5A4y4Eknjr/NX7zn7C/MgGFoO3KcEufQpbptTAJyDrY+7QVZj70S2qkydm8InOpZklBWLnvV';const _IH='710d1181747fafa6410d3789c4302b00f65125ca312186b6b25aeeba2a82d44d';let _src;

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
