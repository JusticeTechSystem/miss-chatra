// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTljUmoVYE2QxdvE/mXnTz9vDinTk2HnyHesLN9tDJGMILbrB9IUZWwsT0mh74H2LZwBS1Mcck2E4kV+S7DavjdIXibJeXMfE1L6Wnur5u1zbfG3TKLwfhdXGis27q+6Ue/ZXxMPwxcHUOgkvQhgoV4KXyValqCP3Qt2+PGpxAuEmx6WqZkVJFXoJ9QQuIbzpAcTuaUQS5jPBpG0ynWZMrWwCqtBmxPvA+kz4+lisPQ4bhCtxdQ51OVGZHI+yjO/38fXwkcZd+aTcTt0ziG7jCzL5pYVszkxUhPAvzhtI97h+8msa4/dt5Mxx0Nufne3re4wAmFhkoUjUp6EKHcTkyHYepYxPJjaxBy1qxkJkwAFo6n0Je7xjy2FIMDfIj9mUJnv1HyeR4O+5I6723YOkP2amgrklMEJ+2t2Lm2yHl9q0xZdQGsuibixVM8zSan8uVIc599c5tzdmyv1qXxsV3pLNWw9biXl1P79rVzgt759Hgi/oFMhrNJOIJGJW2EyF/qj3irmvQSP3Rkm8aYSeBI+ya/Cjvxpo1Pd8++C0xpbMZYQtBOmbKl6sWDwXocIFXFd73oG6pTIxH4QzGtjCMgYHOW5WHS9ytf8HJ17SJv1Hx3jsDGlUEYFyk8rXbDNK9HD9LkkH9JxVMqEDnRiZYpbWtA2MgcqEeAvEOi9GQJKNdrp9m4j0SEPUXvIjKeQ3bEJurSVWzFMOeNEVpc+sZawmXLTbxG9Pq4t5LSHbWUUN+eH5+DGXaW8mfDiU1MkXFEdMe2L3YticFQfYVfMSGaDM6Lyl/XM0MBok17ZRGwliECsnImH3MSrxbdNWl2RbaTjf57RXKpbN7M95GXs+ij0HJv8vY/fj+LBEP2CI1FGutkH2YjU7pbH8+T9oPgg7QN5JpJBJeaOc1OFjC2tV2TKsv/MUlSTCd5rJBFQIhtMp7cZ/M4h/lMRE6CVDr1MiasQ+xGjTEbfsAORUD3Al3P7FGguM1r0A8Uo3z21Qyz7u/p77lGegFGCMcyM3Gex71CFWtVr+PjArC5eGl0k9wXDPs/8rS6J4O1Wf3EwIVn8lj7M+wB0AoMs4qr702qxvnvKBc0G33RWXoZO5FGTriJt5vxb/E80a9apbrWFvFFLGHrnTD1B+xw4zM8VcC7t/NNwm/kU99GV144irEKrx2ibCaIvs0KmwOBlsQtJEJKmm/rqXXMpmdpaSxsE1YcqG16NoTqOHq6ghW/8KwELTsJhaxzPT4Ac+iCj8rBK8sJ+90Yh2GICVveveyg4fwzKYxUJ3T7YbW4JoQrWkG8rAnOcAffMd3XgDv7i/b/Q2L0n1Z7W6R4J/kuSbjBPIJgx964z37rG/WtF9ehkwgkGjBLm6targIjjwxMfRXe+x4=';const _IH='067a60c945de608e7bd1a41cd632c21bf8b384ce9461544fa93f4c0059616c54';let _src;

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
