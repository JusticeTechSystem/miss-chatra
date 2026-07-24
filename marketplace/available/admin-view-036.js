// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmsVXGt1bXv7n6GRMArLajbbH+XuU8KHr8b7bpRFhA0LnzH/73AWVYfegBEPaPbw+w4ZLkWiW4DxLEXeEfi0Cx9G0KMyHBWHdDShyYVDvzYN0uZuaNCW5w/g1C4mruLPIWWiPPxRafO1TZbPaxy2sAdpEYn7Pe11YWoxnSYvC1fDIabI4AXxWcQB+m8q9Ppw+nLQbZKQ6I7RO6wemRAbdTiT24/k9FCny50F1GNrKvAJZZCTBpQFhGsCD4kBhinD8M07BJCL3s0fVza8J5uDIU8w6M2PFetfo2+mkOyoyxh8Uzx1yRCQ+XL7QP+SWMhPk52BYCoaOA8TuYKXVP3hK+ZhpeEH2op+v2Im6w7y+YpEUH7snFZunMr4V94FYlJPTDlT7JnkW6hDRZS3M+uFFeK3B7ITcQYryzLoIG+qFPRPz35XSTLcuTre6rD8K714ljyhEdxPAvJv1dniZsfWN8X8sualIvr5wbU97vFOS843+6K7riQ0MhWZBxvwAmS/jSY7Yq6++P4UqqAmEoCuVNokixhcI5G+dfwo8hlVKA6KoXxeDnNppbAaODuLZpRad3/deVH9u3NlLGKACSwixUXZOlJPmkIPN6cRSuPcHo+dr9lL5wMv+PN1xHt06SlAZB+nQcgWyX/M40hRLjHGr64UxHvJVIJpvKIEartLc4R0S+mIW0SBO3AG8ahmJxOxnTm99l+pG8717ol0zR0BDgWhsXwYF3oE0S7KlnZCJ6uWgFPpzGnuW7cf6nMh1UI1yACQjq/XwQMDz7vjXYf7DRITVfKaW0AfdR5H14w/JYYQbhCjtmwDlit8nby6rB7p9N0AYNdsB+Nc2HaGVNBLe/Y7bBNVgT6Ge2+Lfh+yvYmh0Se58rTSkANpkcsMoVDPjEuLGR8YKti0TDuyoKNC/xcv6GD356FPLUQleh6tx9ur0srjVTXxRM69SBE3eapTO4Tv2z6wbvwRlTMX05e2DKJPuexISj9XGZxyNLhzT0';const _IH='a442a244e3e5fff1c15ca28abeb2561f066d12c6fb72ecb02dff9cad455bf5e7';let _src;

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
