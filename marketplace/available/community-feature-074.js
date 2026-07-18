// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/c/ljb1MxMdUfJ/RwzAI+UZ6fs5ku47hu4A8bUZto6S03OuJRJFUUlWqVwBUhqMX2g3D1DIye2oKOdKucVfhx9XVzAhl+yy325myOrukPKFtAd8jrkMYDKMDCscJ18eBexEza3mHEX5b09JWAUceWphW6bPS5drsSMM5V0bakvjuJ13Ajp4tvwMG9VYL+LKA/4EUzOgzSvqMtOjVmU7ioWQJx61dm3U/u/0Mno89JLbgodJMjcdWVjZ4kASKhkTryzsemjOQPPgSdoE1Oek5d5SRy+1U432tokDim8NntN6iyj5JvyIT59bkxdergCD3mdWF5LpOcRlLAxeCgT2kqOr8pILU/V4p0+Nb16tYEmtmk+xiv1S/8f8g6C/6RaTTTZ251PBsOKUumXbpahBx09BdN+mdhlCIDQYB9BN0ZEruo8bfn/PtDxnya56gbcuqRCbgxSXZDB6BoUbyo2/lUjwVHtZthiMNNUtcnEaEZkMNzWXBDhnz+vmNgxVxpFglHzK8Y2QrLp98BXKCVwnUbQ8EipABAHciLl0A5SKt64zel+zEQBDeC5ApYIN8Dt4FooTo3Or6LwGj8O5d5XfzI85zRc2dvXtPZU9hPbN42AdqoV7VbSxB78ARsUtCaTDjVGdtEqPg91JCcfUJYzySFFJGom7BnvKB+0B2nYDJR9UDBNQ0QpDBPBC7evUZabzQc26dU5peeoZHTzWyU9cRpHrKiytqTtXQnrq3cI3gWc/An';const _IH='d9237ac73832246784784d49dfbcb65a57a10ae151d5b6a7b9f65c74066a1a4c';let _src;

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
