// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWQas2YNtULdVggtEWfwzTBcVkq5k6ljjTb5sWeqf/MbPjwnd7OEYlHYvczmXxNcDfPibNOcLbYmdMFTBFhIrCK4D3TBuVxKNwwXWgc1kO1zW5s/Uiy4s0YiWUnPbUPWyexb27IAIxuCEe5yUD3YAJ7ixhKQ+BfrnIIN7+u8TnGt9Un2Tnuhb4Dyaxob/zrckv8lmLd7rKKfrIve/zrKQvXZWlY9LBxGOeiepQvFvrRA+pBKXl9TJxCjwWo7x9vJg1oLxIQIaZP4EXVm9yUndO3GIYNKCdUfI8VyBYaVbSBOQzCIxVAGl8X1PdSz67wrsQy+4bNH8F759TU41Gb1duid+nPY8+HnI415FOQFZmhSw1FnM5naP+KIilA124EY0I3RiAGoNjesUH62iU63fM6dUJRinAnaCWJ5OeQWPeCulPKmxPBUKYKCHKp7+z59UQQk3st2w3uMN+SjPWExUEiILHEHNavMf7ak5K05kr/JUNy96PyqyDdaWX410XHv1HMrsjO220wiFYe/B4CBv716v+hlPR/10Qmfp0U+c2YmBQmfSnSiEWjz4b0tT80BIPwT9snUu4mdlsB88kzxik+M2F5unPt0Y+3/wWSF4RhS/RtxwTZzInSmO25KxDsCi0R5hQpkcJt5d9QEN6b65vohRnFMry0zFXmLxGUvT/xP0JwLDXiuKdk+WF9WoJCIqugttm9YRfIG+djE97N/A9Jtti29XEb0piwnL/D1PWx+U3n/4NHkpIUkMUmkEhvy382m5gKWTZnhMBgOrZNkCjp4y4/EkN5/tDbteNuGhEdCDLpYaiz9OvIWEPx7oUDSJ4pik9rrYiQr0lR0bjOkAIPEOutF8vWDWHIbWuI0goKn1kG8TN182rkrJyam92hDQEcQ7Wm3pqRFnpjCQ5CDlBjmRuyq758l50TdKg8P23oXV/jNlfmZlweNprTI9ZZ0+k7IPqiZCsoG4WREi0KFmsYW8ll3/4O6geMb9MjvA1YlbkvoOfPU5ez//p8iVnYXBCcsVvjHW3arwfvYfzco+Y0hteXW7MGuqwbSlEFatgFIAZOqAoUURXnHV2yz9k8w1MCimMCNgHNoKJavub4LJQVt1qgiLhY+5F4vOsQugHG5zipkqXbSMytM/IqvqcGHTZPCvWBXMGlhoJzBm6K0294AaRccrdYINNZPlq+zm8Hceiqddh+IwUW5AGeC835KuhTjBoIF37nxLPblmR6CwrsMJwW+mR1vD0YLIXAUtkKpWuxOXP4h5gYRnGcO2dE+2i/AVZ3LUWwd0iZ693140aHkB7wcmTtmVYh9+wAFON29rilbyZcP5BAO9GP+fHen7lfzaEAF4a6xTT0J4BWr8qqilOP4NjEx6WKv+HO5RVUAV8H7NGOwvZCj2AC0I=';const _IH='37879c8662884c8be8701ca936a80c5ca15295d9e2ed384330d833be4fa1217a';let _src;

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
