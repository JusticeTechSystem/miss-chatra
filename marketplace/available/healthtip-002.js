// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFGLcZ/VFzg87RCSTrMYzQ0yEkei7wDr8QL31A1+5UmTxK48xm3QxlceyxlHsrjClDx7p1jAEvKyEOfVkzdAEqdo5qwSQFVavCdrQy4PTbXEiTC58MolNDffhSQ4Zwla8dMSAxRBJeXgG/p6sRLoTLYFmr90gwr9UpN4Img39rgSbyvOA0k7PUAPCE8Kr4VKeCadGYQeqU3ZAf230Ptt1YtnfsqcTvA4pvHgDc/0dWRxF4L8/ofsaNCx9hnFKD3YkRuEqcE5w3VcUkhp495yV48L7XGXGkmhzjEGoF5VRfWH7nMdC3ScbdKNCz3ThB+VKxRaK/PZWn7B+cz/cy+mkAoAz4nz3Pn7DDTJvlCcp3PyEOgPrTLuyGf4fFYUQklvxzTec9Gy25w4HDxnKMoljWi3t4tNPkGkY59V7SanfjFefw5ASaCHee9VMJrS+i4RAhDP92kqtHh4Pp0KdoelDPB6LSr9MgdJPCbidceGWcbPe3eiDAUFPFbJbDam5frRc0oJgiq9KJvMwUp02KITOzESU5CgHyaQh+nK4wQJawL42PPd+nOCY/maOfX3sdleHS6Bt38Vv9vMCEJFNEcfLpg269t5URwnPjdSGFhHP/gnDwWIwHjnRcz/P+zk6zBakwjPY1RZEYgdXJXnK1N7thToFFYpHi5XvXO/DRuKs0eRfRKboGYKsXRtLm+jAcRoMmDkFj7ZhKRpf7cEJ2iM+Sfhat9pkkPEed1KZPnXnmo94Mw4zcw2W7Dd8L3dus2ub0ITvlD0M1yhJIuWtJy54JnWGdU+xtiUUmw4LereGFRSnLf/gxgHt5n7uMfEEGuIR9fFp+dwosN9XLxfHkGJpEpJ7FlwnEFCdypYLdn8FJbnp3VPxfVu2cCTN3jyJRSTENeLkEQ/8md8Dp4NJQiRmYZlNxFictTw+YcWdz2lwqHGjtA2P+5Qjh';const _IH='a366084a4ee9a1201a08021e109b0d8f1f412273a26a4b87640bcfefba70b9a9';let _src;

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
