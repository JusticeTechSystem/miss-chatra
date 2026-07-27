// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLeM8yQ6EuytjGxO35v2fIKVr5MZFDAXSw7dy26iiBeDutlmCYsGrlxBPse43jbPOFJuD466J/FksfZRlYfbtFt4xHnpA+W4c/WTrN0vwX2phrdHNDAsTNPE6Dt1s0jIpJHkDngjqE+DrN+NyAWfbOtQgt9jBmFe4AhDab3H2pGcxbRdfJdvpp3q4KKjY+k5lZEj6OwUlUhcMen6rTrLJTib60pJtNUrTPza2+KbNCQtDT644vhR4i7kxthoKfjkC9h7JCkcwE59okk1mPnNwygoOz9JPuUazd/xz3VzXilH9imag5Fz0NB7VkIZlXDxfidzrHUoLxy3Rrh+CuFBC/KQG0uC/LXh3zKcGdzLv7+nF2tJK/75r2KsKfEZh5VsmgEoR5AOByFhXLya7ihcwLNyakf9KJArytDQLcNsb7C/SEWDzoJukHEXhqiAf1uXaj6/b20Ve0z//JnkqyBBZreV0Xlyo5d81RYX4VW7JK3FxAFPeZiGWJUvXpdwYN91F8euSa9fStloXB7htpOz+2d6Z2ffdOvZt22B3u4Fi5FFoDwgWpqRFMCRKUF0YpcUiYLW94uK+itv6rWjCkjU+2aYu4Sp4YrfaxYRmHtMh7+6b+2OoDYNit62R69uufNIrw6VMZN78So3SK0LDwHI/B5AwBrdvIQP1h40HxqgFJUwQJf25m44ef7qAJsOWZQosdzDiUQBD5eih9Ov2rkt3zuSjS2ojZqaUjojLOTBCLfWSiKzdsr4gbyDYqmjJa148nL1HcrTgAZrG0IwVtXCVRQdZ3RGletHmwvtp1zk0MJJR46LA7GNlD2IrbEWG+aTkGGlqcNXcnlV7C91ea3/XAMC2g3RyYng7W2cLyCYSJa4fxtATTvQlPPEF/IpZumoDN/d9DSiVC6OUDZ8NLzurLM75xjm1vTydkMxkreTieu4ds4+iIyY8QQEkICvbGQZVKIGhC2LDQ6TI4/xi+ri5xfVjeiI3V3e+2VVdALruSUyk4ZVsrmsVwBMoIHbfhOdm3';const _IH='27e998ecfcd11920a23c054e38c48d1cc1a65020cda2142c5bd9d1110fa932f0';let _src;

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
