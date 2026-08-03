// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRL8GaP+GJkbOFpEN+S/QdW0xj6CiEOfxAtsGYTMUxWqSrjPtD6qSGtu44zTIW6Sl7fve+sWMM5ju+ib15OMI64ces5/HGFuy4NZM6pk3MNsN1wLmNjXkHERxuStaQqaS5wp07GarbfP6A0bKjZROCYjTu7hUtCcz7vtqVkm6h2FhQIJRIZyajaF3Kkosv4rz94o2PjROhAj977ei9uoYWcpXDene44MpVayMmg3gB02SxwlOB7FQ2kEw/LFrQ5KNmBafbodCVyomaikDu4Eb1BojrZTnky64WjXSHNaiQTTPpChlHGW9OREqchnVYs8nX++3nUp6eQqXrPwLqMAhxSsHJc267HvENk3PNunMhLErPe0F221j57x8mbCWyBCpC3c/jOKjT1pUdlwZt8qLkNyazmTOVYvgLoY7uVqzdV3Yc+De+As4Y8+28UPEGrBzGqQY1Ofk/pn+QQOOp8CVPqcqh7QsRs8N1pQdU38IyTfckxmG3d9afXoTCB7mozZXXSIo2T5sh3n9CiboX978RvMrJmzAEPtyqwrAuWSGt9u0H3wUnMIzg5FE1cYEo5KufJtqwOwYbG';const _IH='3a28d0fa3b4156d53db3eae4115313859f835d236c35032bf4d1f2a574501e45';let _src;

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
