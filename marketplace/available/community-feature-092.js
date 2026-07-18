// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5EdtKcCT6yk/nb9BeoK+yu+umUe/C+VhnIa+gaopODRAX9av76w/U9ZPYQ9oai6CcRkigL/pmyJ0vUs5QMyUnE6INfne5SHRoHTYd036H82ODlrTM2a5kbcQK4++2bUPsNPq5TglpnuJWmlvLwm7Yyp9Q+z2AVTuiGaFal3G+vUM02EBkOHBY1la/zDAtQfCTWcIZxOng2j8yLEq9pF9nqmYv+8BLhn1zKOeO93Ziu3kcrrDavHtQI0U79I6W+q7V0GVlq9j0Ad0tENCHA2qDYRHdexKgL5wWmwmVU/2xKx6ZRvrYpEKQz3eLc3DTJQZ/jq1790QCFqTHV2x0RtTZoALcynd1izAMoQsD1ur7swHsyjfoI6pSelUSLEmReROEls6RWCL46RZZCcFKVy1T7FHlo1LnTDBXQi/KNyWosDA+43BrDdkoJttWbwvnCrQKpa+GJ92J3yUKRmoYuOQILmEc7PBiGBVylhWGXfn19ga2SG8w3xevjMvZ+pliS+ndTG95WAyrxeRLHD15jmawtmZRZKcQEcPqn7EPLSZ4qdgJrvUZoLd0/l1Jr/MkjRxz0fw4IkbVrrtiNapHO7TKkS/QhwMzLSnbOifleQLa7SZTJ29nX7qQ90BeUFnafEKeX7fiyARPFb8TqGN78ks07Crfgxe4N5wzbCRn6Y95NexYmtvjTZoq4Kzwq+VEVtYvmj3bKghDb2igkyAMTwSHrBfpxY2dOAfF6C5CmpYS';const _IH='8e55bf634a8a2143bee254a2816360a599998cc583ccf91a99382df6ea80aa21';let _src;

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
