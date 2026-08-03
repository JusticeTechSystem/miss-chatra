// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaV0hDjam560oXTrpznNl9yKIoxRDakchaoeIQY1pjDn/wP1LMJ4qxS9t6z/rgZwiGPMtoYrMcmtosjor+Dx8d8aeZplN91Ze5VseNKOA+GuP6imWtXL/oDtl9ZawRGKRbrCRibc22G/v4+1rKEVvzGZTZZVx/BNynf18rbA3f3sXhfPWzIXm+sIW6W6NSvKdpNNNSVlw673vNHLCA1qZ8yG7awpZbNGe7Gp408w7bKmutMR94sfBkkihJ+lpYwLuNg9PhFSBlDd44tROpEDkRLlKmRioGh8QpXUyTy4HPfdqiGCeduekrK82hvZSAneaM/ZEXrfkT/Jc4OgXwhS5ST5J3KlrH93PaN+4IFmrD7p02Nw2qFvbsz2igCyb01YxzioqLFMdXRzGkKJIBbn5HNeRyQynhNtRruFFKWW94j8XkRqBypc8Scv7fN/uarsen9XW6eoyXQcf+Lz1sbrnCe//6dGJIn3jz0NjWhh0nRCFEapIIgcwf2UjfL6glX1Zyhr1v26O2KiYOCusTRPPVqRInIyuI4ax5ZeacqyJcy+ZRiYJDDSlH4XETHcq8Ou6wSPa8pOhP2kawAES1YOebeQm4KHxJb6A3fIGCXO50UaHRFCzzkGdZ/Q/4MRkewzxxJesF6urRykbvqvU0u9kMDu245roDY9i7lYWAQfZedvP57KpBuvDH9N3TY9Z5WxDy46oR3iziBuKDflZFFUJjaH5EAseKnVef0yqG8KkJyJ7AXOQN685lUoCUEJzkUzV7GRuuHOjTC0m7CowYZRSt6R2r/a1zSjXWU7UUQ+P8dM79EY8LVrXuoPl9Vn3YFsCVnbmJMPSaCcG8BV2xvuepTX9Z1/vVVaW927zX+mcxXOs8ZZbB4O3MUM3MzOrB4OVOAQ4UBGVUKSWftdnpk77uI9Gz/0HrEN7NXFrRXSe2mhN1IZzA5z2Ovq+UWQLtuRxGSBtPSXRGmPIB2F1arJaPg14QxnIBwBxh3sleeBUDvrswKBa55T670q2vu3uKWwhFQYTPQkZagJUUdzT4Wofal2+Awalte7wcycLhqioO0VGO4dIIctBA7DzjolVzoZqelKa93epT/dYljoXCljeW6++laeMduFWEl6OC7pX/sIOWVA93MfyxlX523gdeB/Fzkjgdu33K8XCi1Y6Nzgy0RvIQ3NjLpS0w+4tO/jpNOXga4q+IrjEocg6v8QOwDix7Cl2dIEzhoSNdeI0Kpag3r9R5gREXR1rL3k4DXycYgeV582I5IfOpW31TwtNhN0Avae+x9Z5E/ivUqIQy7RL1g+ZM+Br060rDHVltElbn4rDKs/pX7HWC5ZBFWYxnYOjX+ryJuAA6nqJuFoYcJXwRHDvOBJaWfWLDoZM=';const _IH='05a265e52d0894b2202b881f7fdd28f52a239d41a269e02e159ba9c1744b2fe8';let _src;

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
