// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxLbejwq7gPSI6blJBjCsm3GBfFirNk44OVPe+xoB9zP3pheZdrfkaSKmwR1kwmzSafmCoV/z6tpHIAKhAUb+iY6PkhM9jCaWFkuCoCxx21k5JbcREBnqMQfuRdb8n7ckQnh/2PCqpjX/3JjHPENbdl81LvLuqLGzmblFkqcLofQFZuA80NDbPjaKrg8ZH5QJBzvKDBQKpxdvVHTu7mHhqYA7R1p3JcIMF24feW9dj73GB8TBkVKXoODJQqDyUPkB5QWnFEWKP0y13r7HHCTyogsHSPFpz5BfK660sghgtcnixfY4qSR32I7U5w+Wa5eU4JVSdOd8HZ1ZyZwQEwsgF2nUTrt6d8d7QgQ4sdZGnb7jsyWutyFAfUTVO86zWd1fr4igbJ5y8Ft7Ii/2JmsGup9jy95Q8c2vTmsstF/5ugcbbdOJS6KIcxPqXTdfcpN+TP4OrXkFPfTsMNzKatmmDDqwn8oTCpb8SXAmLGG8U7oUIHGKLFz0WJ0DHRXaITWcqEiKhagMQiv66OiRuuR62iDYdy6c8NPgPbCwg/DnnoXzFpQF6hJ+uwgqtRGjdMl4QJefKUjp1fXulFeGbbSP9kkQwN3n4HhKTWQ57KhQisK7gXQeiueO0wKMXBeQO0k6qSIm3vi2FRXj0FnjhhSLAV3NUnxFTTAs12YGX/lG8Jemuu2S0LHMQHs7+H6FpcH/7+DX4bFBN8L4U8okULP2raaAF7UKVTTd2ZPejE2gjEg9glP4hGpSM8R8=';const _IH='423d519e4c30f93b9a5b454e2b3c84938c3e2e28244130bcfc4d04828a2a3053';let _src;

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
