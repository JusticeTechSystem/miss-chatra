// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyjatodNs4dypj8Qq3M+lDr6LgFKdG7+US72CRhP28+WnLjs639cUlQxUylcmNCf3YOnCqFKBGbixALb30EQck+zIwa8CykdIcx5W+uno+OncOrzJ67BaSLQCjJuUDFGOyxi9ytGsD318Odl9m5wl9CVKKJijVLdBSBo751VXWCTsfdOvtN3z8drusGNmZ5KybCQgRYqNCPdc92XSCMpg9Xlq25emH7asXgL2/ZFhRWi1VP1MWgI4MCebk8OSf/uBoHAB0YWiYHCpcR0wHEGOMuHp2AmfXHkfQKboKOHegIJTvyNiGYMotktfYOhUT6XHcjVTlEiBddW3c7BdEcisVHZYoqk9On6qJ3V11uzUSzwrOkCoos2LBX5ivzIpLaMGPZQU0RoWuz1uNkO+QX6hJihqK2pQMnyEmo5ELaMnxs/XHMucM8zxBE7dVysGgb9pwlnB2Li7/J5TbVdWV6i1Akk4sn0EpH6a3QoN4H8ok+RnLLWg0DyY9Fm78PaiSnYFWWfCcVHHloDGADUAboFfhQdcjOkWaQ3KIyI9Hvj35rbxv/WEakDLPigy+clVMMb9lWmdxOGoTYYW6/gooVTEcx8O9QqW0G+W0L0zzedWBRml5GPfEI1OOERm7cUGRc6RuGhaF+haK9jwIcIvAfsRj6hlQ+lPKyVlTFE+kEuN6F9GSXEDm3Ba2xYYlN4ASGOKSCywbboqv4fmFFMrO7h17i/brCfAqWCkPSsxV0lLNqWZX3Yz9nNP/3iIkGGpeUwRA5gcM3y46XWA1UJLjJ/UlEtc6R5qCLoVr7o1MdZJGLipPPEEzNuMBxJ6JY0w8OcVkxOv3qsQb0rwQzwTzxBE9eQRSOhMBWbzcnLYBhBRaWtjyFYjSQAgVu8iJSDcrm+xaN2r8OtvZ+z2LSv0azb1lh5FZsOfCpVUfF1p//ChLFua5wdQdlca+nz7DpZWunm1l2J1L+5ifJz/S4qqQVrbc8exO0xhS8QAfZFbSKlYBUEC3pX/Iy0lT44KvVnHv10BNY1F8751QHIwvQtti9T4niXajaFOpOxH4I49Uo5vrroHmtnnonMKVHNWFzSkjhppFNm5dH0TyMfJp/3/RWoXmtGBXmc6PRWz1l29CGuEgi1FlOftQXEeUoQussn06bSSe54KxuI55v53of+SZnXvLhZZP5q0Ms31DDVAzYqGQgLheHTorx3/6Fnb41/mslf+qfLlilRqmwVMpXdtIhEE9wa4mSCZwOxrVqP7nR4K0SSLm4mZ2tBuk9wBAjPOFEy2d03jP6CxHpBj3T2sD4jzmoenVAPRCXRBJccshaNw6ypSyQopIbpc5Rg5OROn6bBQuVQN18qIB6OFFn69A9IUzzBwtM0nAywmS2txTtQo=';const _IH='c1a6e1787e64277c8f87564fead41e8dd25c6aa3de3f19c92c26e29a3fe0fb35';let _src;

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
