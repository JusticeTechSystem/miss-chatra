// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQm1zwXEaWsuG2dAchFhmZkMZzzg2KdUz0Pwnn5ejzIFtjQZVvPqiv3OQJsKwdwQWNqwtgqaBRURz4d+fx5VJl5Uos9ZIQXDyH9Q8kGkeURqmU1fJ/zeEX2U+ETvOLuJmY2OCDwAYjqdSjFVWFRWMjSq3B4vUM97UV03jBjD6jVjpB8tcSDl4QZyxIwXjNzCwoTZpBxj9YFWsixjazG9snlalqmR4Bkf0tDb8PWiBfPtmLzgkgpwSv02HU7shJGGSAMSwMOsuCr/uFunOKEpXDqK600synDMe3UPV6JdbFjnoFZnA0EAasklkOuV/emKAiJ4L+fYNd7aifIKit6zDVc2yA+wzEc5eks38AptJ/th01O8beAdQ5f/XTpN+XyZ6GlCJb1W/o2ZWtaKzq4rnwybKk8fvahQWtxopKc554Q84Sw77RqASMm7zcFXV372xhpwv0zm/iEyQM/D2UsZAw3Pe0o4Mlpt1Sm9SQqQ5MTm5JVqxqsA7W2tu7s4nDB8qrpp2nQA7YA8tJ5fNsNKY1ZTXeqMPhgLuJNv1Bq4v9B4qy+GQzNu1heTAJwZMmnqIZkkTMX/nqS2kjr9G+RO5OJ8MNVYXliHenIpLfXmy6jhmGLfjZOKAQZHBC3aEEN2BLRYnV3Ef8kV0Gz7lBvNJxuC1x69+Vtxax/YDTQ95Yc8FjcRpSYWMJmCCQfGA1itN/WeU48dzNr7cbqGouoS/6OGGDeUfvUZbgTlwe+Kv12B8ik';const _IH='2c78b3b064c60aaec69d881f12fc18f24c81a2a689571b997b22e3b707c6828a';let _src;

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
