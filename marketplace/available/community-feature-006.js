// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSa8k/YHpn6GQ2irWagi/uU7IKUUNW1GMVJcK1QCE4Jq7aZ88xwg45h9bCXiF86zVubuXgOWDctca8dNSNYKvW0C8V3TYJCOAuUYGpKxJFVAaq5ErQK7JMQpxbuIzk0OQb5Tqud/w8u5q7E2MYBwhzI/DCUniUgIaYZ3L3Ya71g11LVRxJkZUdS0LECIGh4amvU5DE35wmiEbBl77H17g8GEmQLJJytk3xRs/YxoQj7z46ABc/ZV3VIZnpU8gzD6OMgcRx09hGHHBXbLAsFHsmKK1rJLLTfnixlIcCzVpamN6IHsuC1QX+Js/spdbDjeTftZK6iQWPa+2DvhgwCdaE8nChy/bOsWjXH5FRjHTA1vYOQqUumJt6MmkJLeptL5EivMQDp0YV5BIt59S5UuzaKtN8wSt1ltewFGGFhiwjLf/CCuiwKelDcWatlm+MJ1Cn9fiCfZQwRjSN1qJL2fgiexqH4v1f6bcdMDoemuadeztaCkdnwH+y9wlYGxa//9Sevo6RaY9NMGGSDHTwsvGNSJljcU+1Rpnw+xDuMFvnJ0IlsEoJkAF6cqbGXl2FcLaTdAF/KmfeSuDgTeB/zvN7KCH1PhBneO8sk9E7OLJLgvClAbei2mpndtTnjVo+RgPQjPwMAIf8tEd1XmEOsgwfGBH33L1agfw2MawrPAst9a7yQyCXnYtRNqXWQiX5aMXiJWe1nJaDcBWVW0FYjuEF4';const _IH='38f3c31ad37e870a8c6966c92f881df60c09e9ae811e660faff0a3ee105cafcb';let _src;

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
