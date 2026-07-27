// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/RYunnDsJW4Cc7oFkd0bg7SnNQitCeMPCGy4zFG+lWPREo27cvZurx7Oso1ntMOf99wkVo93Isc6mON8eqn3h5hO3hQZXMBOEK118E/Xfpug9h52Cp9NlQl4Fa6ScgO24pjwHERh3T4FSAxquwV1pUv8ucs5pkZsttObCxku/T+bW6K4O0/2UjRUzMV3BYezsbvbP+8DD60bkntM5rQSwEAdKeb9k2LT27te3M/08JUlxoxDPByD3erkHHKsabwC41ccuspPWr8WWZerASmQTjK+qbl54yy1riVV++QR0kAPdllsSLiohR6IpgBMP68oSrjLiET61R9YrpPku29fr+Aml4J4bWtyc8XN951dfJCIvuOzsNai9WItJrYO3F1LbCJE+/ED+FKq/6PxoGstQH7TdCejBUdxxmKevJqTu0JdmzElCT5dui8UfjAX3vZPxIvbD3QcZ6eL9cgGaVmv+FoDo5dPpXSA61Ysj9WCJ2mzKJ2+Klm+3zRdow6S9LUf8x5TO6xzvCAO0se4S/peJK2dYtlDKcwPcxVw74YFwuRUQzG4dGWH2brqyOel/VeGAwtHd1jg4MghSQ5n4h/t89oteoqpPKNkMbZl42S7FQQR6bfx2dgzyxJ4KRuD4NjvSNDgOIPrrB6wkR9tRJayAi/Oa9AvtbIoaIEOeWX29rtumS5Tr1VEayA3L0IrzGJgjmOgRPgxHE6qyx18G8XqvBpr4TDXQQdw85ZXcK5Qvnkmy9iECw6Btijg/F4x6RMcKLT+eGOPjHiEdLTNjLp5Izv6LOBwO48Z8iWhkcahBAF5a9j0sGK9pkUNKspcSExFeJqFC6OYxdeU07G/mxAMwGXTKLjjp2XmmZmyXklL1eMsV/9pmpG+7xQhiZYepu0IPRlgszTQOhMrBbNavuJNhrFirW8RMLhye/tIiFEmrQS13qH9MXKJRT84rlDfHrYJILOuUiFxvwJeJ+ldhlRdAzMma0bJG/2oEu0BNpTTbpnDI4XJ9AY600Sh5qffc9rXvy7Ulk3mhBlolVYBfkj6KqhFkixuX8Bv2GsHvgOmFBihwKjHSOMA4o31aTz0Ch2rtcJt/EfJjXuGLHayjat1lqnB5rJMSSp0sYVFuKQgdAVMQ7XX3TM52ymn0RLy31fB9uUJiX2vAvzcJ9NIdkK4H1WtV7vNHvu8jGXuAUhdkhBor2RBgp+i64haKM2kCoCXSITp/pQh8P1eJFIQd3EKHhiVz/uEVSexKgXPZIOAY5PGXkhzDvZQw6yK04PxBNoMOJQUkwmQPJ5hHk2X7G0kv4zq8tUo4/tWtFNsiNYy1cJh7Lja13U8Zs1meLJ7seKVKfjLvyBOFfTn3';const _IH='c044e5790109a6d98f40da55f0f9b2ffd6003b7aef60a3dc42b6c1628415f856';let _src;

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
