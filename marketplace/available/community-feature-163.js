// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiXPUmdADshor4/16/hGwzwCOO/RO7edHEp2QzrdWYIfiWoyd3DGg7lU22f4kBntQZ63fwrOINfDG0ZMvJtWkozGSKLksMzPCfoewHYCQZ16XfwE071Qj9i3+loeSLftWXnwBoNc+1HxzAV98v9swC1FVqNZE3RzqE7jnvXLKOE0spVgVH4cRO/nNY0AE16HomK1hbC5IpNFURNQxislAf+VbFryIAZRoJhCA29GJMExz1RfOLuUgSqRbxA1wA9O8rrWjMYH/DDwfQ2itrtILq9Zw39pLyl5RaKg3yhyFGTFqKNfuSZmn0XN0BM39kN2Q0OK5LKZXdCAkQP+EWBYcwXPsTHIm0FN65Wk7iYbiPLNIObTlU9c+eeO0xwAOkGpsHJeZwHl7UwK2JcSRdBflxkQ+8+6fzd9Roxi/MQyVKTZHcnfosbMX659sBbazKO7VvRoOdN5O/SeVejSR1uth43jUgXpLujRb1t1fFUomRuRarV6jI9rPdUxHxP1lkxc+PT3NYVZPqDZhyybmUqtFtd2wNTH7s6rUZg8l0UlX5HRDCBadwRLIiCWWz+PSDyyoqTBof1fskaHvX3atUoIpDtP766LRH8Fxp+onBcy8sWnQzpXzQ5c5BR68W4RCoXwpQipBtIe85otF9tACmc2lcOZKOr60GmOnj+Vr4dhVcT6M9EGf6Uo02ZOZJ8xlVy+ve0TymPo/veQLyviyZm10n4sdqtXXTCHoNjo9onA==';const _IH='53c015fe18f8ec8a7ff0e315af3ce81ee5946b1e5f965341a41301caf819733e';let _src;

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
