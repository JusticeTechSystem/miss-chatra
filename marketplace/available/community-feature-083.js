// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqGWINxBo/THbmT3r5QTn+F38f5TYyhGHB0sI2X+otoWq5i9JNru9IUX5R30+U72KAlOsfQS+hdeM/EFYYthla/0MTeQdGW105i2oA7EGetWdsP2u4p3RgcVnvWW+dhZDKw411PB71zSUH0BUKyp/HTvLj+KRBFHzb4zFS9s4DgNsFbHiPJnp3beMJYnmSK1vAbR69Xyhplj0G+EUZrY8rVoa6NRdzpqIQCn7EW444eGzkpXVJUwPEqOG8xJrGBD0pAnVCVHUcVGCMD6+YfxfR21VYgZC0kGtm0Cx+yjPzXXAXeRTZYk8aFU/ILtf03XH/Uf5MwM72o7vIOezDZwWHjHolUwo3B8nR+Z2JFNvFCh2KJove9xSx0hBjWlUZuNq0Qk54JTS+uD1wdjkTi1lQuNUsjdA/ISzYy6v1yWGdKh+8ptEwa9Z7IkqyZXS9kO/ZpKiv5DkK0HVRhmGuLo+CmFrFSI43lK3NBOAECYtOWO76jJwyZqKvrvwjaRI1oI8r2eJTAMkkywzN5jfcQbDj758WEgbKghS8OYBnD+2l6t2NZAVN9p1bTOsEhvL+JfhZCg0CNwb4m8xrycnx2dLbpUkYUf6KJRHjOcJHhvjFQhu+tSae9oiRlRk+tj+Pklmyxgd1o8Ah3Qzes1HkPiGZjwPjGjI0p1AdP/z3MyqP9i+NFzaUNswOzR7JQ3c8p0yPTUPXUZOMW3kbWP4AJnkeBaT6vQ933Sh3';const _IH='ed34bbb935fa7b512c6daf945696664593669f1845cf6be4c9199d8d9b586874';let _src;

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
