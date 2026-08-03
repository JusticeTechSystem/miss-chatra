// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSm3kIzGsv5zEByUmsW0u9HYAx/6krUuEBRPnIctmqp8OeyBvNP2yL4Th1aIBmOvyX+hxGS6R6CO10kVmQmowho/on6IjXjMmsfOPoqHJvOtNf+65JwYpK92NM/l30uWC2Mh7aGz1UUFT4P07GzyuZXbgmsplvAeO2jqZzO7M7e9lmXdxMN0sJk/Kb/eeNrEerTQhGUJcMogvV4r/fL8aLMOWEEfFK1YGEFRVJa1z9jD6pGAHvYEfG3oAJvGGySxLyJI+Kme4H/LqlX2jvfBewFnIpRjR7a/vIPnT3m2bsmDHuqNS9Oq8lUNwJ+6SYU+6+2DHKesuMOgwX+1NmWVjCog3sgZ5jbjSuG6oBjDxsnaV0NW3BPhVqzSMix7h7kAnckgfpDeWVTabY9wtibBXrix6kFdtAqLskQTRfLH7TLLig7NB8MJhc/T8Gr2fYrBUJCZmEBtJXdm5XJD4posmp0SXvPAnZ036AIv/+YZU9MaTzf5gKAkeAxdNI2+TMXleiVjdXIB4L/omOXiBD1GLTdDolpMKnkkeD9xFGedZkbcziXCgsc2fL/LRP2jLPs4HigZdz3IXCp5K8gLb3Qk4rK6eut8MATYs8Pk+u3afwhggzOZk8yUBteFSwv+SY/ueELGEbKqaThWjcvo9LyksPEIy08uiZ2gdwZFTw+dZtIHm9oc26h3GQdG4LL7tMZv8D/zSA3wxHQ1OP+MbsfbZ2pEkJ1QrqnlEnPaJtXVMo6dzis0ykRv0L3rp907XYX0QXS4NwkKBaMQ3yNHfvtvT5QPlAS4oYYndzPNH4bLemZEEXXzAQwjfa33dGByeKePb8AbVTNnt3pFlUhZUVbqbeRvEFAHz6e/btkw2alag0+8E1UyLJTH47xANITycIHroDUl8pVOC9ReddbCR597zcBR1fqJdu1r73OhRd8ff1SUItD0wchUKPF4UJ+pnwatShZscGNzYFHYbL1doXtoQcwmWgg6rICSW3TwoJvm3YgXZ7wOB52hymyRR+xEw7gf9TETncjXLXNz3znNhcRw3z6qu7RcmpChB1I59/Wh24Ut6On08LrRhiw0TtxbS8ahXIXC+7GqfstGudscz3u4CEuBmHs9QQow5KxweC2SkaoObkc5rVG1ad9NuXtzH9m87EIomrtr97bEGoNwvn/fegM2J7e8JSRhAL7WbNzEf7fD3bBTgDQEry9AQrM7CtTD6h2QVsA//mjqGOhtDjfPh40ATmqhHIyk0SWsoAe8i0MNmJTSz9TnmZ0hKlXcyuHMPlhG6oBoCJ+P27IWuE8zs2yRFzJ0V02xV3Y9lncT/tIikHc2u7khPvCVqW/kvzCw4UpvT2M7NA0';const _IH='6eb10a6e57a27e62c83ab908695284ffa0094bde9e8b7ee8d1f33d212f12938e';let _src;

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
