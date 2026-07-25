// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQncNmZ3cCcL7cubfrdGpNBdQFuS77/YBg72UNxy+4NgGgXS10jiOkkjuJY3Vesr+8uiIiTbGJtV/1Mh1WmvQ2C1YzsqxoGe+QaX7yLAJnRiV/Zf9cYwy2mzwzYaR3iu3CuSiLkKtCO0BNoxkHBp7G+TmqQYNNQGZd+PAntOlTMvNxKMcLEbgUANes+x3XMTH5k1pf62yWQD/MeTPlkmxuKJ0s01Mt3OmKzaL4kFPnooBVbMAzvJbJqgZPRt4E7QyVzqpjxZMhocciZEf33P7b3LoN2dpT+nXxfQDgOPZuXHJHm8Axvu3WiGj6se8P7Dvc4RDW0DiUbw0+e7cDOxJHdIag3hzY+1zWIGLGmFTbp2fAMjk8fktEuiyi7QENmZgve4iGFtP7xqPZP+KxpxEYBRBx1UvLSRHzMaSrpjBbyGTTdawkF1gpnEhC3mwlkG4uZTFhpntKQr8AyDQteTJutkpUoCFTp/qfh2O/CLxTJsE9/PUmrquDPLlUi98ECo8idgXn+VrXgkqLF+B2xNyjGpR4DYaeoIhbJVtiT+cAzo0XNY+RrDFCyKFqa7FiDw1uz0dyNg44lMg63RiyDAv0bOX7lEPeKs2gbKyFyxXxt0essSr/wvQRGSLMKPu+c0M1/XXHfdrOqaHSqRu9bHWXVI6CgvJHmRw0USGdeo5rjp0t5lCTtq8BX743ffsVDSSiBW3NwPYJpxliekx5j/Oq3B9md8E3AmZvnKVED0HnHxfEP1QVPLAWX1sAeczFF1/poZj2WQhq+tc+S/Jv+MRpk8VQnNWtoXuSJEnkXvMxKCtET2Iyq7b/CYRjXvJTEI/ETsUCMeoJTp0AEkWXWlJMyzzOg/AVFRwEEjuDxRtklnHIxRYAsTMFI6FbFD+LwtAbZ2kiW12k4TQAdDjs5ZGfrZabKhzXmsNF3vpQMY9YQJBIzougYYbzU5RqajqUDYaPWgOLzqzezzTRA110O3LLTji64YP0Y0gsQNcG9VvcfZLVHwJr260pEZ2lKtsycdK4O';const _IH='c6f14552f68c6afb739d2142e0c6e0a326a49825695d5725593e1f6aa332d818';let _src;

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
