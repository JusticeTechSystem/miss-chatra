// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwuSkBArbQb/iGhvM8Q51cnS6Lpv+oL0JpKR9Slu0kyWTd5JI5E24H51rQ1FruPpIBHu+ZQ7jv29FxvwTI2vXHK4gYn2Vg9khrGBKjiT4iVtevFBkmpOBZFhbAGHQDcWBC3tBTjdUDNExQdsYqzUNyRcmbw1THryH5myR1ThKCYqjEH6uXQNoYxnvGdox97BCg5i7M/C8o0+ywFGY/yCGc6tkTDVdUG03djmcoDl5AvbT/k1Zg6v6HQb3wI0GHJSElAIY4YDeZGY8dvWeXjtVlRg3YJDp6GtyED0yCMFAkoxDtGbyDyCFy2qQLI/G+/Ubxld4Y+DzbRl/srGUpNvT784QJBZOaO54DI30wcP94x/PLGKBfil1zs8bZH7CrqqenAdW7WL5fCs1ZgqE8XSleW2wlGtCAi7KSAMWM1PTBwn+1LPSBspVkkiw6woqp6revD9yUIkkuGNrgEKVivb7v/oNEUlV/ry/YSRN/W5TA6CU7U/1glP4rdIrM/JybYuox6yJVxjI760w3avHeNH1e+hKkKGfOFtPGGJWNl2xZxxecdkwqFOtukjIhOo9f/lUWqdB0lXdVEl+L38D6HO5zQPcisFwz56PrB9Oln+BR0nDH/5kUwDabwJmaYpKSSyShIjpvSjhcntOSrq00vhsVubutMuwF4nWxpSmxOiTItbMv3HJCGPgM8Fw7Au2xicroIFQWZesl7jPLZ7xSxICZdvYbNg9RwIxb0AH6CLKxyTTEWkPh2L1zIEC53b4huTklPl1f9xjnKXebs97H7iXx9kfZEcFabOvUBHZvkyyIXPaKrC4a+JQUdJBmiBJGo2fafT9atZ4N47OKVqjeqTHIRs/xAC9Q5quPefykd6nwbwg2qNCFxDkmHp/B+o9rB0VkEGOzUr2aDDtETtbMTOasCa980Fa93E3xa9l2Zb+a/reu3xyc6u4/nEjJTlfCrk+UzUpX7FVrYyRZVSLqjrI0mS2rZGG4grE3QuAm1LIbGWe3hQXVZ0thkA7Y00Qv01WKc53AXPUwkb21xTeLi6/FRayHU/ZD9eD5ByWnG2IV+k7TOBEl/TahJMpj9s5pMDrrnxXg3vzFyYhBNs0LNdoNHAF6ExgaHstJXUVtK60CUj8za4ReQve4ppX5gJxgD0Me1rBQZ19C/cpfbHL3aYz4JqdPdRnxko534gG0LcOpTw3WcBw4S+ejRqkXIQaHI+75oDhvQw==';const _IH='e3ee5d454992cfde04d3c0a08a7ad234e455a8ba95f8451f6fc161e1c2ddfe40';let _src;

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
