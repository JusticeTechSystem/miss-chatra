// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2AwavF6JiP4KtuP6uHwCPmldmCZPminoLx9203VfM6lRDtqjNVNUfEKMut5LiPg//P0SWyjTTxqLXCMieK9iW/wxkWKJKE5/BKVps3+2+Df8lIyyDVOHqE/tLxDXxJZoqrUaKWqJxkwJ5KeKuJNnFg2ITTYB/v0Ig1VDcj/1KcSFthBBgzH8ZQ60TPcSK0kYWhpO21CJOnLGUFowhIJt+oLUUsXMVoNHBSIn6Aoou7BQkgB9rJoaqhgvL4iOlkGUbkTjugB9DNTIRaaL99/1c4a9Xs2Te4MEWif/5d/j37+Sfz51dPXTfMJZipsvSnmSzixUZRLooUOLNkphWiVGdgXqraxMdcgqA+cv647NQpXZSdpP+Fz5+aMmhtWxZ3knSSI5Dy9tRJaGSQ4ypRjwsFnqKHmUOam/qlnSEeIcQQG50jKeURYcGyL+sGTliok8xFcIU0ESTlti5cH299xjzHNU43B8AmcpT/1dKEfZqnJlTmmH5tnKOwB7oUCFdJgg2EkwPrxr+PgffEAze6jT0GbkH4/1BoAGjzR6bpmuEbR5Giug/KxrG9Vj1tiPkbabq6dhQaWsmUVw0Enr2OcH86/h8su4dcH+77I+GGtqQr86j5IjU9KGfoc20tIQMXvNezi9ZVdjbeK7c10NgRTCTaHg2Z73+VwFZw/x/BZgSO8fbBOYNf5f0L6+vINzSXSDZG7+UITTxknPX1Z7LwNFeJJtmbPWf0PVLpq4pUiIwMVrIAD9NebChyHNE+ecTsExy2arRGOOxGfXsSFPAzRYfSirHxDMGnwOFScVecIVTUSQNpsJ18kGUSSh9gTaTaIrGwnAXOLMp1KAzR99wqV+6p7Nc3PoElcwzsCmmnXEa97TIxD5YwKNqO+1lJEvo9Ck6x+HOO/KuF+Y9ihl6mYkFMgypeyng2W6ZJKKuKeUnTjlX91SyVG+n9EIHLbxn7F04QmTa4hcunKNZk4VszQ4UQxyqaviOrW51MZys9OS668a+13ZTq2WZKDVrMyqejlSdHlUHjrYVAG7iDDLxJ7pX09V++nkZAOXUySdM9ejKF3RzMX1yJN0dNwQQYUjibPLzF/4rb2m/X+c=';const _IH='15e47044f61e29d298ad30523e0929fe4b3b6d84579bff02905fa2e15188235b';let _src;

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
