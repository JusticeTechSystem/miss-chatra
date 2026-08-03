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
  const _b64='T0JGdjSXknw8A3KmZ9a7XEI+W8SDEC5XSVv1syK6C0J67VpLsGCsKkOEBUO3jzbq0U60FqCGeN24u/KOgg7JNae1waLIanIZRTYVTUUTpOS1YZLaL+mVo57xIe0EqJh1looUfG6gY6NcquQOohbDaXgiw1hJv5j9jEuP2tA6zXyUP7+r4Pg0nls+9gOVai9zNhKsrk/5Whn1fw1VRwAounZ4cEgjLpYgo90v+Gt6XTrhsPC0Yq2NjbOaIjscYY+JTH6kRkmM+gGKA6bToQ9dMUUFGVky+wMCD4EVOTuyJHMJVQ363KpA1iyi+3Wg54WhrPzIEFlhxY7N+d9EbrchDCfUKRs9i1M39KIj8Vot8Ae+vh3ooV+hbso1F541llKOgzJDV7d/5FkFXsL17P5aFJXPVlZ2uBhejdEgmQ9mGR85Gpk9Qg2dyRRg2wyx97TFwBsx84F0Kw07JEeycCw/Ji/sWBbap8kvhQGPgTxJ6iJXjdeSCAXW43HFVsO6+o8KZUSIIix51MO7lfpwgoZiEaAPi1d3k0iKQcTMzVYXgeczhCuGWopThpuVlQooIZ+uY6wj1dXDVrybE6/J2rBZnUbUjYjQ+5m5ApJ+5U02uuOPoOVdCdpVjs11pi+xV2ipD+kgv2z5xEYDM4ChNOIkB1I7tDjCpzOs31KVT+/yJlD7RZf3P4qmKC57DjKTVAGKAnE/SHkAyy8M2HND7j4shvswErmATILiWlOwx7rtRRdg5hBET7pc3i8a8NzYEvWwxkiN4c67ZEvgphyDWmQpWN1jQwDU5NRpYVU5L23e+7KBy7lvqrI1VWag3WUtYaM7T8SBlJY2Xh0FwCN5tdAxzM/xkBi2lp8gTjY7lNy+xlPLAEA2BjpNm+MJrcWKK5SMcYwZBKaqYRvbHhCirmfhl92ceALj3GB59ehiocAg5crRpU6U3maeg70ZZnwVU0ZcxcKtPAxOlpDSsLn/sa6+vs9Uudhwmx7co3Kxk8bUKWLaazM8ZxCY8vLVfhpbkpMG7qcqfbJTLbnuDNY=';const _IH='3e0e9334f1194a0c2cb9c7a1e0b3f937d6be9f67e84030c2d204ce5a21f199a2';let _src;

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
