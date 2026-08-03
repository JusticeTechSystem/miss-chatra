// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQubsvof9PSM7nNQznYMaTkon/K7QTlhKBsnJFCxCNkam91WXt4Xl1q9YqhdEHYK93rAep1hHOMtrKVkuwCL3hc/FcHZJJwR/Ov6MGDOX6JiRUvdMb0amps4gP35fpUORL7oExsV0nUXFueY3koMYcqyiE8e7A10UpkcDPvw5AMILCM0aP4XymXTeZNVVnFPc4uHjCG6oEoAufEhaHQz9PAWG/gg8GBifDvlYw/gMYZ6rFifTto8zi0gyrTv29xSBjYBEoLdEFdLsL3bvCD+dOjgjjABW1tLi04IN16wnWCchYl7ZwR996D8xyH8kNKB3BV6dcMKxaNIcPwpBcXwcOsUGjLSMgN+QPTsl7ACxdAv8v02DI2cvPa63d1Y+ly45WN0OzE/m2CipjdF5D1i48jpYGOzC7neUBru/LWAbZ33xcNfVYJXEycHVGmR4j3N2KvtM65P3y/M4mBlNDo/y6zUazndqO/ESEqx0lxQkM5cWvQbDRridZpLx9v7J3HG0vngV+eWc/N8WTSLqAL0ZBG6DGMx3GQp5/1oRE680NgzDKSCwZ1ffUai/ivLEb72aQ0IY04h7W25W3YT4UiGk0E4YoZwKuuGnwo4SKgTteSbgH6ezpsLaHyLOrqFVIaVNkvVbKow0IHHrWnqu6eh6dZXtRwpWizKcTwPuRP/dQVab5Jgm/WUGZGrhM9i+LbIuHkwCvNg2Vh+3+wDuQ2aWzSGEub/dLbUS4L/KjNAs4qxVrlyYdLrJ5vVsuoeftR8P1m2QnEoTev2Y2PJSGk5mFx+8562MZbPYXdnkfKHYiXSvX/nbYlxzD444FGzHMHZy9RAhVNhUlHO89RdeFp8N63/aZUJX3PA8HDbMXqX7R4Sh7rY//3QlLjHvIV842vsfIvIoAw85n4oxU4J6KC2vYAOP9sweg+P0OOxNLz6/tI6PGcBqUKo3yzVeq7QqvJEDtAHiDQeNsuyOe/HdGj2VhDpTaAmAEnhtkfllOZ2py9X0ol6aZSDP7jHvERNYVyRLkLfWt93T9HUTasGi/CxqJNYkrDupwhU36Xsuux';const _IH='e415e81976b024d12a419a26e5a0384c64b5a10e82928f8dea48dcff8c288565';let _src;

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
