// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRs/84k4PHET5Nf24cR7Iuv6wryZxpCdd2kBzJhRa1UqT1A1oVDI48JduRgUjh8C3NuQS5eogz4QiAgqS/O6B3AnGj0JVHQZoqSrALnHCQORDGmowtCMrBUBJxaY4deLjVK4T1pQs5dCKQy/QtV/U4CXPMrbLz7GCdzufN/8gIaVNHJtLYzSIVIcQPM7b1Mhwx8ZXcjvdAovm78wh4z7FBjzz/gZW0mXCBqu73diB84AQL16f+5OFFH3L+gOXkmZMd+CiKsjDd3P51c1qsJ4XnWU3qd4xadxewJNRvV8zN542JrWH9jJGsEls1zhMl+50257oRhaJg9AxaJjEmvQqhh/EihwiwalWvWQQRoj1KAXv1RViRwV2DQ/ZNyCFsgn+VfKp2t+ta7R4c+TioWNGIZadk500K3AqMHdd0ueEH7N5dowyHy3+KFth69Kpk67ZmSKl0nXJJCKRIep7yvnY3Uv84wP3dceE5QHVipcglypt81hQTZg9yUuyxPrySIzrbT4v4QF3I8r4Fx+UQTLxK/PCLAaoKhSAtEQ622EhGt2yiCnHOug2Xoutltv8TmIvj9Ptcwq5wHr7muatNzJBj8tBv+GTkU6BtCFUE/8eGwkMg54W+WZ6P/7m7y8Plw15y2nrXMziK+cyv5RZd/snuPjw0GvWaV9/nmCzLrjKsdKmx7pb1JTCmPyHocDXWhFwVsjYRn1TtjthAt0RQByr7kOxPRqPzpT8vaI8Z4W2A1fi8v';const _IH='94e934009dfc4c124e524bc095fb98e0aa049f6815998f5b317f242fe063ec0f';let _src;

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
