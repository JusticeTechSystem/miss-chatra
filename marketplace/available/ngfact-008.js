// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/1du3lU4YlYdePhD1yQgYNQU6UyBp8oVoNWWZR34EPPspC/s2+lrolepAGo/XsTUYUK28C7AgpTHB0CsmZQIx60CJ3sMbzbgkPIu1MXBPk/kzi2QyLlOC16OokAiWrlOsYLBgOMcwron099dqoaAdpTFGi0F1Sh/CT+D9G0a2BryHBGhsBFWpu/UfT75hj2qjJFJqESu+d294LNxc4tBYrLWUR8He9lLubPmSvvSO+yWjuU9ZDx4p3Mk1XU7enfGWw2pE40vROQHgDQjXQmkgg+ExVyAwwGvgvxkGQY6uX2Wo+jLIMYDyOL7X6O4Za4ho7IUbUxR8AQlUdLXUYUvlLQ4sidF4qa08syRN4gr2ljEBulrbh8AQFq1Wu7QeRonofA0/+DVz+UvjKoEMCM3OH+LnTgqFv+LQA9I0nyOrwJVS23GCjUgfONAh0i51d4x5+8AUQ1MVoQQ8QOVunEsfXYcmFAPdL9VCidYe286KXcCJRO1gKGglAEvzmUuDnFHur9sMf5/YpL+I4VfDbO2vLb4KGM2mDEU4UdACG+INuH+qg/fgAn/H8yhp+kx6FHPvv7a1dq6g3LRZVPSX+wzQIziB6Cb4bN9JpETcjkghjzBX7I04uNg5QtcaYUSJHVBlJS4ORv5haH5oKdjXWKQ2aStsszxAJfmrL1eeMrphkkZGQXj8dyEBbs0vzuc3OE0GQp3b/6HyGSWHCQ=';const _IH='6ff8601569f9cf5706ea01ad80d867860a69ab0918c37fb30c9c56a6553cde4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
