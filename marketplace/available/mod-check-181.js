// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2YmocX3yRbNcbgHFlzhTn2MvYWp+5IZO0djbUr9AeYFLO11mRJZ1BbHELS4qayPMqLpkUhhV6aaexFRL22aWhvDdA+emeM4S9EdjvAZa9aimUI5Qf+D4nFeDjFGx6OW+RZN7TAlBGik2rHXZdDLGjNulMJ2p7iqGD+86Mo9MDL+1ySMJYnHcKSO4YCezpL1jk+io9WuzucTBAOhm0b2W3lEGbFwTdu7BmyX3qfIiazg/VYCIun1bef85iKKu05ICmXWgL7pXCKId6EOdZEEmrKwDXznP8jEWPQsR1g2zXl5Gi6KL0liEqkbeXZTQOXmHNPttVXfo4KAT9UGcN8japZaM51FENt5G/vIAPIuQjedYoAlltRCYAoKgOKY64aHKjGg30K1DIR6Uky23paCN0yCL8zlF5QCcyKNUcNe2OxmW6vuowtHp86hJ5LLXbQHIZcXO7JiZXYaaYpQg1+t4gCc2MbG/08m/sVuRLgK9HPfriTsgj66v8C1qxqTE3PlsP5UrwOwSIaaOSafVgZH8egtTWgVxzWrzGCfpD9qbTlVCoe0TeqLg0uqWZjLNG3Sj9TZxOf2OUyoGBq4oq6LD5XjF/0GTvO09zDPxjQ6B2uHEz1lfWbzO8cKb2FHMgtuY/BBrG8Wjk1ohGWlgXgm1SpU1HTgjwz4zcqxGI51q/wMrD4J6y5cUawiUTqcuvJKcI3sRUFjg1nfa7wtekyJiSuTublYXknMHMPebDHuo1EQhX+KZSzw7ArthzAjs6jDTZUUN8EAn3RQbI3gNl4ER/pNaSCr0ZnpsTSlYG+RA4EvDLkm00io5MS45grKOATZHAKFEi0fRAeAbLRMfwBMNKraEmN8+r/neW/DJL4eWnW+y2Ke5lDYE8VlYBxMgWahLmCP+vq7TBZX+Ty4PcKX4tL0CaEnNjOksFsy82mQHBUSAYsQkcVl+kD1I0+0keVRSXHM5LMLBNJtWhcn9J6tVBC5BFN9+fY9hpHy/hMsCjlA3YPgzsYOjnJPV1NDoGXvBPn9P5GCBGa54ixJEEurU8l4xOwzPCaV4DkiU4bCF+7MHr6fbnYldTCZWW9o1Jy3E2UYW6ih2mYY8FYiEb12cYq/y1PaXzAD3jzUbh9u2UobVYySPG+tdH/WMClu/kCfwnPipQQ3TvG01ztVietEIrwhYBhiZtkhZ6WlgOmfhqnx9vQu5Of89qnwBleK6S/w3UHwcf3MWETNGuUQ5FHChqTrRKI6mjmLYQLGNgP70Fd7pDMGcki2RAaKNZWr2Nr1qhtf51TRn8RrCAqTpQYslzEok6FHKM3iKg+d0GFyiR9/WtwZL7/LsuA1bcxexHJCN3ivt45VC0Sd0UJtNSMoy4B9uHHppRV3Sdm4kksy4=';const _IH='e28461bf4e0d7d074e198ade8e561596a8392f624fdceb0c370cabaa59545b79';let _src;

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
